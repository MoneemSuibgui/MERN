//  . localhost:3000/hello/blue/red: display the word "hello" in blue text with a red background. It should work with any other valid word and colors.
import { useParams,Link} from 'react-router-dom';

const DisplayStylingWord=(props)=>{
    const {word,colorWord,bgText}=useParams();
    return(
        <div>
            {/* conditional rendering check if states exist*/}
            <h2 style={
                colorWord && bgText ?
                {color:colorWord,backgroundColor:bgText,padding:'20px',marginTop:'50px'}
                :null}>The world is : {word}</h2>
            <Link  to={'/'}><button style={{color:'white',backgroundColor:'green'}}>Main Page</button></Link>

        </div>
    )
}
export default DisplayStylingWord