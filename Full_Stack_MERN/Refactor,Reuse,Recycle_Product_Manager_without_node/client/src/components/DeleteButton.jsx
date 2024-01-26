import React from 'react'
import axios from 'axios';

// Delete button component
const DeleteButton = (props) => {

    const { productId, successCallback } = props;

    const deleteProduct = (e) => {
        axios.delete('http://localhost:8001/' + productId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteProduct} className='deleteBtn'>
            Delete
        </button>
    )
}
export default DeleteButton 