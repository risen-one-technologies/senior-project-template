# Setting Up a Serverless Angular Project

This guide will help you set up a serverless application with an Angular frontend and a serverless backend hosted on AWS using AWS Lambda and DynamoDB. It is designed for users with no coding knowledge, providing step-by-step instructions.

## Prerequisites

Before you start, ensure you have the following:

- **AWS Account**: Create an account on [AWS](https://aws.amazon.com/) if you don’t have one.
- **AWS CLI**: Install and configure the AWS Command Line Interface with your account details. Instructions can be found [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).
- **Node.js and npm**: Install Node.js and npm from [here](https://nodejs.org/).
- **Angular CLI**: Install the Angular Command Line Interface. Instructions are available [here](https://angular.io/cli).

## Backend Setup

### Step 1: Clone the Repository

Download the project repository to your local machine.

- Command: `git clone https://github.com/your-repo/my-serverless-app.git`
- Command: `cd my-serverless-app/backend`

### Step 2: Install Serverless Framework

Install the Serverless Framework, which will help you manage the serverless backend.

- Command: `npm install -g serverless`

### Step 3: Install Project Dependencies

Navigate to the backend directory of the project and install the necessary dependencies.

- Command: `npm install`

### Step 4: Configure Serverless Framework

1. Open the `serverless.yml` file in the backend directory.
2. Update the file with your AWS account details and configure the DynamoDB table if needed.
3. Ensure the table name in `serverless.yml` matches the table name used in your Lambda functions.

### Step 5: Deploy the Backend

Deploy the serverless application to AWS. This will set up the necessary AWS Lambda functions and DynamoDB tables.

- Command: `serverless deploy`

After deployment, note the API endpoints provided by the Serverless Framework.

### Step 6: Set Up Login Functionality

Follow these steps to configure the login functionality:

1. **Create the DynamoDB Table**:
   - The table is created with the name `users` and it has `username` as the primary key. This is defined in the `resources` section of the `serverless.yml` file.

2. **Add Users to the Table**:
   - Sample users are added to the DynamoDB table with predefined usernames and passwords. This ensures that you have users to test the login functionality.

3. **Lambda Function for Login**:
   - The Lambda function defined in `src/handlers/login.js` handles the login requests. It checks if the provided username and password match an existing user in the DynamoDB table.

### Lambda Function Code Explanation:

The Lambda function is responsible for handling login requests. Here's a breakdown of the code in [login.js](./src/handlers/login.js):
- The function uses the AWS SDK to interact with DynamoDB.
- It reads the username and password from the request body.
- It retrieves the user from the DynamoDB table using the username.
- It checks if the user exists and if the password matches.
- It returns a success message if the login is successful or an error message if the login fails.
  
## Frontend Setup

### Step 1: Clone the Repository

Download the project repository to your local machine if not already done.

- Command: `git clone https://github.com/risen-one-technologies/senior-project-template.git`
- Command: `cd senior-project-template/frontend`

### Step 2: Install Angular Project Dependencies

Navigate to the frontend directory of the project and install the necessary dependencies.

- Command: `npm install`

### Step 3: Run the Development Server

Start the development server to preview the Angular application.

- Command: `ng serve`

### Step 4: Build the Project

Build the project to prepare it for deployment. The build artifacts will be stored in the `dist/frontend` directory.

- Command: `ng build --prod`

### Step 5: Deploy the Frontend

Ensure that the build output directory (`dist/frontend`) is correctly set up in the backend serverless configuration. Refer to the backend README for more details on deploying the frontend with the backend.

## Additional Resources

- [Serverless Framework Documentation](https://www.serverless.com/framework/docs)
- [AWS SDK for JavaScript Documentation](https://docs.aws.amazon.com/sdk-for-javascript/)
- [DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/)
- [Angular CLI Documentation](https://angular.io/cli)
- [Angular Documentation](https://angular.io/docs)

Following these steps will help you set up and deploy a serverless Angular application with a backend hosted on AWS. If you encounter any issues, refer to the additional resources provided for detailed documentation.







