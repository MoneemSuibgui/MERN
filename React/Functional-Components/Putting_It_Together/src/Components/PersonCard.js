import React, {useState} from "react"
function PersonCard (props){
    const {firstName,lastName,hairColor,Age}=props
    const [getterValue,setterValue]=useState(Age)
    
    return(
        <div className="personInfo">
            <h1 className="fullName">{firstName}, {lastName}</h1>
            <p>Age : {getterValue} Years Old</p>
            <p>Hair Color: {hairColor}</p>
            <button className="increaseAge" onClick={()=>setterValue(getterValue + 1)}>Birthday Button for {firstName} ,{lastName}</button>

        </div>
    )
}
export default PersonCard

