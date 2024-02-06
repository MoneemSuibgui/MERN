import React, { useState } from 'react'
import ProductForm from "../components/ProductForm"
import DisplayALllProducts  from "../components/DisplayAllProducts"

const Main = () => {
    // lifting state and passing into props to manipulate into other components
    const [products,setProducts]=useState([])
    // remove function 
    const removeOneProduct= prodId =>   {
        setProducts(products.filter((oneProduct)=> oneProduct._id !== prodId))
    }
    return (
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <hr/>
            <DisplayALllProducts products={products} setProducts={setProducts} removeOneProduct={removeOneProduct} />
        </div>
    )
    }

export default Main