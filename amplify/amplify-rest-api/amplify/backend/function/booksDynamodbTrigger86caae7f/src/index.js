// eslint-disable-next-line
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context, callback) {
  var params = {
    TableName: 'booksDynamodb-dev',
  };
  ddb.scan(params, function(err, data) {
    if (err) {
      errorResponse("Unable to read item. Error JSON:", context.awsRequestId, callback);
    } else {
      callback(null, {
        statusCode: 201,
        body: JSON.stringify(data),
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
      })
    }
  })
};

function errorResponse(errorMessage, awsRequestId, callback) {
  callback(null, {
    statusCode: 500,
    body: JSON.stringify({
      Error: errorMessage,
      Reference: awsRequestId,
    }),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}
