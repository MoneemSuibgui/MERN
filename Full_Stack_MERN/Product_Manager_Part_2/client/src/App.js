// import what we needed to the main component 
import './App.css';
import Main from './Views/Main'
import {Routes,Route} from 'react-router-dom'
import DisplayOneProduct from './components/DisplayOneProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/:id' element={<DisplayOneProduct/>}  />
      </Routes>
    </div>
  );
}

export default App;
