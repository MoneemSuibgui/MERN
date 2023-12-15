
//  localhost:3000/home: This Component should display the home page, with a generic "Welcome" heading
import { Link} from 'react-router-dom';

const DisplayHome=()=>{
    return(
        <div>
            <h1>Welcome</h1>
            <Link  to={'/'}><button style={{color:'white',backgroundColor:'green'}}>Main Page</button></Link>
        </div>
    )
}

export default DisplayHome