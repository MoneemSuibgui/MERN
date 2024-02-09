import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateNewAuthor = (props) => {
    const{allAuthors,setAllAuthors}=props
    const[firstname,setFirstName]=useState("")
    const [lastname,setLastName]=useState("")
    const [adresse,setAdresse]=useState("")
    const [age,setAge]=useState(18)

    const navigate=useNavigate();

    const [errors,setErrors]=useState([])

    const hundlerSubmit=(e)=>{
        e.preventDefault();
        const author={firstname,lastname,age,adresse}
        axios.post("http://localhost:8000/new",author)
        .then(response=>{
            console.log(response.data)
            setAllAuthors([...allAuthors,response.data])
            // setFirstName('');
            // setLastName('');
            // setAdresse('');
            // setAge(18);
            navigate('/');

        })
        .catch(err=>{
            console.log(err.response.data)
            setErrors(err.response.data.errors)
        })
    }




    return (
        <div className='container bg-primary p-5' >
            <div className='d-flex justify-content-between mb-5'>
            <h4>Add a new author</h4>
            <Link to={'/'} className='btn btn-success btn-lg'>Home</Link>
            </div>
            
            <form onSubmit={hundlerSubmit}>
                
                <div className='border border-dark p-5 bg-secondary'>
                    <div className='form-group'>
                    {
                        errors.firstname?
                        <p className='text-danger bg-dark p-2'>{errors.firstname.message}</p>:null
                    }
                        <label htmlFor="first_name" className='form-label'>First Name :</label>
                        <input type="text" name="first_name" className='form-control' onChange={(e)=>setFirstName(e.target.value)} value={firstname}/>
                    </div>
                    <div className='form-group'>
                    {
                        errors.lastname?
                        <p className='text-danger bg-dark p-2 mt-4'>{errors.lastname.message}</p>:null
                    }
                        <label htmlFor="last_name" className='form-label'>Last Name :</label>
                        <input type="text" name="last_name" className='form-control' onChange={(e)=>setLastName(e.target.value)} value={lastname}/>
                    </div>
                    <div className='form-group'>
                    {
                        errors.adresse?
                        <p className='text-danger bg-dark p-2 mt-4'>{errors.adresse.message}</p>:null
                    }
                        <label htmlFor="adresse"  className='form-label'>Adresse :</label>
                        <input type="text" name="adresse" className='form-control' onChange={(e)=>setAdresse(e.target.value)} value={adresse}/>
                    </div>
                    <div className='form-group'>
                    {
                        errors.age?
                        <p className='text-danger bg-dark p-2 mt-4'>{errors.age.message}</p>:null
                    }
                        <label htmlFor="age"  className='form-label'>Age :</label>
                        <input type="number" name="age" className='form-control' onChange={(e)=>setAge(e.target.value)} value={age}/>
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

export default CreateNewAuthor