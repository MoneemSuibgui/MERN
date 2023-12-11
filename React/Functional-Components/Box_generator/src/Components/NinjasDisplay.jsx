import React from 'react'

const NinjasDisplay = (props) => {
    const {ninjaArray}=props


    return (

        <div>
            {
                ninjaArray.map((boxInfo,index)=>(
                    <div key={index} 
                    style={{
                        display: "inline-block",
                        backgroundColor:boxInfo.boxColor,
                        border:"2px balck solid",
                        width: boxInfo.sizeBox+"px",
                        height: boxInfo.sizeBox+"px",
                        margin: "5px",
                        padding:"2px"
                    }}>
                    </div>
                ))

            }
        </div>
    )
    }

export default NinjasDisplay