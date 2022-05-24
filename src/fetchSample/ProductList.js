import React, { useState, useEffect } from 'react'

function ProductList() {


    const [products, setProducts] = useState([])

    //bir fonksiyon then ile devam ediyorsa asenkron metoddur

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log('DATA:', data)
        })
    }, [])


  return (
    <div>ProductList</div>
  )
}

export default ProductList