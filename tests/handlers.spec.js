/** WORK IN PROGRESS */
/* eslint-env jest, mocha */

describe('handlers', () => {
  describe('greetings', () => {
    const greetings = require('../src/handlers/greetings')
    const hello = greetings.createHelloResponse
    const context = {}

    it('should exit immidiately if source is serverless-warmup', (done) => {
      const event = {
        source: 'serverless-plugin-warmup'
      }

      const callback = (ctx, data) => {
        expect(data).toBe('Lambda is warm!')
        done()
      }

      hello(event, context, callback)
    })

    it('build valid Lambda HTTP Response', (done) => {
      const event = {}

      hello(event, context, (ctx, data) => {
        expect(data.statusCode).toBe(200)
        expect(typeof data.body).toBe('string')
        expect(typeof JSON.parse(data.body)).toBe('object')
        done()
      })
    })
  })
})
