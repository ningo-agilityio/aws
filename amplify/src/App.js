import Amplify from "aws-amplify"
import Home from './page/Home'
import awsExports from "./aws-exports"
Amplify.configure(awsExports)

const App = () => <Home />

export default App