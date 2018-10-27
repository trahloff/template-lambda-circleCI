/** WORK IN PROGRESS */
/* eslint-env jest, mocha */

describe('greetings', () => {
  const greetings = require('../functions/greetings')
  describe('hello', () => {
    const hello = greetings.hello
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

    it('should should return the ancient greeting "wahouli"', (done) => {
      const responseBody = {
        greeting: 'wahouli'
      }

      const event = {}

      const callback = (ctx, data) => {
        expect(data.statusCode).toBe(200)
        expect(data.body).toBe(JSON.stringify(responseBody))
        done()
      }

      hello(event, context, callback)
    })
  })
})
