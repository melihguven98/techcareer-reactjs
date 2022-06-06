import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ToDoList() {


  var todos = useSelector(todostate => todostate);

  console.log('Todo List: ', todos);

  var dispatch = useDispatch();


  const deleteToDo = (item) => {
    dispatch({ type: 'DELETE_TODO', payload: item })

  }



  return (
    <>
    <button onClick={() => dispatch({ type: 'REMOVE_ALL' })}>Remove All Todos</button>
        <ul>
            {
                todos && todos.map((item,key) => {

                  return <Fragment> <li key={key}>{item.name}</li>
                  <button onClick={() => deleteToDo(item)  }>Trash</button>
                  </Fragment>
                })
            }
        </ul>
    </>
  )
}

export default ToDoList