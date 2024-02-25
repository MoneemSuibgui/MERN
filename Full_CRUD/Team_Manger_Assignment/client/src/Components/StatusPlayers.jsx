import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const StatusPlayers = (props) => {

    const {players,setPlayers}=props
    const [loading,setLoading]=useState(true)
    const [status,setStatus]=useState("")
    // const [updatedPlayer,setUpdatedPlayer]=useState({})

// get all players once te component render
    useEffect(()=>{
        axios.get('http://localhost:8000/list')
        .then(response=>{
            console.log(response)
            setPlayers(response.data)
            setLoading(false)
        }).catch(err=>console.log(err))
    },[])
    



    return (
        <div>
            <div className='statusPlayer'>
                <div className='container broder border-dark border border-3  bg-light  m-4 p-2 '>
                    <div className='text-decoration-underline m-2'>
                        <Link to={"/"} className='mx-4 '>Manage Players </Link>
                        <span>|</span>
                        <Link to={"/status/game/1"} className='mx-4'>Manage Players Status</Link>
                    </div>
                    
                    <div className='m-4 broder border-dark border border-3 bg-light m-3 p-3'>
                        <h1>Players Status -Game 1</h1>
                        <div className='d-flex justify-content-center'>
                            <Link to={'/players/list'} className='text-decoration-underline mx-3 '>Game 1</Link>
                            <span>|</span>
                            <Link to={'/players/list'} className=' text-decoration-underline mx-3'>Game 2</Link>
                            <span>|</span>
                            <Link to={'/players/list'} className='text-decoration-underline mx-3 '>Game 3</Link>
                        </div>
                        {
                            loading?
                            <p>Loading ...</p>:

                        <table className=' table table-bordered  p-4  mt-3'>
                            <tr className='bg-dark text-light text-center'>
                                <th>Team Name</th>
                                <th>Actions</th>
                            </tr>
                            
                            {
                                players.map((player,index)=>(
                                    <tr key={index} className='bg-info text-center'>
                                        <td className='p-4 text-decoration-underline '>{player.name}</td>
                                        
                                        
                                        <td>
                                                {
                                                    status === "playing"?
                                                    <button className=' text-light btn btn-success border-2' >Playing</button>
                                                    :<button className=' text-light btn bg-secondary border-2'  value="playing" onClick={(e)=> setStatus(e.target.value)} > Playing</button>
                                                }
                                                {
                                                    status === "not playing"?
                                                    <button className=' text-light btn btn-warning border-2 mx-2'  >Not Playing</button>
                                                    :<button className=' text-light btn bg-secondary border-2 mx-2'  value="not playing" onClick={(e)=> setStatus(e.target.value)} >Not Playing</button>
                                                }
                                                {
                                                    status === "undecided"?
                                                    <button className=' text-light btn btn-danger border-2'  >Undecided</button>
                                                    :<button className=' text-light btn bg-secondary border-2'  value="undecided" onClick={(e)=> setStatus(e.target.value)}  >Undecided</button>
                                                }
                                        </td>

                                    </tr>
                                ))
                            }
                            
                        </table>
                        }
                    </div>
                </div>
            </div>
            
            
        </div>
    )
    }

export default StatusPlayers