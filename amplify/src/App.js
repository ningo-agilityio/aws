import Amplify from "aws-amplify"
import { withAuthenticator } from '@aws-amplify/ui-react'
import Home from './page/Home'
import awsExports from "./aws-exports"
Amplify.configure(awsExports)

const App = () => <Home />

export default withAuthenticator(App)