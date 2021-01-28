// eslint-disable-next-line
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const errorResponse = require('../../utils/error-response')

let tableName = "employee";
if(process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
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
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
    }
  })
};
