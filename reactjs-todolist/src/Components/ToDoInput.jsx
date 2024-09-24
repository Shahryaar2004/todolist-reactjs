import React, { useState } from 'react'

function ToDoInput(props) {
    const {handleAddTodo ,todoValue , setTodoValue} = props;
   
    
  return (
    <header>
      <input value={todoValue} onChange={(e)=> {
        setTodoValue(e.target.value)

      }} type="text " placeholder='Enter your text here ....' />
      {/* <button onClick={() => {
        handleAddTodo={todoValue}
      }}
      >Add</button> */}
      <button
        onClick={() => {
          handleAddTodo(todoValue); // Call the function to add the todo
          setTodoValue(''); // Clear the input field
        }}
      >
        Add
      </button>
    </header>
  )
}

export default ToDoInput
