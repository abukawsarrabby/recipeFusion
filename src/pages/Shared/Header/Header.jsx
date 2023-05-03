import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink/ActiveLink';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='flex flex-wrap items-center justify-between py-3'>
            <div className='flex items-center flex-shrink-0 mr-6'>
                <a href="/">
                    <h2 className='font-bold text-4xl text-black'>Recipe  <span className='text-primary'>Fusion</span></h2>
                </a>
            </div>
            <div className='block lg:hidden'>
                <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white' onClick={toggleMenu}>
                    <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <title>Menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                </button>
            </div>
            <div className={`w-full text-center block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className='text-sm lg:flex-grow'>
                    <ActiveLink to='/' onClick={toggleMenu}> Home</ActiveLink>
                    <ActiveLink to='/blog' onClick={toggleMenu}>Blog</ActiveLink>
                    <ActiveLink to='/login' onClick={toggleMenu}>Login</ActiveLink>
                    <ActiveLink to='/register' onClick={toggleMenu}>
                        Register
                    </ActiveLink>
                </div>
                <div>
                    <button className='btn btn-primary'>
                        <Link to="/login">Login</Link>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;