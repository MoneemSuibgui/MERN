import { React,useState } from 'react';
const ProductForm = (props) => {
    const {initTitle,initPrice,initDescription,onSubmitProp}=props
    //keep track of what is being typed via useState hook
    const [title,setTitle] = useState(initTitle)
    const [price,setPrice] = useState(initPrice)
    const [description,setDescription] = useState(initDescription)    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const product={title,price,description}
        setTitle("")
        setPrice(0)
        setDescription("")
        onSubmitProp(product);
    }


    return (
        <div className="col col-6 w-50 mt-5 mx-5">
            <h1 className='m-5'>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='titleProduct'>
                    <label  htmlFor="title" >Title : </label>
                    <input  className='productInput' type="text" name="title" onChange={(e)=>setTitle(e.target.value)}  value={title}/>
                </div>
                <br/>
                <div className='priceProduct'>
                    <label htmlFor="price">Price : </label>
                    <input  className='productInput' type="number" name="price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </div>
                <br/>
                <div className='descriptionProsduct'>
                    <label htmlFor="description">Description : </label>
                    <input  className='productInput' type="text" name="description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <br/>
                <input type="submit" value="Create"  className='btn'/>
            </form>
        </div>
    )
}

export default ProductForm