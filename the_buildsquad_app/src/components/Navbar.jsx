import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className='Navbar'>
            <div>
                <Link to="/" >
                <img
                    src="/app_icon.png" 
                    alt="The BuildSquad"       
                    className="w-12 h-12"   
                />
                </Link>
                    <div>
                        <Link to="/services/Construction">Construction</Link>
                        <Link to="/services/Electrical">Electrical</Link>
                        <Link to="/services/Remodelling">House Remodelling</Link>
                        <Link to="/services/Plumbing">Plumbing</Link>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>                        
                        <Link to="/Register">Register</Link>
                    </div>
            </div>
        </nav>
        
    )
}