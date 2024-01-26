import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'



const DisplayAllProducts = (props) => {
    // const [products,setProducts]=useState([])
    const {products,setProducts}=props


    useEffect(() => {
        axios.get('http://localhost:8001/')
            .then(res => setProducts(res.data));
    }, [])

    const removeOneFromProductList = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }


    return (
        <div>
            <h1>All Products : </h1>
{/* display all products list*/}

            {
                products.map((product,id)=>(
                    <div key={id} className='mt-2 d-flex justify-content-center'>
                        <Link to={`/${product._id}/`} className='border border-secondary p-3 w-50 bg-dark-subtle fs-2 mx-4'>{product.title}</Link>
                        <DeleteButton
                            productId={product._id}
                            successCallback={()=>removeOneFromProductList(product._id)}
                            />
                        <Link to={`/edit/${product._id}`} className='btn  btn-lg bg-primary mt-3 mx-4'>Edit</Link>
                    </div>
                    
                ))
            }
        </div>
    )
    }

export default DisplayAllProducts