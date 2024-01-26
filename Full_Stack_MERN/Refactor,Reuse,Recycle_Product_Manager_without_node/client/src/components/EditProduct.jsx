import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm'
import DeleteButton from './DeleteButton';

const EditProduct = (props) => {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const {products,setProducts}=props

    const {id}=useParams();
    const navigate = useNavigate();



// get all product info every time we rendering the component
    useEffect(()=>{
        axios.get(`http://localhost:8001/${id}`)
            .then((res)=>{
                console.log(res.data);
                // set our state to displayed in our inputs fields
                setProduct(res.data)
                setLoaded(true)
        })
            .catch((err)=>{
                console.log(err);
            });
        }, [id]);

// update function 
    const updateHandler =({title,price,description})=>{
        axios.put(`http://localhost:8001/edit/${id}`,{title,price,description})
        .then(resp=> {
            console.log(resp.data)
            setProducts([...products,resp.data])
            navigate('/')
        }).catch((err)=> console.log(err))
    }



    return (
        <div className="col col-6 w-50 mt-5 mx-5">
            <h1 className='m-5'>Product Manager</h1>
            {loaded ? 
            <ProductForm  onSubmitProp={updateHandler} 
            initTitle={product.title}
            initPrice={product.price}
            initDescription={product.description}
            />:
            <p> Loading ...</p>
            }
            <DeleteButton  className="btn btn-danger btn-lg" productId={product._id} successCallback={() => navigate("/")} />
            
        </div>
    )
}

export default EditProduct