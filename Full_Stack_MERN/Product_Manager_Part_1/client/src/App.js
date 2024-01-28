// import what we needed to the main component 
import './App.css';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <h1 className='productHeader'>Product Manager</h1>
      <ProductForm/>
    </div>
  );
}

export default App;
