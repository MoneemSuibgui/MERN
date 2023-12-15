import './App.css';
// import all what we need for routing 
import { BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
// import all components to the main component App.js
import DisplayHome from './Components/DisplayHome';
import DisplayNumberOrWord from './Components/DisplayNumberOrWord';
import DisplayStylingWord from './Components/DisplayStylingWord';
// adding new component to learn another way to add link using NavLink
import Main from './Components/Main';

function App() {
  return (

    <div className="App">
          
      <BrowserRouter>
          <NavLink className="navLink" to='/'>About Routing</NavLink>
          <NavLink className="navLink"  to='/home'>Home</NavLink>
        <Routes>
          {/* put all routes to the main components  */}
          <Route path='/' element={<Main/>}/>
          <Route path='/home' element={<DisplayHome/>}/>
          <Route path='/:nbrOrText' element={<DisplayNumberOrWord/>}/>
          <Route path='/:word/:colorWord/:bgText' element={<DisplayStylingWord/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
