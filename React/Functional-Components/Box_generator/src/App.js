import './App.css';
import { useState } from 'react';
import FormBox from './Components/FormBox';
import DisplayBoxes from './Components/DisplayBoxes';
import NinjasForm from './Components/NinjasForm';
import NinjasDisplay from './Components/NinjasDisplay';

function App() {
  const [arrayBox,setArrayBox]=useState([])
  const[ninjaArray,setNinjaArray]=useState([])
  return (
    <div className="App">
    <FormBox arrayBox={arrayBox} setArrayBox={setArrayBox} />
    <DisplayBoxes  arrayBox={arrayBox} />

    <NinjasForm ninjaArray={ninjaArray} setNinjaArray={setNinjaArray}/>
    <NinjasDisplay ninjaArray={ninjaArray} />
      
    </div>
  );
}

export default App;
