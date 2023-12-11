import React, { useState } from 'react'

const NinjasForm = (props) => {

    const {ninjaArray,setNinjaArray}=props

    const[boxColor,setBoxColor]=useState("")
    const[sizeBox,SetSizeBox]=useState()


    const CreateBox=(e)=>{
        e.preventDefault();
        const boxInfo={boxColor,sizeBox}

        if(boxColor.length>2){
            setNinjaArray([...ninjaArray,boxInfo])
            setBoxColor("");
            SetSizeBox();
        }
        else{
            setBoxColor("");
            SetSizeBox();
        }

    }

    return (
        <div className='NinjaForm'>
            <form onSubmit={CreateBox}>
                <div className='boxInfo'>
                    <label htmlFor="color">Color :</label>
                    <input type="text" name="color" onChange={(e)=>setBoxColor(e.target.value)} value={boxColor} />
                    {boxColor&& boxColor.length<2  ?<p style={{color:"red"}}>* Please enter the right color</p> :null}
                </div>
                <div className='boxInfo'>
                    <label htmlFor="size" >Width and Height in Pixels :</label>
                    <input type="number" name='size' onChange={(e)=>SetSizeBox(e.target.value)} value={sizeBox} />
                    {sizeBox&& sizeBox.length<2  ?<p style={{color:"red"}}>* Please enter size more the 9 Pixels </p> :null}
                </div>
                <input type="submit" value="Add" className='btnBoxes' />

            </form>
        </div>
    )
    }

export default NinjasForm