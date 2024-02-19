'use strict'
const AWS = require("aws-sdk")

module.exports.createUser = async (event) => {
    const body = JSON.parse(Buffer.from(event.body, 'base64').toString())
    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const putParams = {
        TableName: process.env.DYNAMODB_USER_TABLE,
        Item: {
            primary_key: body.name,
            email: body.email,
            supervisorEmail: body.supervisorEmail
        }
    }
    await dynamodb.put(putParams).promise()
    return {
      statusCode: 201
    };
  };
  