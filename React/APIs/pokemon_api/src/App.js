import './App.css';
import { useState , useEffect} from 'react';
import Display from './components/Display';

function App() {

    //    create an empty array as the initial value to be held in state
  const [allPokemonNames,setAllPokemonNames]=useState([])

  // useEffect will run immediately after the JSX is rendered
  useEffect(()=>{

    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response=>response.json())
    // set my response (object) to my state to dispaly it later 
    .then(resp=>{
      // console.log(resp.results)
      return setAllPokemonNames(resp.results)})
    .catch(err=>console.log(err))
  },[])

  return (
    <div className="App">
      {/* lifting state on the Display components to dislapy all pokemons*/}
      <Display allPokemonNames={allPokemonNames}/>
      <img className='pokemonsPicture' src='pokemons.jpg' alt='pokemons_picture'/>
    </div>
  );
}
export default App;
