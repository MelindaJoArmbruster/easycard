/* global describe beforeEach it */

const request = require('supertest')
const db = require('../db')
const app = require('../index')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    it('is not exposed', () => {
      return request(app)
        .get('/api/users')
        .expect(404)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
