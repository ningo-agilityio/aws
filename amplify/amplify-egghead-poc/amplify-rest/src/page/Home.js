import React, { useState, useEffect } from 'react'
import { styles } from './styles'
import { Auth, Storage } from 'aws-amplify'
import axios from 'axios'
import { apiConfig } from '../config/api-config'

const initialState = { 
  name: '', 
  avatar: {
    fileUrl: '',
    file: '',
    filename: ''
  }
}

const Home = () => {
  const [formState, setFormState] = useState(initialState)
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [processing, setProcessing] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const setInput = (key, value) => {
    setFormState({ ...formState, [key]: value })
  }

  const onSelectAvatar = (e) => {
    const file = e.target.files[0]
    setFormState({ ...formState, avatar: {
      fileUrl: URL.createObjectURL(file),
      file,
      filename: file.name
    }})
  }

  const fetchData = async () => {
    try {
      Auth.currentAuthenticatedUser()
      .then(async () => {
        await apiConfig()
        axios.get("/employee")
          .then((response) => {
            setProcessing(false)
            setData(response.data.Items)
          })
      })
    } catch(err) {
      setError("Something wrong during fetching data")
    } finally {
      setProcessing(false)
    }
  }

  const addEmployee = async () => {
    try {
      if (!formState.name || !formState.avatar.fileUrl) {
        return
      }

      await Storage.put(formState.avatar.filename, formState.avatar.file) 
      
      const employee = { ...formState }
      // Call api to add employee into db
      axios.post("/employee", {
        id: `u-${Math.random(100).toString()}`,
        name: formState.name
      }, {
        headers: {
          Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
        }
      })
        .then(() => {
          setProcessing(false)
          setData([...data, employee])
          setFormState(initialState)
        })   
    } catch (err) {
      setError("Something wrong during creating new employee")
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Employees Managements App</h2>
      {error && <label>{error}</label>}
      <img src={formState.avatar.fileUrl} alt="avatar" style={{
        width: '100px',
        height: '100px',
        objectFit: 'cover'
      }} />
      <input type='file' onChange={onSelectAvatar} />
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <button style={styles.button} onClick={addEmployee}>Add new employee</button>
      {
        processing && <p>Loading...</p>
      }
      {
        data.map((item, index) => (
          <div key={item.id ? item.id : index} style={styles.book}>
            <p style={styles.bookName}>{`${index + 1} - ${item.name}`}</p>
            <p style={styles.bookDescription}>{item.description}</p>
          </div>
        ))
      }
    </div>
  )
}



export default Home
