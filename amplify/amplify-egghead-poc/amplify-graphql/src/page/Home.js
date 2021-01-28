import React, { useState, useEffect } from 'react'
import { styles } from './styles'
import { API, graphqlOperation } from 'aws-amplify'
import { createBook } from '../graphql/mutations'
import { listBooks } from '../graphql/queries'

const initialState = { name: '', description: '' }

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

  const fetchData = async () => {
    try {
      const response = await API.graphql(graphqlOperation(listBooks))
      setData(response.data.listBooks.items)
    } catch(err) {
      setError("Something wrong during fetching data")
    } finally {
      setProcessing(false)
    }
  }

  const addBook = async () => {
    try {
      if (!formState.name || !formState.description) {
        return
      }
      const book = { ...formState }
      setData([...data, book])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createBook, {input: book}))
    } catch (err) {
      setError("Something wrong during creating new book")
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Books Managements App</h2>
      {error && <label>{error}</label>}
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addBook}>Add new book</button>
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
