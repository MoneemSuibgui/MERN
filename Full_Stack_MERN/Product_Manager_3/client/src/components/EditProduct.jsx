import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditProduct = (props) => {
    // const {products,setProducts}=props
    //keep track of what is being typed via useState hook
    const [title,setTitle] =useState("")
    const [price,setPrice] =useState()
    const [description,setDescription]=useState("")
    const navigate=useNavigate();
    
// get the specific product
const {id}=useParams();
// create state to get and display the specific product 
// const [oneProduct,setOneProduct]=useState({})


// get all product info evry time we rendering the component
    useEffect(()=>{
        axios.get(`http://localhost:8000/${id}`)
            .then((res)=>{
                console.log(res.data);
                // set our state to displayed in our inputs fields
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
        })
            .catch((err)=>{
                console.log(err);
            });
        }, []);

// update function 
    const updateHandler =(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/edit/${id}`,{title,price,description})
        .then(resp=> {
            console.log(resp.data)
            navigate('/')
        }).catch((err)=> console.log(err))
    }



    return (
        <div className="col col-6 w-50 mt-5 mx-5">
            <h1 className='m-5'>Product Manager</h1>
            <form onSubmit={updateHandler}>
                <div className='titleProduct'>
                    <label  htmlFor="title" >Title : </label>
                    <input  className='productInput' type="text" name="title" onChange={(e)=>setTitle(e.target.value)}  value={title}/>
                </div>
                <br />
                <div className='priceProduct'>
                    <label htmlFor="price">Price : </label>
                    <input  className='productInput' type="number" name="price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </div>
                <br />
                <div className='descriptionProsduct'>
                    <label htmlFor="description">Description : </label>
                    <input  className='productInput' type="text" name="description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <br />
                <input type="submit" className='btn btn bg-primary w-70' value="Update"/>
            </form>
        </div>
    )
}

export default EditProduct