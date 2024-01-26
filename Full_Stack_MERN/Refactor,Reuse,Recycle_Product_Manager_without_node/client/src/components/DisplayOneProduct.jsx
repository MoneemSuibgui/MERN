import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import moment from'moment/moment'

const DisplayOneProduct = (props) => {
    
    // distructure the product id from the link in DisplayAll component
    const {id}=useParams();
    // create state to get and display the specific product 
    const [oneProduct,setOneProduct]=useState({})
    const navigate = useNavigate()
    // formatdate of the current day(for styling)
    const currentDate=moment().format('LLLL');



    useEffect(()=>{
        axios.get(`http://localhost:8001/${id}`)
            .then((res)=>{
                console.log(res.data);
                setOneProduct(res.data);
        })
            .catch((err)=>{
                console.log(err);
            });
        }, []);

    const removeProduct=(prodID)=>{
        axios.delete(`http://localhost:8001/${prodID}`)
        .then(res=>{
            console.log("successfully deleted")
            navigate('/')
        }).catch(err=>console.log(err))
    }


    return (
        <div className='border border-black w-50 h-100 m-5  bg-info rounded-5 mx-auto p-4 '>
            {/* display all info for one product */}
            <h2 className='alert alert-heading bg-body-secondary'>Today Is :  {currentDate} </h2>
            <h1>{oneProduct.title}</h1>
            <h3 className='mt-5'>Price : $ {oneProduct.price}</h3>
            <h3 className='mt-5'>Description : {oneProduct.description}</h3>
            
            <h3 className='mt-5 mb-5'> Created on : <span className='alert alert-danger'>{ oneProduct.createdAt} </span> </h3>
            <button className='btn bg-danger mt-4 w-50 m-5 ' onClick={()=> removeProduct(oneProduct._id)} >Delete Product</button>
        </div>
    )
    }

export default DisplayOneProduct