import React from 'react'

const DisplayBoxes = (props) => {

    const{arrayBox}=props


    return (

        <div>
            
            

            {
                arrayBox.map((boxColor,index)=>(
                    <div key={index} 
                    
                    style={{
                        display: "inline-block",
                        backgroundColor:boxColor,
                        border:"2px black solid",
                        width:"40px",
                        height:"40px",
                        margin:"20px 10px",
                    }}>
                    </div>
                ))
                
            }
        </div>
    )
    }

export default DisplayBoxes