import './App.css';
import React ,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  // create state to manipulate the id of  starwars api every time when render the page
  const [starWarsId,setStarWarId]=useState(1)
  // create an object to get all api info about one starwars
  const [StarWars,setStarWars]=useState({})
  // create state to get all affiliations of one starwars
  const[affiliationsStarwars,setAffiliationsStarwars]=useState([])

  useEffect(()=>{
    // set the state starWarsId to manipulate the id of the api request
    axios.get(`https://akabab.github.io/starwars-api/api/id/${starWarsId}.json`)
    .then(response=>{
      console.log(response.data)
      console.log(response.data.affiliations)
      setAffiliationsStarwars(response.data.affiliations)
      console.log(affiliationsStarwars)
      setStarWars(response.data)
    })
  },[starWarsId]) // change the value of state every time when render the app

  // hundleNextStarwars function : set the next starwarsId every time the app rendered
  const hundleNextStarwars=()=>{
    // conditional rendering 
    if(starWarsId >=1 && starWarsId !== 17){
      setStarWarId(starWarsId + 1)
    }
     // id 17 of  strwars is not exit 
    if(starWarsId === 17){
      setStarWarId(18)
    }
    if(starWarsId === 88){
      setStarWarId(1)
    }
  }
  const hundlePreviousStarwars=()=>{

    if(starWarsId > 1 && starWarsId !== 17){
      setStarWarId(starWarsId-1)
      // id 17 of  strwars is not exit 
    }else if(starWarsId === 17){
      setStarWarId(16)
    }
    else{
      setStarWarId(88)
    }
  }


  return (
    <div className="App">
      <div className='starwars'>
        <h2>All Starwars Info :</h2>
        <p>ID : {StarWars.id}</p>
        <p>Homeworld : {StarWars.homeworld}</p>
        <p>Name :{StarWars.name}</p>
        <img className="StarwarsPicture" src={StarWars.image} alt ='starwars_picture'/>
        <p>EyeColor : {StarWars.eyeColor}</p>
        <button onClick={hundlePreviousStarwars}>Previous</button>
        <button onClick={hundleNextStarwars}>Next </button>
        <h3>Affiliations : </h3>
        <ul>
          {
            affiliationsStarwars.map((affiliation,index)=>(
              <li key={index}><b>{affiliation}</b></li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
