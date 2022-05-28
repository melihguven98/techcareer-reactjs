import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

function ProductDetail() {

 
    let { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {

      axios.get(`https://northwind.vercel.app/api/products/${id}`)
          .then(res => {
              setProduct(res.data);
          })
          .catch(err => console.log('Error', err))

          // eslint-disable-next-line
  }, [])
    
  return (
    <>
    <h3>Product Detail</h3>
    <p>ID: {product.id}</p>
    <p>Name: {product.name}</p>
    <p>Unit Price: {product.unitPrice}</p>
    <p>Units In Stock: {product.unitsInStock}</p>
   
    </>
  )
}

export default ProductDetail