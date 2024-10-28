import React, { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { TiClipboard } from "react-icons/ti";
// linking
import { Link } from 'react-router-dom';

const Footers = () => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '0615138681';

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <footer className="w-full bg-primary p-10 h-[5 0vh] relative">
      {/* Centered Content */}
      <div className="w-full flex flex-col justify-center items-center font-primary font-medium h-full space-y-4">
        {/* Logo */}
        <div className="md:w-[500px] md:h-[200px] w-[250px] h-[150px] bg-removeLangweb bg-center bg-cover bg-no-repeat"></div>


        {/* Contact Text */}
        <div>
          <p className="font-thin text-center">Neem contact met ons op via een van de volgende opties.</p>
        </div>

        {/* Social Icons Container (Smaller Icons) */}
        <div className="flex justify-center space-x-12">
          {/* EMAIL */}
          <a
            className="text-xl tracking-widest uppercase text-secondary"
            href="mailto:evi@schutzorgondersteuning.nl">
            <HiOutlineMail size={20} />
          </a>

          {/* PHONE */}
          <div className="relative">
            {copied && (
              <p className="text-green-500 text-xs flex flex-row transition-opacity duration-300 tracking-wider absolute top-0 -mt-10">
                Copied! <TiClipboard className="text-lg ml-1" />
              </p>
            )}
            <FaPhone
              size={20} 
              onClick={handleCopyToClipboard}
              className="cursor-pointer focus:outline focus:ring-2 focus:ring-black text-secondary"
            />
          </div>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/re_move_coaching"
            rel="noreferrer"
            target="_blank"
            className="text-xl tracking-widest uppercase text-secondary focus:outline focus:ring-2 focus:ring-black"
          >
            <FaInstagram size={20} />
          </a>
        </div>
         {/* KVK Information */}
         <div className="w-full text-xs flex justify-evenly items-center pt-10 pb-10 mt-10">
         <p><span className="text-secondary">KVK</span> 87730278</p>
        <p><span className="text-secondary">SKJ</span> 100016128</p>
        <Link to="/voorwaarden#toppage" className="focus:outline focus:ring-2 focus:ring-black underline">
          Algemene voorwaarden
        </Link>
      </div>
      </div>
    </footer>
  );
};

export default Footers;
