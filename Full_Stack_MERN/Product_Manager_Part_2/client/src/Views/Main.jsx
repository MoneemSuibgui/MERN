import React, { useState } from 'react'
import ProductForm from "../components/ProductForm"
import DisplayALllProducts  from "../components/DisplayAllProducts"

const Main = () => {
    // lifting state and passing into props to manipulate into other components
    const [products,setProducts]=useState([])
    return (
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <hr/>
            <DisplayALllProducts products={products} setProducts={setProducts}/>
        </div>
    )
    }

export default Main