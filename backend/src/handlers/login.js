const AWS = require('aws-sdk');

const cognito = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
  const { username, password } = JSON.parse(event.body);

  try {
    const params = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: 'YOUR_COGNITO_CLIENT_ID',
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
    };

    const result = await cognito.initiateAuth(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        accessToken: result.AuthenticationResult.AccessToken,
        idToken: result.AuthenticationResult.IdToken,
        refreshToken: result.AuthenticationResult.RefreshToken,
      }),
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message || 'Internal Server Error' }),
    };
  }
};