import {Link} from 'react-router-dom'

export default function Login(){
    return(
        <div>
            Welcome to Login
            <Link to="/Register">Create a new account</Link>
        </div>
    );
}