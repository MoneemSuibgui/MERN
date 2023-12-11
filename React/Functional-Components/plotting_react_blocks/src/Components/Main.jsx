import React from 'react'


const Main = (props) => {
    
    
    return (
        //  Pass Children blocks to the Main block to display them
        <div className='Main'>
            {props.children}
        </div>
    )
}

export default Main