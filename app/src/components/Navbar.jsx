import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import { supabase } from '../supabase';

export default function Navbar() {
    const services = [
        { name: 'Plumbing', path: '/services/plumbing' },
        { name: 'Electrical', path: '/services/electrical' },
        { name: 'House Remodelling', path: '/services/remodelling' },
        { name: 'Construction', path: '/services/construction' },
    ]

    const [user,setUser]=useState(null);

    useEffect(()=>{
        const checkUser=async()=>{
            const {data:{session}}=await supabase.auth.getSession();
            setUser(session?.user||null);
        };
        checkUser();

        const {data:authListener}=supabase.auth.onAuthStateChange(
            (event,session)=>{
                setUser(session?.user||null);
            }
        );

        return()=>{
            authListener.subscription.unsubscribe();
        };
    },[]);

    return (
        <nav className='Navbar'>
            <div className='Navbutton'>
                <Link to="/" >
                    <img
                        src="/Navbar-logo.png"
                        alt="The BuildSquad"
                        className="w-auto h-12"
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
                {user?(
                    <Link to='/dashboard' className='font-bold text-blue-300'>
                        Dashboard
                    </Link>
                ):(
                    <Link to="/login">
                        Login
                    </Link>
                ) }
            </div>
        </nav>
    )
}