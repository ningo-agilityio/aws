// HOC to support auth for app with Cognito user
import { withAuthenticator } from 'aws-amplify-react'
import '@aws-amplify/ui/dist/style.css'

import Home from './page/Home'
import './App.css';

// Configure amplify with generated values
import Amplify from 'aws-amplify'
import awsExports from "./aws-exports"
import { MyTheme, SignupFormConfig } from './config/authenticator-config'
Amplify.configure(awsExports)

const App = () => <Home />

export default withAuthenticator(App, 
  true, // Include user name and signout button
  [], 
  null, // Not include federate Google, Facebook
  MyTheme, 
  // Signup configuration
  {
    ...SignupFormConfig
  }
)
