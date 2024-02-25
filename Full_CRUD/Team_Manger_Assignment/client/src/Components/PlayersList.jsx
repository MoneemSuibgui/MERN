import React, { useState } from 'react'
import { useEffect  } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PlayersList = (props) => {
    const {players,setPlayers}=props
    const [loading,setLoading]=useState(true)


    useEffect(()=>{
        axios.get('http://localhost:8000/list')
        .then(response=>{
            // console.log(response)
            setPlayers(response.data)
            setLoading(false)
        }).catch(err=>console.log(err))
    },[])

    const deletePlayer=(playerID)=>{
        axios.delete('http://localhost:8000/'+ playerID)
        .then(()=>{
            setPlayers(players.filter((player)=> player._id !== playerID))
        }).catch(err=> console.log(err))
    }

    return (
        <div className='team'> 
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
                    
                    {
                        loading? <h2>Loading ...</h2>:
                        
                        <table className=' table table-bordered  p-4  mt-3'>
                            <tr className='bg-dark text-light text-center'>
                                <th>Team Name</th>
                                <th>Prefered Position</th>
                                <th>Actions</th>
                            </tr>
                            {
                                players.map((player,index)=>(
                                    <tr key={index} className='bg-info   text-center'>
                                        <td className='p-2'>{player.name}</td>
                                        <td>{player.position}</td>
                                        <td>
                                            <button className='btn bg-danger  text-light m-2'  onClick={()=>deletePlayer(player._id,alert(`Warning : Are you sure to delete ${player.name} ?`)) }>DELETE</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </table>
                    }
                </div>
            </div>
        </div>
    )
    }

export default PlayersList