import { Link } from 'react-router-dom'

export default function Navbar() {
    const services = [
        { name: 'Plumbing', path: '/services/plumbing' },
        { name: 'Electrical', path: '/services/electrical' },
        { name: 'House Remodelling', path: '/services/remodelling' },
        { name: 'Construction', path: '/services/construction' },
    ]

    return (
        <nav className='Navbar'>
            <div className='Navbutton'>
                <Link to="/" >
                    <img
                        src="/app_icon.png"
                        alt="The BuildSquad"
                        className="w-12 h-12"
                    />
                </Link>
                <Link to='/about'>About</Link>
                <Link to='/careers'>Careers</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/newsroom'>Newsroom</Link>
                <div className='navlinks'>
                    <div className='dropdown '>
                        <div className='dropdown-btn' >Services</div>
                        <div className='dropdown-menu'>
                            {services.map((service) => (
                                <Link
                                    key={service.name}
                                    to={service.path}
                                >{service.name}</Link>
                            ))}</div>
                    </div>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </nav>

    )
}