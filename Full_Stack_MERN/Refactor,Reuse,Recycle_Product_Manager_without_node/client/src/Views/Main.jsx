import { useEffect,useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import DisplayALllProducts from '../components/DisplayAllProducts'




const Main = (props) => {
    // lifting state and passing into props to manipulate into other components
    const [products,setProducts]=useState([])


        // get all products every time the display component rendering
        useEffect(()=>{
            axios.get('http://localhost:8001/')
            .then(response=>{
                // console.log(response.data)
                setProducts(response.data)
            })
            .catch((err)=>console.log(err))
        },[])


         //handler when the form is submitted
        const createProduct=(product)=>{
        // const product={title,price,description}
            axios.post('http://localhost:8001',product)
            .then(newProduct=> {
                console.log(newProduct.data)
                // every product created we stored into my state
                setProducts([...products,newProduct.data])
            })
            .catch(err =>console.log({err}))
        }
    
            // delete function
        const removeProduct=(productId)=>{
            axios.delete(`http://localhost:8001/${productId}`)
            // create a removeProduct to filter the product in the products list
            .then(response=> 
            setProducts(products.filter(oneProduct=>oneProduct._id !== productId))
            )
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initTitle ="" initPrice={0} initDescription ="" />
            <hr/>
            <DisplayALllProducts products={products} setProducts={setProducts} removeProduct={removeProduct} />
        </div>
    )
    }
export default Main