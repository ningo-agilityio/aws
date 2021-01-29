// eslint-disable-next-line
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
let tableName = "employee";
if(process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
}

function errorResponse(errMessage, requestId, callback) {
  callback(null, {
    statusCode: 500,
    body: JSON.stringify({
      Error: errMessage,
      Reference: requestId,
    }),
    headers,
  });
}

exports.handler = function(event, context) {
  var params = {
    TableName: tableName,
  };
  ddb.scan(params, function(err, data) {
    if (err) {
      errorResponse("Unable to read item. Error JSON:", context.awsRequestId, callback);
    } else {
      callback(null, {
        statusCode: 201,
        body: JSON.stringify(data),
        headers,
      })
    }
  })
};
