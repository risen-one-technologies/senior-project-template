'use strict'
const AWS = require("aws-sdk")

module.exports.createForum = async (event) => {
    const body = JSON.parse(Buffer.from(event.body, 'base64').toString())
    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const putParams = {
        TableName: process.env.DYNAMODB_FORUM_TABLE,
        Item: {
            primary_key: body.primary_key,
            employee_name: body.employee_name,
            certification_name: body.certification_name,
            ROC_request: body.ROC_request, //true/false
            personal_development: body.personal_development, //true/false
            reason: body.reason, 
            estimated_completion_time: body.estimated_completion_time,
            estimated_completion_date: body.estimated_completion_date,
            expiration: body.expiration,
            cost: body.cost,
            prior_certification_name: body.prior_certification_name,
            prior_certification_date: body.prior_certification_date,
            employee_sign_off_date: body.employee_sign_off_date,
            lead_sign_off_date: body.lead_sign_off_date,
            executive_sign_off_date: body.executive_sign_off_date
        }
    }
    await dynamodb.put(putParams).promise()
    return {
        statusCode: 201
    };
};
