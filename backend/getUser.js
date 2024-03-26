const AWS = require('aws-sdk');

module.exports.getUser = async (event) => {
    const id = event.pathParameters.id; // Get the value of the 'id' parameter from the path

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: process.env.DYNAMODB_USER_TABLE,
        Key: {
            primary_key: id 
        }
    };

    try {
        const data = await dynamodb.get(params).promise();
        if (!data.Item) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'User not found' })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify(data.Item)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
};