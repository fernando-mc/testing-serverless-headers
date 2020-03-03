'use strict';

const buildResponse = (result) => {
  const response = {
    "isBase64Encoded": false,
    "statusCode": 200,
    "headers": {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
      body: JSON.stringify(result),
  };
  return response;
};

module.exports.get = async event => {
  console.log(event);
  return buildResponse({'some': 'stuff'});
};