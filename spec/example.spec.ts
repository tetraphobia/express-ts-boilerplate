import request from 'supertest'
import { expect } from 'chai'
import app from '../src/server'

describe('POST /api/example', () => {
  it('responds 201 CREATED', async () => {
    const res = await request(app)
      .post('/api/example')
    expect(res.statusCode).to.equal(201)
    expect(res.text).to.equal('CREATED')
  })
})

describe('DELETE /api/example/1', () => {
  it('responds 200 OK', async () => {
    const res = await request(app)
      .delete('/api/example/1')
    expect(res.statusCode).to.equal(200)
    expect(res.text).to.equal('OK')
  })
})

describe('GET /api/example', () => {
  it('responds 200 OK', async () => {
    const res = await request(app)
      .get('/api/example')
    expect(res.statusCode).to.equal(200)
    expect(res.text).to.equal('OK')
  })
})

describe('GET /api/example/1', () => {
  it('responds 200 OK', async () => {
    const res = await request(app)
      .get('/api/example/1')
    expect(res.statusCode).to.equal(200)
    expect(res.text).to.equal('OK')
  })
})

describe('PUT /api/example/1', () => {
  it('responds 200 OK', async () => {
    const res = await request(app)
      .put('/api/example/1')
    expect(res.statusCode).to.equal(200)
    expect(res.text).to.equal('OK')
  })
})
