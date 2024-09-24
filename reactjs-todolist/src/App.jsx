import React, { useState } from 'react'
import ToDoList from './Components/ToDoList'
import ToDoInput from './Components/ToDoInput'

function App() {
  
  const [todos , setTodos ] = useState([])
  const [todoValue , setTodoValue] = useState('')

    function handleAddTodo(newTodo) {
      const newTodoList= [...todos , newTodo]
      return(newTodoList)
    }
    function handleAddTodo(newTodo) {
      setTodos([...todos, newTodo]);
      
    }

    function handleDeleteTodo(index){
      const newTodoList = todos.filter((todo , todoIndex) => {
        return todoIndex !== index
      })
      setTodos(newTodoList)
 
    }

    function handleEditTodo (index)  {
      const valueToBeEditied = todos[index]
      setTodoValue(valueToBeEditied)
      handleDeleteTodo(index)
    }
  return (
    <>
      <ToDoInput todoValue={todoValue} setTodoValue = {setTodoValue} handleAddTodo = {handleAddTodo} handleEditTodo={handleEditTodo}/>
      <ToDoList handleDeleteTodo={handleDeleteTodo} todos = {todos} handleEditTodo={handleEditTodo}/>
      </>
  )
}

export default App



