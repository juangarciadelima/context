import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/todoList'
import TodoProvider from './contexts/TodoContext'

 const App = () => {
return <>
<TodoProvider>
  <TodoList />
  <br />
  <hr />
  <br />
  <AddTodo />
</TodoProvider>
</>
}

export default App