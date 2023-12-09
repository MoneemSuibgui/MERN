import './App.css';
import PersonCard from './Components/PersonCard';

const personObj=[
  {
  fname:"Moneem",
  lname:"Suibgui",
  agePerson:32,
  hairColorPerson:"Black"
},
{
  fname:"Soulef",
  lname:"Suibgui",
  agePerson:34,
  hairColorPerson:"Brown"
},
{
  fname:"Hosni",
  lname:"Bro",
  agePerson:24,
  hairColorPerson:"Black"
},
{
  fname:"Mimou",
  lname:"My Love",
  agePerson:2,
  hairColorPerson:"Black"
}]
// const x=JSON.stringify(personObj)


function App() {
  return (
    <div className="App">
      <h2>List of Person :</h2>
      {/* <p>{x}</p> */}
      
      {personObj.map((person , i)=>
      (
        <PersonCard
          key={i} // the index of each person object in the array
          firstName={ person.fname}
          lastName= {person.lname}
          Age= {person.agePerson}
          hairColor= {person.hairColorPerson}
        />
        
      ))}
      
      


    
      
    </div>
  );
}
export default App;
