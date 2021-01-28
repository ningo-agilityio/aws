// HOC to support auth for app with Cognito user
import { withAuthenticator } from 'aws-amplify-react'
import '@aws-amplify/ui/dist/style.css'

import Home from './page/Home'
import './App.css';

// Configure amplify with generated values
import { MyTheme, SignupFormConfig } from './config/authenticator-config'
import Amplify from 'aws-amplify'
import awsExports from "./aws-exports"
Amplify.configure(awsExports)

const App = () => <Home />

export default withAuthenticator(App, 
  true, // Include user name and signout button
  [
    // <AuthGreeting override='Greetings'/>,
    // <ConfirmSignIn/>,
    // <VerifyContact/>,
    // <SignUp/>,
    // <ConfirmSignUp/>,
    // <ForgotPassword/>,
    // <RequireNewPassword />
  ], 
  null, // Not include federate Google, Facebook
  MyTheme, 
  // Signup configuration
  {
    ...SignupFormConfig
  }
)
