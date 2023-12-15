import './App.css';
import Form from './Components/Form';
import Display from './Components/Display';
import { Router } from '@reach/router';
function App() {
  return (
    <div className="App">
      <Form/>
      <Router>
        <Display  path ="/:category/:categoryId"/>
      </Router>
    </div>
  );
}

export default App;
