import './App.css';
import { Routes,Route } from 'react-router-dom'
import DisplayAllAuthors from './components/DisplayAllAuthors';
import CreateNewAuthor from './components/CreateNewAuthor';
import EditAuthor from './components/EditAuthor';
import { useState } from 'react';

function App() {
  const [allAuthors,setAllAuthors]=useState([])
  return (
    <div className="App">
        <h1>Favorite authors</h1>
        <Routes>
          <Route path='/' element={<DisplayAllAuthors allAuthors={allAuthors} setAllAuthors={setAllAuthors}/>}/>
          <Route path='/new' element={<CreateNewAuthor allAuthors={allAuthors} setAllAuthors={setAllAuthors}/>}/>
          <Route path='/edit/:id' element={<EditAuthor/>}/>
        </Routes>
    </div>
  );
}

export default App;
