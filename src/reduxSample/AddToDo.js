import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function AddToDo() {


  const [name, setName] = useState('');

  const dispatch = useDispatch();


  const add = () => {

    var randomId = Math.floor(Math.random() * 100000);

    var newTodo = {
      id: randomId,
      name: name
    }

    dispatch({ type:'ADD_TODO', payload: newTodo  });

    //direkt action da çağırabiliriz(manuel)
    //dispatch(addToDo({ name: newTodo }));


    setName('');

      
  }

  return (
    <>
        <div>
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <button onClick={() => add()}>Add</button>
        </div>
     </>
  )
}

export default AddToDo