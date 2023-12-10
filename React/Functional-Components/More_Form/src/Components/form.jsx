import {useState} from 'react'

const Form = (props) => {

    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirm,setConfirm]=useState("")
    const[user,setUser]=useState()
    const [error,setError]=useState("")
    const[users,setUsers]=useState([])

    const createUser=(e)=>{
        
        e.preventDefault();
        const isTrue=(firstName&&lastName&&email&&password&&password==confirm)
        if(isTrue){
            setError("")
            
        setUser({firstName,lastName,email,password,confirm})
        // store user object into the array to show them later 
        setUsers([...users,{
            firstName,lastName,email,password,confirm
        }])

        console.log(user)
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");
        }else{
            setError("* Please submit your form")
        }
    }

    return (

    <div>
        
        <h1>Create User</h1>
        {/* <p>{JSON.stringify(user)}</p> */}

        <form onSubmit={createUser} className='submit'>
            {setError? <p className='error'>{error}</p> :null }
            
            <div className='info'>
                <label htmlFor="fname">First Name : </label>
                <input type="text"  id="fname" placeholder='fist name' name='fname' className='infoUser' onChange={(event)=>(setFirstName(event.target.value))} value={firstName}/>
                {firstName && firstName.length <2 ? <p className='errorInput'>* First Name must at least be 3 charachters</p> :null}
            </div>

            <div className='info'>
                <label htmlFor="lname">Last Name : </label>
                <input type="text"  id="lname" placeholder='last name' name='lname'  className='infoUser' onChange={(event)=>(setLastName(event.target.value))} value={lastName}/>
                {lastName && lastName.length <2 ? <p  className='errorInput'>* Last Name must at least be 3 charachters</p> :null}

            </div>

            <div className='info'>
                <label htmlFor="email">Email Adresse : </label>
                <input type="email"  id="email" placeholder='name@gmail.com'name='email'  className='infoUser' onChange={(event)=>(setEmail(event.target.value))} value={email}/>
                {email && email.length <7 ? <p  className='errorInput'>* Email must at least be 8 charachters</p> :null}

            </div>

            <div className='info'>
                <label htmlFor="password">Password : </label>
                <input type="text"  id="password" placeholder='password' name="password"  className='infoUser' onChange={(event)=>(setPassword(event.target.value))} value={password}/>
                {password && password.length <8 ? <p  className='errorInput'>* Password must at least be 8 charachters</p> :null}

            </div>

            <div className='info'>
                <label htmlFor="confirm_pw"> Confirm password : </label>
                <input type="text"  id="confirm_pw" name="confirm_pw" placeholder='Confirm password'  className='infoUser' onChange={(evenet)=>(setConfirm(evenet.target.value))} value={confirm}/>
                {password !=confirm ? <p className='errorInput'>* Confirm password must match password</p> :null}
            </div>
            <input type="submit" className="Create" />
        </form>
        {((firstName.length>2) && (lastName.length>2) && (email.length>8) && (password.length>8) && (confirm==password) ) ?<h3 className='valid' >Your info is Correct Submit Now!! </h3> :<h3  className='notVlaid'>Please Enter correct info into the form to submit </h3>}


        <div className='showForm' >
            <h3>Your Form Data :</h3>
            <p>First Name :<span>{firstName}</span></p>
            <p>Last Name :<span>{lastName}</span> </p>
            <p>Email :<span>{email}</span> </p>
            <p> Password : <span>{password}</span></p>
            <p>Confirm Password :<span>{confirm}</span> </p>
        </div>
        {/* iterate throught the list of users and display them */}
        <div>
                {
                users.map((person,index)=>(
                    <div style={{margin:"20px 20px",padding:"20px",border:"2px black solid",borderRadius:"50px",background:"black" ,color:"white" ,width:"250px",height:"200px",display:" inline-block"}} key={index}>
                        <p>First Name : {person.firstName}</p>
                        <p>Last Name :{person.lastName}</p>
                        <p>Email : {person.email}</p>
                        <p>Password : {person.password}</p>
                        <p>Confirm Password :{person.confirm}</p>
                    </div>
                ))
                }
            </div>
    </div>
    )
    }

export default Form