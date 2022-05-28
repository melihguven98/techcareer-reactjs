import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from '../store/cartContext';

function ProductList() {

    //Sepete ekleyince context değişmeli
    
    //setCart çektik
    const { cart, setCart } = useContext(cartContext);
    
    const [products, setProducts] = useState([]);


    let navigate = useNavigate();

    useEffect(() => {
      
        axios.get('https://northwind.vercel.app/api/products')
        .then((res) => {
            setProducts(res.data)
        })
    }, [])
    

    const goToDetail = (id) => {

        navigate(`/urunler/${id}`);
    }

    const addToCart = (item) => {

        //ürün sepette varsa adedini arttırır yoksa ürünü sepete ekler

        let cartProduct = cart.find(q => q.id === item.id);

        //yoksa -> if(!cartProduct)
        if(cartProduct){

            cartProduct.quantity = cartProduct.quantity + 1;
            setCart([...cart]);
        }else{

            let newCartProduct = {
                id: item.id,
                name: item.name,
                price: item.unitPrice,
                quantity: 1
            }

            setCart([...cart, newCartProduct])
        }
    }

    const decreaseToCart = (item) => {
        
        //Sepette ürün yoksa bu fonksiyon çalışmamalı

        let cartProduct = cart.find(q => q.id === item.id);

        if(cartProduct){
            cartProduct.quantity = cartProduct.quantity - 1;
            
            //Eğer ürün adedi 0 olduysa onu sepetten de çıkarmamız gerekli
            if(cartProduct.quantity == 0){
                let newCart = cart.filter(q => q.id != cartProduct.id);
                //? setCart([...newCart]) spread operatörüne gerek yok
                setCart(newCart)
            }else{
                setCart([...cart])
            }
        }
    }

  return (
    <><h3>Product List</h3>
    
    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Unit Price</td>
                <td>Detail</td>
            </tr>
        </thead>
        <tbody>
        {
            products && products.map((item,key) => {
                return <tr key={key}>
                    <td>{item.id}</td>
                    <td><Link to={'/urunler/' + item.id}>{item.name}</Link></td>
                    <td>{item.unitPrice}</td>
                    <td><button onClick={()=> goToDetail(item.id)}>Go To Detail</button></td>
                    <td><button onClick={()=> addToCart(item)}> + </button></td>
                    <td><button onClick={()=> decreaseToCart(item)}> - </button></td>
                </tr>
            })
        }
        </tbody>
    </table>
    
  </>)
}

export default ProductList