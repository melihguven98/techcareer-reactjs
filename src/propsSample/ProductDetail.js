import React from 'react'


//child compoonent dışarıdan aldığı propları içerisinde kullanabilir. bir üst komponentinden veri alıyor.
function ProductDetail(props) {

  return (<>
  
        <div>
            <h1>Product Detail PAge</h1>
            </div>
        <div>
            <p>Name: {props.name}</p>
            <p>Description: {props.desc}</p>
            <p>Price: {props.price}</p>
        </div>
  </>
  )
}

export default ProductDetail