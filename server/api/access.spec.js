/* global describe beforeEach it */

const request = require('supertest')
const db = require('../db')
const app = require('../index')

describe('Protected API access', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  it('rejects anonymous payment and order writes', async () => {
    await request(app)
      .post('/api/payment')
      .send({})
      .expect(401)
    await request(app)
      .post('/api/orders')
      .send({})
      .expect(401)
    await request(app)
      .get('/api/orders/1')
      .expect(404)
    await request(app)
      .get('/api/users')
      .expect(404)
  })
})
