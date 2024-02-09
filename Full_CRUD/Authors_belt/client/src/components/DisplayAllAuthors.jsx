import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DisplayAllAuthors = (props) => {
    const {allAuthors,setAllAuthors} = props

// get all authors 
    useEffect(()=>{
        axios.get("http://localhost:8000/")
        .then((response)=>{
            // console.log(response.data)
            setAllAuthors(response.data)
        })
        .catch(err=>console.log(err))
    },[])

// delete author
    const deleteAuthor=(authorId)=>{
        axios.delete(`http://localhost:8000/${authorId}`)
        .then(()=>{
            setAllAuthors(allAuthors.filter((author)=>author._id !== authorId))
        }).catch(err=>console.log(err))
    }
    


    return (
        <div className='mt-3'>
            <Link to={'/new'} className='btn btn-secondary btn-lg '>Add an author</Link>
            <h4>We have quotes by:</h4>
            <table className='table table-hovered'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>Author</th>
                        <th>Action avilable</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {allAuthors.map((author,index)=>(
                            <tr key={index} className='bg-primary text-white mx-5' >
                                <th >{author.firstname} {author.lastname}</th>
                                <th>
                                    <Link to={`/edit/${author._id}`} className='btn btn-secondary btn-bg mx-3'>Edit</Link>
                                    <button className='btn btn-danger' onClick={()=>deleteAuthor(author._id)}>Delete</button>
                                    
                                </th>
                            </tr>
                        ))}
                        
                    
                </tbody>
            </table>
        </div>
    )
    }

export default DisplayAllAuthors