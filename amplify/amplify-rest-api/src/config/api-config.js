import axios from 'axios'
import awsconfig from '../aws-exports';
import { Auth } from 'aws-amplify'

export const apiConfig = async () => {
  axios.defaults.baseURL = awsconfig.aws_cloud_logic_custom[0]["endpoint"];
  axios.defaults.headers.common['Authorization'] = `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  // axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
  // axios.defaults.headers.common['Credential'] = 'true';
}
