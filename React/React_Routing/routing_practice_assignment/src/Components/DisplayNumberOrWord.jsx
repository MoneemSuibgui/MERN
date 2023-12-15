// localhost:3000/4: This Component should display the number "4", or any other number that was sent through
import { useParams,useNavigate} from 'react-router-dom';

const DisplayNumberOrWord=(props)=>{
    const {nbrOrText}=useParams();
    // we should set navigate (convention) 
    const navigate=useNavigate();

// navigate is other way of routing  like Link 
// goMainPage  function used to redirect to the main page when we click the button
    const goMainPage=()=>{
        navigate('/')
    }
    return(
        <div>
            {/* conditional rendering*/}
            {
                isNaN(nbrOrText)?
                <div>
                    <h1>The Word from URL  is : {nbrOrText}</h1>
                    <button style={{color:'white',backgroundColor:'green'}} onClick={goMainPage}>Main Page</button>
                </div>:
                <div>
                    <h1>The number from URL  is : {nbrOrText}</h1>
                    <button style={{color:'white',backgroundColor:'green'}} onClick={goMainPage}>Main Page</button>
                </div>
            }
            
        </div>
    )
}

export default DisplayNumberOrWord