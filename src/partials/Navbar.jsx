import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <>
        <div id="Navbar" className="flex justify-between items-center px-4">
            <div className="Navbar_logo">
                <span style={{ color: '#FFF' }}>DEVXJMI</span>
                <img src='' />

            </div>
            <div className="Navbar_navlinks">
                <Link id="link" to='/' className="text-white mx-2">Home</Link>
                <Link to='#' className="text-white mx-2">Sponsors</Link>
                <Link to='#' className="text-white mx-2">Organisers</Link>
                <Link to='#' className="text-white mx-2">Login</Link>
            </div>
        </div>
        <hr className='h-1.5 bg-[#a50045] xl:w-[95%] mx-auto border-none rounded-md' />
        </>
        
    );
}

export default Navbar;
