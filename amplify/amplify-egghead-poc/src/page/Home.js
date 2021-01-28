import React, { useState } from 'react'
import { styles } from './styles'
// import { API, graphqlOperation } from 'aws-amplify'
// import { createTodo } from '../graphql/mutations'
// import { listTodos } from '../graphql/queries'

const initialState = { name: '', description: '' }

const Home = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   fetchTodos()
  // }, [])

  const setInput = (key, value) => {
    setFormState({ ...formState, [key]: value })
  }

  // const fetchTodos = async () => {
  //   try {
  //     const todoData = await API.graphql(graphqlOperation(listTodos))
  //     const todos = todoData.data.listTodos.items
  //     setTodos(todos)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

  // const addTodo = async () => {
  //   try {
  //     if (!formState.name || !formState.description) {
  //       return
  //     }
  //     const todo = { ...formState }
  //     setTodos([...todos, todo])
  //     setFormState(initialState)
  //     await API.graphql(graphqlOperation(createTodo, {input: todo}))
  //   } catch (err) {
  //     console.log('error creating todo:', err)
  //   }
  // }

  return (
    <div>
      <h2>Amplify Todos App</h2>
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
      <button style={styles.button} onClick={() => {}}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{`${index + 1} - ${todo.name}`}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>
  )
}



export default Home
