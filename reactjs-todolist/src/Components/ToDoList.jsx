import React from 'react';
import ToDoCards from './ToDoCards';

function ToDoList(props) {
   const {todos} = props
       
  return (
    <ul className='main'>
      {todos.map((todo , todosIndex) => {
    return(
        <ToDoCards {...props} key={todosIndex} index = {todosIndex}>
<p>{todo}</p>
        </ToDoCards>
    )
})}
    </ul>
  );
}

export default ToDoList;



