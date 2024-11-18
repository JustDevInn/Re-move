import React, { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import {FaInstagram } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Footers = () => {
  // const [copied, setCopied] = useState(false);
  // const phoneNumber = '0615138681';
  const navigate = useNavigate();

  // const handleCopyToClipboard = () => {
  //   navigator.clipboard.writeText(phoneNumber);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 1500);
  // };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="w-full bg-primaryDark p-5 h-[50vh] md:h-[65vh] relative">
      {/* Centered Content */}
      <div className="w-full flex flex-col justify-center items-center font-primary font-medium h-full space-y-4">
        
         {/* Clickable Logo */}
         <div 
          onClick={handleLogoClick} 
          className="md:w-[500px] md:h-[200px] w-[250px] h-[150px] bg-removeLangweb bg-center bg-cover bg-no-repeat cursor-pointer" 
          aria-label="Homepage"
          role="img"
        />

        {/* Social Icons Container */}
        <div className="flex justify-center space-x-12">
          {/* EMAIL */}
          <a
            className="text-xl tracking-widest uppercase text-secondary"
            href="mailto:evi@schutzorgondersteuning.nl"
            aria-label="Send Email"
          >
            <HiOutlineMail size={20} />
          </a>

          {/* PHONE
          <div className="relative" role="button" aria-label="Copy phone number to clipboard">
            {copied && (
              <p className="text-green-500 text-xs flex items-center transition-opacity duration-300 tracking-wider absolute top-0 -mt-10">
                Copied! <TiClipboard className="text-lg ml-1" />
              </p>
            )}
            <FaPhone
              size={20} 
              onClick={handleCopyToClipboard}
              className="cursor-pointer focus:outline focus:ring-2 focus:ring-black text-secondary"
              aria-label="Copy phone number to clipboard"
              tabIndex={0}
            />
          </div> */}

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/re_move_coaching"
            rel="noreferrer"
            target="_blank"
            className="text-xl tracking-widest uppercase text-secondary focus:outline focus:ring-2 focus:ring-black"
            aria-label="Visit Instagram Profile"
          >
            <FaInstagram size={20} />
          </a>
        </div>

      {/* KVK Information */}
<div className="w-full text-xs flex flex-wrap justify-evenly items-center gap-2 py-10 mt-10">
  <p className="flex-shrink-0"><span className="text-secondary mr-2">KVK</span> 87730278</p>
  <p className="flex-shrink-0"><span className="text-secondary mr-2">SKJ</span> 100016128</p>
  <Link 
    to="/voorwaarden#toppage" 
    className="focus:outline focus:ring-2 focus:ring-black underline flex-shrink-0"
    aria-label="View Terms and Conditions"
  >
    Algemene voorwaarden
  </Link>
</div>

      </div>
    </footer>
  );
};

export default Footers;
