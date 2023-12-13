import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import { useState } from 'react';


function App() {
  const[usersSkill,setUsersSkill]=useState([])

  return (
    <div className="App">
      {/* lifting state key value pairs from parent to child */}
      <Form usersSkill={usersSkill} setUsersSkill={setUsersSkill}/>
      <Display  usersSkill={usersSkill} setUsersSkill={setUsersSkill}/>
      <img src='Mern_skills.jpg'/>
    </div>
  );
}

export default App;
