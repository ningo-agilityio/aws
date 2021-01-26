# Make sure you installed amplify cli npm install -g @aws-amplify/cli

# Configure user with AdministratorAccess
amplify configure

# To update api
amplify update api

# To build local BE. It will publish a valid endpoint
amplify push

# To build and publish whole app
amplify publish