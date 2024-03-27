'use strict'
const AWS = require("aws-sdk")

module.exports.getAllForums = async (event) => {
    const scanParams ={
        TableName: process.env.DYNAMODB_FORUM_TABLE
    }
    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const result = await dynamodb.scan(scanParams).promise()
    if (result.Count ===0){
        return{
            statusCode: 404
        }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        total: result.Count,
        items: await result.Items.map(body => {
            return{
                primary_key: body.primary_key,
                employee_name: body.employee_name,
                certificationName: body.certification_name,
                ROC_request: body.ROC_request, //true/false
                personal_development: body.personal_development, //true/false
                reason: body.reason, 
                estimated_completion_date: body.estimated_completion_date,
                expiration: body.expiration,
                cost: body.cost,
                prior_certification_name: body.prior_certification_name,
                prior_certification_date: body.prior_certification_date,
                employee_sign_off_date: body.employee_sign_off_date,
                lead_sign_off_date: body.lead_sign_off_date,
                executive_sign_off_date: body.executive_sign_off_date
            }
        })
      })
    };
  };
  