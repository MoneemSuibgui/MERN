// import packages nedded for our App

import React , { useState } from 'react'
import { navigate } from '@reach/router'




const Form = (props) => {

//instantiate  states to manipulate data
    const [category,setCategory]=useState("")
    const [categoryId,setCategoryId]=useState()

// submit the form
    const hundlerSubmit =(e)=>{
        e.preventDefault();
        // when submit the form redirect to this path
        navigate(`/${category}/${categoryId}`);
}
    return (
        
        <div className='apiForm'>
            <form onSubmit={hundlerSubmit}>
                <label htmlFor="search_for">Search for : </label>
                <select name="search_for" className='myList' onChange={(e)=>setCategory(e.target.value)} >
                    <option>-----------------</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>

                <label htmlFor="api_id">ID : </label>
                <input className="apiId" type="number" name="api_id" onChange={(e)=>setCategoryId(e.target.value)}  />
                <input  className='btn' type="submit"  value="Search"/>
            </form>
        </div>
        
        
    )
}

export default Form