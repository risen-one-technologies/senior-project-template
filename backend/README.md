# Backend - Serverless Application

This is the backend part of a serverless application, hosted on AWS using AWS Lambda and DynamoDB.

## Prerequisites

- AWS CLI configured with your AWS account
- Node.js and npm installed
- Serverless Framework installed globally

## Installation

1. Clone the repository: (If not already completed with frontend Readme.md)

   ```bash
   git clone https://github.com/your-repo/my-serverless-app.git
   cd my-serverless-app/backend

2. Install the Serverless Framework globally:

   ```bash
   npm install -g serverless

3. Install the project dependencies:

   ```bash
   npm install

## Configuration

1. Update the serverless.yml file with your AWS account details and DynamoDB table configuration if needed.
2. Ensure the TableName in serverless.yml matches the table name used in your Lambda functions.

## Deployment

1. Deploy the serverless application to AWS:

   ```bash
   serverless deploy

2. After deployment, note the API endpoints provided by the Serverless Framework.

   ```bash
   serverless deploy

## Permissions

Ensure your IAM roles have the necessary permissions to interact with DynamoDB. You can define these in the serverless.yml file under iamRoleStatements.

## Local Development

For local development and testing, consider using tools like serverless-offline, dynamodb-local, lambda-local, AWS SAM

## Additional Resources

Serverless Framework -- https://www.serverless.com/framework/docs
AWS SDK for JavaScript -- https://docs.aws.amazon.com/sdk-for-javascript/
DynamoDB Documentation -- https://docs.aws.amazon.com/dynamodb/
