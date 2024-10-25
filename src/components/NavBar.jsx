import React from 'react';
// import components
import MobileNav from './MobileNav';
// import link
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className='bg-primary sticky top-0 w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[100px] flex items-center'>
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo for desktop and mobile */}
        <Link to="/" className="w-[200px] h-[100px] bg-removeLangweb bg-contain bg-no-repeat"></Link>

        {/* Desktop nav */}
        <nav className='hidden lg:flex gap-12 font-regular uppercase'>
          <Link to='/werkwijze/#toppage' smooth={true} duration={500} className='hover:text-[#696c6d] text-black transition'>Werkwijze</Link>
          <Link to='/informatie/#toppage' smooth={true} duration={500} className='hover:text-[#696c6d] text-black transition'>Informatie</Link>
          <Link to='/diensten/#toppage' smooth={true} duration={500} className='hover:text-[#696c6d] text-black transition'>Diensten</Link>
          <Link to='/contact/#toppage' smooth={true} duration={500} className='hover:text-[#696c6d] text-black transition'>Contact</Link>
        </nav>
      </div>
      {/* Mobile navigation */}
      <MobileNav />
    </header>
  );
}

export default NavBar;
