import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="App">
      
      <PersonCard firstName={"Doe"} lastName={"Jane"} age={45}  hairColor={"Black"} initilaValue={15}/>
      <PersonCard firstName={"Smith"} lastName={"John"} age={88}  hairColor={"Brown"} initilaValue={7}/>
      <PersonCard firstName={"Fillmore"} lastName={"Millard"} age={50}  hairColor={"Brown"} initilaValue={21}/>
      <PersonCard firstName={"Smith"} lastName={"Maria"} age={62}  hairColor={"Brown"} initilaValue={1}/>

    </div>
  );
}
export default App;
