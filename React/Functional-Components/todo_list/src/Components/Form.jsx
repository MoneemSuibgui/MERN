import React,{useState} from 'react'

const Form = (props) => {
    const {beltList,setBeltlist}=props
    // initilise our belt input to stored in state 
    const[belt,setBelt]=useState("");

// submit the form
    const  submitHandler=(e)=>{
        // preventDefault to avoid the refresh op the page
        e.preventDefault();

        //create an object to combine the checkbox input  (didntGetBelt)and the belt input
        const beltExam={
            belt:belt,
            didntGetBelt:false
        }
        // submit validation :if the length of belt less than 4 characters we didn't submit the form
        if(belt.length >3 ){
            
            // store all recently belts added and add the last belt submitted
            setBeltlist([...beltList,beltExam])
            // set belt to be empty when submitted the form 
            setBelt("");
            
        }else{
            setBelt("");
        }
    }

    return (
        <div>
            {/* submit our belt form  */}
            <form onSubmit={(e)=>submitHandler(e)}>
                {/* validation : display error message the belt should be at least 4 charachers  */}
                {
                    belt && belt.length<3 ? 
                    <p className='error'>* Your Belt must at least more than 3 Characters</p>:
                    null
                }
                <label htmlFor="beltName">Belt : </label>
                <input type="text" name="beltName" className='myBeltInput'
                onChange={(e)=>setBelt(e.target.value)} value={belt}/>
                <br />
                <input type="submit" value="Add" className='add' />
            </form>
        </div>
    )
}

export default Form