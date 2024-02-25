import './App.css';
import {Routes,Route} from 'react-router-dom'
import AddPlayer from './Components/AddPlayer';
import { useState } from 'react';
import PlayersList from './Components/PlayersList';
import StatusPlayers from './Components/StatusPlayers';

function App() {
  const [players,setPlayers]=useState([])
  return (
    <div className="App">
      <Routes>
        <Route path='/players/addplayer' element={<AddPlayer players={players} setPlayers={setPlayers}/>}/>
        <Route path='/players/list' element={<PlayersList players={players} setPlayers={setPlayers}/>}/>
        <Route path='/status/game/1' element={<StatusPlayers players={players} setPlayers={setPlayers}/>}/>

      </Routes>
    </div>
  );
}

export default App;
