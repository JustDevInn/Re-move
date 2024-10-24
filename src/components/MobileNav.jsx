import React, { useState } from 'react';
// import icons
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';

// Menu variants for animation
const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Function to close the menu
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <nav className='text-black lg:hidden'>
      {/* Nav open button */}
      <div onClick={() => setOpenMenu(true)} className='text-3xl cursor-pointer'>
        <CgMenuRight />
      </div>
      {/* Mobile menu */}
      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'
      >
        {/* Close icon */}
        <div 
  onClick={handleCloseMenu} 
  className='text-4xl absolute z-30 left-4 top-14 text-black cursor-pointer'>
          <IoMdClose />
        </div>
        {/* Menu list */}
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-black font-thin uppercase tracking-widest text-3xl'>
          <li>
            <Link onClick={handleCloseMenu} to='/#toppage'>Home</Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} to='/werkwijze/#toppage'>Werkwijze</Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} to='/informatie/#toppage'>Informatie</Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} to='/diensten/#toppage'>Diensten</Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} to='/contact/#toppage'>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
