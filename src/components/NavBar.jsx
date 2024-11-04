import React from 'react';
import MobileNav from './MobileNav';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className='bg-primaryDark sticky top-0 w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[100px] flex items-center'>
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo for desktop and mobile */}
        <div 
          onClick={handleLogoClick} 
          className="w-[200px] h-[80px] bg-removeLangweb bg-contain bg-no-repeat cursor-pointer" 
          aria-label="Homepage"
        ></div>

        {/* Desktop nav */}
        <nav className='hidden lg:flex gap-12 font-regular uppercase'>
          <Link 
            to='/werkwijze/#toppage' 
            aria-label="Link to Werkwijze page"
            className='hover:text-[#696c6d] text-black transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#696c6d]'
          >
            Werkwijze
          </Link>
          <Link 
            to='/informatie/#toppage' 
            aria-label="Link to Informatie page"
            className='hover:text-[#696c6d] text-black transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#696c6d]'
          >
            Informatie
          </Link>
          <Link 
            to='/diensten/#toppage' 
            aria-label="Link to Diensten page"
            className='hover:text-[#696c6d] text-black transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#696c6d]'
          >
            Diensten
          </Link>
          <Link 
            to='/contact/#toppage' 
            aria-label="Link to Contact page"
            className='hover:text-[#696c6d] text-black transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#696c6d]'
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* Mobile navigation */}
      <MobileNav />
    </header>
  );
}

export default NavBar;
