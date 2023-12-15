import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios'; // you should import axios
import Dispaly from './components/Dispaly';
function App() {
  
  const[pokemonList,setPokemonList]=useState([])

    useEffect(()=>{
      // axios.get to get the api call and parse into response 
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then(response =>{setPokemonList(response.data.results)})
      .catch(err=>console.log(err))
    },[]) // This empty array forces useEffect to render ONLY when the component first renders
  


  return (
    <div className="App">
      <h1 className='pokemonNames'>Pokemon Names :</h1>
    {/* lift state to the  Dispaly component */}
      <Dispaly pokemonList={pokemonList} />
    </div>
  );
}

export default App;
