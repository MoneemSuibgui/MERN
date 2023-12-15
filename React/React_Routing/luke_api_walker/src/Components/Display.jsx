import React , { useState,useEffect } from 'react'
import axios from 'axios'

// Display Cmponent to keep track of api data 
const Display = (props) => {
    // destructuring our state passing via props
    const{category,categoryId}= props;
    // initiate  state to manipulate data
    const [categoryObj,setCategoryObj]= useState({})
    const [errorApi,setErrorApi]=useState(false)
    const[homeworldName,setHomeworldName]=useState("")

    // We want to make that API call when 
    //the component renders dependent of props(category & categoryId)
    useEffect(()=>{
        if(category && categoryId ){
            axios.get(`https://swapi.dev/api/${category}/${categoryId}`)
                .then(response=>{
                    // console.log(response.data)
                    setCategoryObj(response.data)
                    console.log(response.data.homeworld)
                    
                    // console.log(categoryObj)
                    setErrorApi(false)

                    axios.get(response.data.homeworld)
                    .then(homeworldResponse=>{
                        // console.log(homeworldResponse.data.name)
                        setHomeworldName(homeworldResponse.data.name)
                        
                    }).catch(error => console.log("homeworld doesn't exist "+error))
                }).catch(err=>{
                    console.log("These aren't the droids you're looking for"+err)
                    setErrorApi(true)
                })
                }
    },[category,categoryId]) //  Dependencies


    return (
        <div>
            
            {/* <h2>Dispaly Component</h2> */}
            {/* { conditional rendering dependent the error is true or false 
                and  the second condition by category  using ternory operator */}
            {
                (!errorApi) ?
                    category === "people" ?
                        <div>
                            <h2>{categoryObj.name}</h2>
                            <p><b>Height </b>: {categoryObj.height}</p>
                            <p><b>Hair Color </b>: {categoryObj.hair_color}</p>
                            <p><b>Eye Color </b>: {categoryObj.eye_color}</p>
                            <p><b>Skin Color </b>: {categoryObj.skin_color}</p>
                            <p><b>Homeworld</b> : <span className='homeworld'>{homeworldName}</span></p>
                        </div>:
                        <div>
                            <h2>{categoryObj.name}</h2>
                            <p><b>Climate</b> : {categoryObj.climate}</p>
                            <p><b>Terrain </b>: {categoryObj.terrain} </p>
                            <p><b>Surface Water </b>: {categoryObj.surface_water}</p>
                            <p><b>Population </b>: {categoryObj.population}</p>
                        </div>

                    :<div>
                        <img className='errorImage' src='https://idsb.tmgrup.com.tr/ly/uploads/images/2021/11/14/thumbs/800x531/159258.jpg' alt='Obi-Wan Kenobi'/>
                        <p className='errorMessage'>* These aren't the droids you're looking for</p>
                    </div>
            }
        </div>
    )
}

export default Display