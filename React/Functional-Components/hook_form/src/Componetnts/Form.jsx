import {useState} from 'react'

const Form = (props) => {

    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirm,setConfirm]=useState("")


    return (
    <div>
        <h1>Create User</h1>
        <form >
            <div className='forms'>
                <label htmlFor="fname">First Name : </label>
                <input type="text"  id="fname" placeholder='fist name' onChange={(event)=>(setFirstName(event.target.value))} value={firstName}/>
            </div>

            <div className='forms'>
                <label htmlFor="lname">Last Name : </label>
                <input type="text"  id="lname" placeholder='last name' onChange={(event)=>(setLastName(event.target.value))} value={lastName}/>
            </div>

            <div className='forms'>
                <label htmlFor="email">Email : </label>
                <input type="email"  id="email" placeholder='...@gmail.com' onChange={(event)=>(setEmail(event.target.value))} value={email}/>
            </div>

            <div className='forms'>
                <label htmlFor="password">Password : </label>
                <input type="text"  id="password" placeholder='password' onChange={(event)=>(setPassword(event.target.value))} value={password}/>
            </div>

            <div className='forms'>
                <label htmlFor="confirm_pw">Confirm password : </label>
                <input type="text"  id="confirm_pw" placeholder='Confirm password' onChange={(evenet)=>(setConfirm(evenet.target.value))} value={confirm}/>
            </div>
        </form>

        <div className='user_data'>
            <h3>Your Form Data :</h3>
            <p>First Name :<span>{props.firstName}</span></p>
            <p>Last Name :<span>{lastName}</span> </p>
            <p>Email :<span>{email}</span> </p>
            <p> Password : <span>{password}</span></p>
            <p>Confirm Password :<span>{confirm}</span> </p>
        </div>
    </div>
    )
}

export default Form