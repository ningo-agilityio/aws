# Serverless Web Applications with React & AWS Amplify
## **Overview**:
![Alt text](src/assets/images/amplify-rest.png?raw=true "Diagram")

## **Prerequisites**:
(Refer [guide](https://docs.amplify.aws/start/getting-started/installation/q/integration/react))

1. **Dependencies**
- Node.js v10.x or later
- npm v5.x or late
- amplify-cli: 

```
npm install -g @aws-amplify/cli
```

2. **Amplify configuration**
- Create IAM user and grand AdministratorAccess
- Use access key/secret key to configure locally

```
amplify configure
```

## Build BE locally

Run
```
amplify push
```

## Run app locally
In the project directory, you can run:

```
yarn install
```

then:

```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Build and deploy entire app
To build all local backend and frontend resources and provision it in the cloud, we run:

```
amplify hosting add
```

then:

```
amplify publish
```