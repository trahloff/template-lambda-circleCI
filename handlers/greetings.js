'use strict'

const greetings = require('../lib/greetingsUtil')

module.exports.hello = (event, context, callback) => {
  /** exit function immediately if invoked by serverless-warmup */
  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUP - Lambda is warm!')
    return callback(null, 'Lambda is warm!')
  }

  // create a response
  const response = {
    statusCode: 200,
    body: JSON.stringify(greetings.hello())
  }
  callback(null, response)
}
