/*'use strict';
const AWS = require('aws-sdk');

module.exports.getForum = async (event) => {

    //http GET 'https://your-api-endpoint-url/getUser?key=user_id_value'
    //http GET 'https://your-api-endpoint-url/getUser?key=John'
    const queryParams = {
        TableName: process.env.DYNAMODB_USER_TABLE,
        KeyConditionExpression: 'primary_key = :key', 
        ExpressionAttributeValues: {
            ':key': event.queryStringParameters.key 
        }
    };

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    try {
        const result = await dynamodb.query(queryParams).promise();
        if (result.Count === 0) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'Forum not found' })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                user: {
                    name: result.Items[0].primary_key,
                    email: result.Items[0].email,
                    supervisorEmail: result.Items[0].supervisorEmail
                }
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
};*/