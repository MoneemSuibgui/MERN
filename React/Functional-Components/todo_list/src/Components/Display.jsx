import React from 'react'

const Display = (props) => {
    const {beltList,setBeltlist}=props

    // delete function
    const deleteBelt=(e,index)=>{
        const updatedBeltList = beltList.filter((_item,idx)=>{
            // the updatedBeltList filter to get all belts exept the belt with index i (to deleted)
            return  index !== idx
    })
    // set the main list(belt list to the new list updatedBeltList ) to updated
    return setBeltlist(updatedBeltList);
    }

    
    // keep track of my object in state (change the value of didntGetBelt to true when checked and the reverse)
    const hundlerGettingBelt=(index)=>{
        const myNewList=beltList.map((beltObj,idx)=>{
            if(idx === index){
                // update my beltObj object checked
                beltObj={...beltObj,didntGetBelt : !beltObj.didntGetBelt}
                // console.log(belt)
            }
            return beltObj
        })
        // update my beltList
        setBeltlist(myNewList)
    }

    return (
        <div>
            
            {/* diplay our belts */}
            {
                beltList.map((beltExam,index)=>{
                    //create a variable to do the conditional rendering to style  belts 
                    let classeStyling={fontSize:"24px",  fontWeight: "700",colorBelt:"green"
                }
                // conditional styling of the input belt
                    if(beltExam.didntGetBelt){
                        
                        classeStyling={
                            textDecoration:"line-through",
                            colorBelt:"red",
                            fontSize:"26px"
                        }
                    }else{
                        classeStyling.textDecoration="none"
                    }



                    return(
                    
                    <p key={index} className='beltInfo'>
                        {/* styling our belts  */}
                        <span style={{
                            textDecoration:classeStyling.textDecoration,
                            fontWeight:classeStyling.fontWeight
                            ,color:classeStyling.colorBelt,
                            fontSize:classeStyling.fontSize}} >{beltExam.belt}</span>
                        
                        <input type="checkbox" name="didntGetBelt" 
                        checked={beltExam.didntGetBelt}
                        onChange={(e)=>{hundlerGettingBelt(index)}}
                        
                        />
                        {/* deleteBelt :delete the belt with the specific index  by the oncliCk listenner*/}
                        <button onClick={(e)=> deleteBelt(e,index)} className='deleteBelt'>Delete</button>
                    </p>
                    )
                })
            }
        </div>
    )
}

export default Display
