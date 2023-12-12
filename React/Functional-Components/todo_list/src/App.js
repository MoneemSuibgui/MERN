import './App.css';
import Form from './Components/Form';
import Display from './Components/Display';
import { useState } from 'react';

function App() {
      // initialise beltList to store all belts
      const[beltList,setBeltlist]=useState([])
  return (
    <div className="App">
      <h1> Moneem Belt Exams</h1>
      {/* lifting state from the parent component to the childs components */}
      <Form  beltList={beltList} setBeltlist={setBeltlist}/>
      <Display  beltList={beltList} setBeltlist={setBeltlist} />
    </div>
  );
}

export default App;
