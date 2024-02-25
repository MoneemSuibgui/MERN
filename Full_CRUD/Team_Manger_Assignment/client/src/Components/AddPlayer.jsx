import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios'

const AddPlayer = (props) => {
    const{players,setPlayers}=props

    const [name,setName]=useState("");
    const [position,setPosition]=useState("");
    const[errorMsg,setErrMsg]=useState({})
    const navigate=useNavigate();

    const hundlerSubmit=(e)=>{
        e.preventDefault();
        const player={name,position}
        
        axios.post('http://localhost:8000/api',player )
        .then(response=>{
            console.log("Succesful submit")
            console.log(response.data)
            setPlayers([...players,response.data])
            navigate('/players/list');
        })
        .catch(err=>{
            console.log(err)
            console.log(err.response.data.errors);
            setErrMsg(err.response.data.errors)
        })
    }


    return (
        <div className='createPlayer'>
            <div className='container broder border-dark border border-3  bg-light  m-4 p-2 '>
                <div className='text-decoration-underline m-2'>
                    <Link to={"/"} className='mx-4 '>Manage Players </Link>
                    <span>|</span>
                    <Link to={"/status/game/1"} className='mx-4'>Manage Players Status</Link>
                </div>
                
                <div className='m-4 broder border-dark border border-3 bg-light m-3 p-3'>
                    <Link to={'/players/list'} className='text-decoration-underline mx-3 '>List</Link>
                    <span>|</span>
                    <Link to={'/players/addplayer'} className=' text-decoration-underline mx-3'>Add Player</Link>
                    <form onSubmit={hundlerSubmit}>
                        <div className='border border-dark border-4 p-4 m-4 bg-warning' >
                            <h1 className='text-dark'>Add player</h1>

                        {/* backend validation  */}
                            {
                                errorMsg.name ?
                                <p className='text-danger'>{errorMsg.name.message}</p>:null
                            }
                        {/* front end validation */}
                            {name && name.length <2 ? <p className='text-danger'>* Name must at least be 3 charachters </p> :null}


                            <label htmlFor="name" className='form-label text-dark'>Player Name :</label>
                            <input type="text" name="name" className='form-control' onChange={(e)=>setName(e.target.value)} value={name} />

                            <label htmlFor="name" className='form-label text-dark'>Preffered Position :</label>
                            <input type="text" name="name" className='form-control'  onChange={(e)=>setPosition(e.target.value)} value={position}/>
                            <input type="submit" value="Add" className='btn btn-success btn-md w-50 mt-4 ' />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
    }

export default AddPlayer