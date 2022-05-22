import React, { useState } from 'react'

function AddCategory() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const addNewCategory = () => {

        let newCategory = {
            name: name,
            description: description
        }

        let requestOptions = {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //JS Objesini JSON'a çeviriyor -> stringify / JSON.parse -> tam tersi.
            //body: JSON.stringify({a: 1, b: 'Textual content'})
            body: JSON.stringify(newCategory)
        }

        fetch('https://northwind.vercel.app/api/categories', requestOptions)
        .then(res => res.json())
        .then((data) =>{
            console.log('new cat', data)
        })


    }

  return (
    <>
    <div>
        <label>Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
    <label>Description:</label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
    </div>
    <div>
        <button onClick={()=> addNewCategory()}>Add</button>
    </div>
        
    
    </>
  )
}

export default AddCategory