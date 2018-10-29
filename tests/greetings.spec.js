/** WORK IN PROGRESS */
/* eslint-env jest, mocha */

describe('greetings', () => {
  const greetings = require('../src/lib/greetingsUtil')

  it('should should return the ancient greeting "wahouli"', (done) => {
    expect(greetings.hello()).toEqual({
      greeting: 'wahouli'
    })
    done()
  })
})
