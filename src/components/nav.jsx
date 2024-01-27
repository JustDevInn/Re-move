import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as RouterLink } from 'react-router-dom';

const Nav = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Werkwijze",
    },
    {
      id: 2,
      link: "informatie",
    },
    {
      id: 3,
      link: "diensten",
    },
    {
      id: 4,
      link: "voorwaarden",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="sticky top-0 flex h-24 md:h-32 bg-primary z-50 justify-between items-center w-screen px-[30px] text-lg">
      <div>
        <RouterLink to="/" spy={true} smooth={true} duration={500}>
          <h1 className='w-full text-2xl font-light text-start text-secondary uppercase tracking-wider'
          >Re-Move Coaching</h1>
        </RouterLink>
      </div>
      <ul className="hidden lg:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer text-l uppercase font-medium tracking-widest hover:scale-105 duration-200"
          >
            <RouterLink to={link} spy={true} smooth={true} duration={500}>
              {link}
            </RouterLink>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <RxHamburgerMenu size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-primary text-black">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-4xl uppercase font-light tracking-widest duration-200"
            >
              <RouterLink
                onClick={() => setNav(!nav)}
                to={link}
                spy={true}
                smooth={true}
                duration={500}
              >
                {link}
              </RouterLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;
