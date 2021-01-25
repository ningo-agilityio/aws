export const createTodo = `
  mutation createTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      name
      description
    }
  }
`