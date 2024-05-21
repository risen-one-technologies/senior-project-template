# Frontend - Angular Application

This is the frontend part of a serverless application built with Angular. The application serves static files and interacts with a serverless backend hosted on AWS.

## Prerequisites

- Node.js and npm installed
- Angular CLI installed

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/risen-one-technologies/senior-project-template.git
   cd senior-project-template/frontend
   ```

2. Install the dependencies:
  ```bash
  npm install
  ```

## Development Server

3. Run the development server:
  ```bash
  ng serve
  ```

## Build

1. Build the project:
  ```bash
  ng build --prod
  ```

2. The build artifacts will be stored in the dist/frontend directory.

## Deployment

Ensure that the build output directory dist/frontend is correctly set up in the backend serverless configuration.

For more details, refer to the Backend README.

## Additional Resources

Angular CLI -- https://angular.io/cli
Angular Documentation -- https://angular.io/docs