import axios from 'axios'
import { React,useState } from 'react';
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title,setTitle] =useState("")
    const [price,setPrice] =useState(0)
    const [description,setDescription]=useState("")

 //handler when the form is submitted
    const hndlerSubmit=(e)=>{
         //prevent default behavior of the submit
        e.preventDefault();
        const product={title,price,description}
        axios.post('http://localhost:8001',product)
        .then(newProduct=> {
            console.log(newProduct)
            console.log(newProduct.data)
        })
        .catch(err =>console.log({error:err}))
        
    }
    return (
        <div>
            <form onSubmit={hndlerSubmit} >
                <div className='titleProduct'>
                    <label  htmlFor="title">Title : </label>
                    <input  className='productInput' type="text" name="title" onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <br />
                <div className='priceProduct'>
                    <label htmlFor="price">Price : </label>
                    <input  className='productInput' type="number" name="price" onChange={(e)=>setPrice(e.target.value)} />
                </div>
                <br />
                <div className='descriptionProsduct'>
                    <label htmlFor="description">Description : </label>
                    <input  className='productInput' type="text" name="description" onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <br />
                <input type="submit" value="Create"  className='btn'/>
            </form>
        </div>
    )
    }

export default ProductForm