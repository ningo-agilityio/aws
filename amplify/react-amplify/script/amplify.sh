# Make sure you installed amplify cli npm install -g @aws-amplify/cli

# Configure user with AdministratorAccess
amplify configure

# To update api
amplify update api

# To build local BE. It will publish a valid endpoint
amplify push

# To add/update auth for api
amplify add/update auth
## Can create cognito user to test: test01@mail.com - Test@123

# To add hosting, pick plugin module is Amplify console or S3/CloudFront
amplify add hosting 

# To build and publish whole app
amplify publish
