import React, { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { TiClipboard } from "react-icons/ti";


const Footers = () => {

    const [copied, setCopied] = useState(false);
  
    const phoneNumber = '0615138681';
  
    const handleCopyToClipboard = () => {
      navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      // Reset copied state after 2 second
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    };

  return (
  <footer className="w-screen">
  <div className="w-full flex flex-col justify-center
  items-center md:px-20 px-10 font-primary font-medium">
{/* logo */}
    <div className="bg-removeLangweb h-[150px] md:h-[400px] w-full bg-center bg-contain bg-no-repeat"></div>
{/* text */}
    <div className="w-full flex justify-center items-center pb-10 text-center">
      <h5 className="text-xl tracking-widest font-thin pb-8">Neem contact met ons op via een van de volgende opties.</h5>
    </div>
{/* contact gegevens */}
    <div className="w-full flex justify-evenly items-center font-thin flex-row md:px-20">
    {/* EMAIL */}
        <div className="flex justify-start items-center flex-col pb-5">
            <a
            className="text-xl tracking-widest uppercase pb-3 text-secondary"
            href="mailto:evi@schutzorgondersteuning.nl">
            <HiOutlineMail size={50} />
            </a>
        </div>
    {/* PHONE */}
    <div className="flex justify-center items-center flex-col pb-5 relative">
        {copied && (
          <p className="text-orange-400 text-xs flex flex-row transition-opacity duration-300 tracking-wider absolute top-0 -mt-10">
            Copied to clipboard! <TiClipboard className="text-lg ml-1" />
          </p>
        )}
        <h4 className="text-xl tracking-widest uppercase pb-3 text-secondary">
          <FaPhone
            size={50}
            onClick={handleCopyToClipboard}
            className='cursor-pointer'
          />
        </h4>
      </div>
    {/* INSTAGRAM */}
        <div className="flex justify-start items-center flex-col pb-5">
            <a
            href="https://www.instagram.com/re_move_coaching"
            rel="noreferrer"
            target="_blank"
            className="text-xl tracking-widest uppercase pb-3 text-secondary"
            >
            <FaInstagram size={50} /></a>
        </div>
    </div>
</div>

{/* kvk nummer */}
  <section className="flex w-screen justify-evenly md:justify-start items-center px-20 pb-1 pt-10 text-xs">
        <div className="flex flex-row md:flex-col tracking-widest">
            <h5 className="md:pb-1 px-2 md:px-0"><span className="text-secondary">KVK</span> 87730278</h5>
            <p className="px-2 md:px-0"><span className="text-secondary">SKJ</span>100016128</p>
        </div>
  </section>
  </footer>
  );
};

export default Footers;
