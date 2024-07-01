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
