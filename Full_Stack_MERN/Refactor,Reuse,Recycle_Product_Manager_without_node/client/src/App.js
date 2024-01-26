// import what we needed to the main component 
import './App.css';
import { useState } from 'react';
import Main from './Views/Main'
import {Routes,Route} from 'react-router-dom'
import DisplayOneProduct from './components/DisplayOneProduct';
import EditProduct from './components/EditProduct';


function App() {
  const [products,setProducts]=useState([])

  return (
    <div className="App">
      {/* hundle all routes  */}
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/:id' element={<DisplayOneProduct/>}  />
        <Route path='/edit/:id' element={<EditProduct products={products}  setProducts={setProducts}/>} />
      </Routes>
    </div>
  );
}
export default App;
