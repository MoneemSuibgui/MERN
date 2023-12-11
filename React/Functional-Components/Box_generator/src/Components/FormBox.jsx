import React from 'react'
import { useState } from 'react';

const FormBox = (props) => {
    const[color,setColor]=useState("")
    const {arrayBox,setArrayBox}=props
    

    const hundleSubmit=(e)=>{
        e.preventDefault();
        
        if(color.length>2 ) {
            setArrayBox([...arrayBox,color]);
            setColor("");
        }
        else{
            setColor("")
        }
    }
        

    

    return (

        <div className='NinjaForm'>
            <form onSubmit={hundleSubmit} >
                <div className='boxInfo'>
                    <label htmlFor="box">Color : </label>
                    {color&& color.length<3  ?<p style={{color:"red"}}>* Please enter a color</p> :null}
                    <input type="text" name='box' onChange={(e)=>setColor(e.target.value)} value={color} />
                </div>
                <input type="submit" value="Add" className='btnBoxes'/>
            </form>
        </div>
        )
    }

export default FormBox;