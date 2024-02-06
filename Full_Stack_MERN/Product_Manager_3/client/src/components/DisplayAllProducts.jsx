import axios from 'axios'
import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'



const DisplayAllProducts = (props) => {
    // distructuring Products & setProducts
    const {products,setProducts}=props
     // distructuring remove function
    const{removeOneProduct}=props


    // get all products every time the display component rendering
    useEffect(()=>{
        axios.get('http://localhost:8000')
        .then(response=>{
            // console.log(response.data)
            setProducts(response.data)
        })
        .catch((err)=>console.log(err))
    },[])


    // delete function
    const deleteProduct=(productId)=>{
        axios.delete(`http://localhost:8000/${productId}`)

        // create a removeProduct to filter the product in the products list
        .then(response=> removeOneProduct(productId))
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>All Products : </h1>
{/* display all products list*/}

            {
                products.map((product)=>(
                    <div key={product._id} className='mt-2 d-flex justify-content-center'>
                        <Link to={`/${product._id}/`} className='border border-secondary p-3 w-50 bg-dark-subtle fs-2'>{product.title}</Link>
                        <button className='btn btn-lg bg-danger' onClick={()=>{deleteProduct(product._id)}}>Delete</button>
                        <Link to={`/edit/${product._id}`} className='btn  btn-lg bg-primary'>Edit</Link>
                    </div>
                    
                ))
            }
        </div>
    )
    }

export default DisplayAllProducts