import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Navigation from './Components/Navigation';
import Subcontent from './Components/Subcontent';
import Advertisement from './Components/Advertisement';
function App() {

  return (
    <div className="App">
      <Header/>
      <div className='body'>
        {/* Navigation blocks */}
        <Navigation/>
        {/* Main block */}
        <Main>
          {/* Children of Main block */}
            <Subcontent/>
            <Subcontent/>
            <Subcontent/>
            <Advertisement/>
        </Main>
      </div>
      
    </div>
  );
}

export default App;
