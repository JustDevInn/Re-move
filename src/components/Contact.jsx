import React from "react";
import { FaArrowLeft } from "react-icons/fa";
// linking
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
  <section id="toppage">
    {/* HERO */}
    <section className="relative w-screen h-[85vh] bg-couple bg-cover flex justify-center items-center" style={{ backgroundPosition: '50% 20%' }}>
      {/* text */}
      <div className="absolute bottom-10 left-5 text-white p-5">
        <h1 className="text-[50px] lg:text-[120px] font-bold uppercase leading-none">
          Contact
        </h1>
      </div>

      {/* transparent overlay to darken image for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
    </section>

    {/* Contact form */}
    <section id="contactinformation" className="w-screen">
      <div className="flex flex-col p-10 lg:p-20">
        <div className="py-10">
          <p className="text-2xl md:text-4xl pb-20 font-thin tracking-widest text-right">
            Neem de eerste stap, wij <br />maken graag kennis <br />met je.
          </p>
        </div>

        {/* Contact header */}
        <h1 className="text-[35px] lg:text-[40px] pb-10 lg:pb-10 uppercase font-bold tracking-widest text-center md:text-right">
          Contact formulier
        </h1>

        <div className="flex flex-col lg:flex-row w-full">
          {/* Visite kaartje section */}
          <div className="lg:w-1/3 flex justify-center items-center order-last lg:order-first tracking-wider pt-10 lg:pt-0 hover:scale-105 duration-300">
            <p className="p-5 rounded-xl shadow-lg">
              Evi@schutzorgondersteuning
              <br /><br />
              <span className="font-bold">KVK</span> 87730278 <br />
              <span className="font-bold">SKJ</span> 100016128
            </p>
          </div>

          {/* Verzendformulier section */}
          <div className="order-first lg:order-last flex flex-col lg:w-2/3 pb-10 lg:pb-5 rounded-xl shadow-lg bg-secondary p-5 py-5">
            <form action="https://getform.io/f/19890081-7383-4319-832f-c7a6294b1408" method="POST" className="flex flex-col lg:flex-row gap-y-4 p-2">
              
              {/* Left side inputs */}
              <div className="flex flex-col lg:w-1/2 gap-y-4">
                <input className="outline-none border-b border-b-brown h-[60px] bg-transparent font-light w-full pl-3 placeholder:text-black text-black tracking-widest" type="text" name="name" placeholder="Naam" required />
                <input className="outline-none border-b border-b-brown h-[60px] bg-transparent font-light w-full pl-3 placeholder:text-black text-black tracking-widest" type="email" name="email" placeholder="E-mailadres" required />
                <input className="outline-none border-b border-b-brown h-[60px] bg-transparent font-light w-full pl-3 placeholder:text-black text-black tracking-widest" type="text" name="subject" placeholder="Onderwerp" required />
              </div>

              {/* Right side textarea */}
              <div className="lg:w-1/2 flex flex-col">
                <textarea
                  className="min-h-[136px] outline-none border-b border-b-brown bg-transparent font-light w-full pl-3 text-black placeholder:text-black tracking-widest lg:pb-[0px]"
                  name="message"
                  placeholder="Typ hier uw bericht ..."
                  required
                />
                <button type="submit" className="py-2 px-4 h-[35px] w-[120px] bg-[#f1f1f1] mx-auto mt-5 flex justify-center items-center hover:bg-white text-gray-800 font-semibold border border-gray-600 rounded-xl shadow focus:outline focus:ring-2 focus:ring-black">
                  Verzend
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* VOLGENDE PAGINA */}
    <section className="w-screen">
      <div className="w-full p-10 lg:p-20">
        <h1 className="text-[30px] lg:text-[80px] uppercase font-bold text-left tracking-widest">volgende <br /><span className="text-secondary">pagina</span></h1>
        <div className="flex flex-row justify-start items-center pt-5">
          <FaArrowLeft className="text-secondary pr-1"/>
          <Link to="/#toppage" className="flex items-center justify-center uppercase font-bold tracking-wider">
            Homepage
          </Link>
        </div>
      </div>
    </section>
  </section>
  );
};

export default Contact;
