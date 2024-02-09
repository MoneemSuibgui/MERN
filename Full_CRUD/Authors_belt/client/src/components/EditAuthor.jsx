import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const EditAuthor = (props) => {
    const[firstname,setFirstName]=useState("")
    const [lastname,setLastName]=useState("")
    const [adresse,setAdresse]=useState("")
    const [age,setAge]=useState(18)

    const navigate=useNavigate();
    const {id}=useParams();
    const [errors, setErrors] = useState([]); 

    useEffect(()=>{
        axios.get(`http://localhost:8000/${id}`)
        .then(response=>{
            // console.log(response.data)
            setFirstName(response.data.firstname)
            setLastName(response.data.lastname)
            setAdresse(response.data.adresse)
            setAge(response.data.age)
        }).catch(err=>console.log(err))
    },[id])

    const updateHundler=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/edit/${id}`,{firstname,lastname,adresse,age})
        .then(response=>{
            console.log(response.data)
            navigate('/')
            
        }).catch(err=>{
            console.log(err.response.data)
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
        })
    }

    return (
        <div className='container bg-primary p-5' >
            <div className='d-flex justify-content-between mb-5'>
                <h4>Add a new author</h4>
                <Link to={'/'} className='btn btn-success btn-lg'>Home</Link>
            </div>
            <form onSubmit={updateHundler}>
                {/* display errors */}
                {errors.map((err, index) => <p key={index} className='text-danger bg-dark p-2'>{err}</p>)}
                <div className='border border-dark p-5 bg-secondary'>
                    <div className='form-group'>
                    
                        <label htmlFor="first_name" className='form-label'>First Name :</label>
                        <input type="text" name="first_name" className='form-control' onChange={(e)=> setFirstName(e.target.value)} value={firstname} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="last_name" className='form-label'>Last Name :</label>
                        <input type="text" name="last_name" className='form-control' onChange={(e)=>setLastName(e.target.value)} value={lastname} />
                    </div>
                    <div className='form-group'>
                    
                        <label htmlFor="adresse"  className='form-label'>Adresse :</label>
                        <input type="text" name="adresse" className='form-control' onChange={(e)=>setAdresse(e.target.value)} value={adresse} />
                    </div>
                    <div className='form-group'>
                    
                        <label htmlFor="age"  className='form-label'>Age :</label>
                        <input type="number" name="age" className='form-control' onChange={(e)=> setAge(e.target.value)} value={age}/>
                    </div>
                    <div className='mt-3 p-2'>
                        <Link to={'/'} className='btn btn-warning btn-lg mx-3'>Cancel</Link>
                        <input type="submit" value="Submit"  className='btn btn-info btn-lg'/>
                    </div>
                </div>
            </form>
        </div>
    )
    }

export default EditAuthor