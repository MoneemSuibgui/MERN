import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DisplayOneProduct = (props) => {
    
    // distructure the product id from the link in DisplayAll component
    const {id}=useParams();
    // create state to get and display the specific product 
    const [oneProduct,setOneProduct]=useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/${id}`)
            .then((res)=>{
                console.log(res.data);
                setOneProduct(res.data);
        })
            .catch((err)=>{
                console.log(err);
            });
        }, []);


    return (
        <div className='border border-black w-50 h-100 m-5  bg-info rounded-5 mx-auto p-4 '>
            {/* display all info for one product */}
            <h1>{oneProduct.title}</h1>
            <h3 className='mt-4'>Price : $ {oneProduct.price}</h3>
            <h3 className='mt-4'>Description : {oneProduct.description}</h3>
        </div>
    )
    }

export default DisplayOneProduct