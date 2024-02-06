import axios from 'axios'
import { React,useState } from 'react';
const ProductForm = (props) => {
    const {setProducts,products}=props
    //keep track of what is being typed via useState hook
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState()
    const [description,setDescription] = useState("")

 //handler when the form is submitted
    const handlerSubmit=(e)=>{
         //prevent default behavior of the submit
        e.preventDefault();
        const product={title,price,description}
        axios.post('http://localhost:8000',product)
        .then(newProduct=> {
            // console.log(newProduct.data)
            // every product created we stored into my state
            setProducts([...products,newProduct.data])
            setTitle("")
            setPrice(0)
            setDescription("")
        
        })
        .catch(err =>console.log({err}))
        
    }
    
    return (
        <div className="col col-6 w-50 mt-5 mx-5">
            <h1 className='m-5'>Product Manager</h1>
            <form onSubmit={handlerSubmit} >
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
                <input type="submit" value="Create"  className='btn'/>
            </form>
        </div>
    )
    }

export default ProductForm