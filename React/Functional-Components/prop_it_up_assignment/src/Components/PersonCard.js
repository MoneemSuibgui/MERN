import React ,{useState} from "react"
function PersonCard (props){

    const {firstName,lastName,hairColor}=props
    const[likesValue,setValue]=useState(props.initilaValue)


    return(
        <div className="personInfo">
            <h1 className="fullName">{firstName}, {lastName}</h1>
            <p>Age : {age}</p>
            <p>Hair Color: {hairColor}</p>
            <p>Nbre of likes : {likesValue} likes</p>
            <button className="likeBtn" onClick={(event)=>{setValue(likesValue + 1)}}>Like</button>
            <button className="UnlikeBtn" onClick={(event)=>{setValue(likesValue -1)}}>Unlike</button>
        </div>
    )
}
export default PersonCard