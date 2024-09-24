import React from 'react'

function ToDoCards(props) {
    const {children , handleDeleteTodo , index , handleEditTodo} = props;
  return (
    <li className='todoItem' >
        {children}
        <div className='actionContainer'>

<button onClick={ () => { 
    handleEditTodo(index)
}}>
        <i className="fa-regular fa-pen-to-square  "></i>
        </button>


        <button onClick={() => {
            handleDeleteTodo(index)
        }}>
        <i  className="fa-solid fa-trash"></i>
        </button>
        </div>
        
       </li>
  )
}

export default ToDoCards

