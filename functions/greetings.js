'use strict'

module.exports.hello = (event, context, callback) => {
  /** exit function immediately if invoked by serverless-warmup */
  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUP - Lambda is warm!')
    return callback(null, 'Lambda is warm!')
  }

  const responseBody = {
    greeting: 'wahouli'
  }

  // create a response
  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  }
  callback(null, response)
}
