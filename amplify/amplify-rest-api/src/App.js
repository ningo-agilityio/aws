import { useEffect, useState } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify'
import './App.css';
import axios from 'axios'
import './config/aws-config'
import { apiConfig } from './config/api-config'

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Auth.currentAuthenticatedUser()
    .then(async () => {
      await apiConfig()
      axios.get("/books")
        .then((response) => {
          setLoading(false)
          setData(response.data.Items)
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }, [])

  return (
    <div 
      className="App" 
      style={{ 
        display: 'flex', 
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {
        loading ? <div>Loading...</div>
        :
        <ul style={{
          display: 'flex',
          flexDirection: 'column',
          listStyle: 'none'
        }}>
          {
            data.map((item) => <li key={item.id}>{`${item.id} - ${item.author}`}</li>)
          }
        </ul>
      }
    </div>
  );
}

export default withAuthenticator(App);
