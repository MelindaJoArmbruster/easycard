/* global describe it */
const {expect} = require('chai')
const {execFileSync, spawnSync} = require('child_process')
const path = require('path')

const loader = path.join(__dirname, 'env.js')

describe('environment configuration', () => {
  for (const mode of ['', 'development', 'test', 'production']) {
    it(`loads dev.env only for development (NODE_ENV=${mode ||
      'absent'})`, () => {
      const source = `
        const assert = require('assert')
        const dotenv = require('dotenv')
        let called = false
        dotenv.config = options => {
          called = true
          assert.strictEqual(options.path, ${JSON.stringify(
            path.resolve(__dirname, '../dev.env')
          )})
          assert.ok(!options.override)
          return {}
        }
        require(${JSON.stringify(loader)})
        assert.strictEqual(called, ${!mode || mode === 'development'})
      `
      const env = {...process.env, NODE_ENV: mode}
      if (!mode) delete env.NODE_ENV
      execFileSync(process.execPath, ['-e', source], {env})
    })
  }

  it('rejects a missing production session secret before connecting', () => {
    const result = spawnSync(process.execPath, ['server/index.js'], {
      cwd: path.resolve(__dirname, '..'),
      env: {...process.env, NODE_ENV: 'production', SESSION_SECRET: ''},
      encoding: 'utf8'
    })
    expect(result.status).to.equal(1)
    expect(result.stderr).to.include('SESSION_SECRET is required in production')
  })

  for (const ssl of ['false', 'true']) {
    it(`uses explicit database TLS setting ${ssl}`, () => {
      execFileSync(
        process.execPath,
        [
          '-e',
          `
        const assert = require('assert')
        const db = require('./server/db/db')
        assert.deepStrictEqual(db.options.dialectOptions.ssl,
          ${
            ssl === 'true'
              ? '{require: true, rejectUnauthorized: true}'
              : 'undefined'
          })
        db.close()
      `
        ],
        {
          cwd: path.resolve(__dirname, '..'),
          env: {
            ...process.env,
            NODE_ENV: 'production',
            DATABASE_URL: 'postgres://localhost/easycard-test',
            DATABASE_SSL: ssl
          }
        }
      )
    })
  }
})
