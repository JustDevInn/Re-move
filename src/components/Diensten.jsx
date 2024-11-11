import React from "react";
import { FaArrowRight } from "react-icons/fa";
// linking
import { Link } from 'react-router-dom';

const Diensten = () => {
  return (
    <section id="toppage">
      {/* HERO */}
      <section className="relative w-screen h-[85vh] bg-voorwaarden2 bg-cover bg-center flex justify-center items-center">
        {/* text */}
        <div className="absolute bottom-10 left-5 text-white p-5">
          <h1 className="text-[50px] lg:text-[120px] font-bold uppercase leading-none">
            Ons aanbod
          </h1>
        </div>

        {/* transparent overlay to darken image for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </section>

      {/* Wat bieden wij */}
      <section className="w-screen">
        {/* Card container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 lg:p-20">
          
          {/* Card 1*/}
          <div className="flex flex-col lg:flex-row justify-evenly p-5 rounded-xl shadow-lg bg-secondary hover:scale-105 duration-300">
            {/* left side */}
            <div className="flex flex-col text-center p-2 justify-center items-center w-full">
              <h1 className="uppercase font-bold text-3xl p-2">coachings- sessies <br />individueel</h1>
              <h5 className="uppercase text-sm">(Frequentie en duur is maatwerk)</h5>
              <p className="font-thin text-xs py-2 text-start w-4/5">
                - Duur sessie 1 uur <br />
                - Conform de thema’s <br />
                - Gebruik van materiaal inbegrepen in prijs <br />
                - Eindproduct = Emotieplan
              </p>
            </div>
            {/* right side */}
            <div className="p-2 flex flex-col justify-center items-center gap-4">
              <div className="w-full text-center">
                <h1 className="font-bold text-l">€80 excl.</h1>
              </div>
              <Link to="/contact#contactinformation" className="bg-[#f1f1f1] cursor-pointer hover:bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-600 rounded-xl shadow">
                Informatie
              </Link>
            </div>
          </div>

          {/* Card 2*/}
          <div className="flex flex-col lg:flex-row justify-evenly p-5 rounded-xl shadow-lg bg-secondary hover:scale-105 duration-300">
            {/* left side */}
            <div className="flex flex-col text-center p-2 justify-center items-center w-full">
              <h1 className="uppercase font-bold text-3xl p-2">Workshop / <br />Clinics voor groepen</h1>
              <p className="font-thin text-xs py-2 text-start w-4/5">
                - Offerte op aanvraag <br />
                - Duur / groepsgrootte in overleg <br />
                - Ook beschikbaar voor volwassenen <br />
                - Interessant voor teambuilding <br />
                - Interessant voor mensen die werken met kinderen/ volwassenen
              </p>
            </div>
            {/* right side */}
            <div className="p-2 flex flex-col justify-center items-center gap-4">
              <div className="w-full text-center">
                <h1 className="font-bold text-l">Prijs in overleg</h1>
              </div>
              <Link to="/contact#contactinformation" className="bg-[#f1f1f1] cursor-pointer hover:bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-600 rounded-xl shadow">
                Informatie
              </Link>
            </div>
          </div>

          {/* Card 3*/}
          <div className="flex flex-col lg:flex-row justify-evenly p-5 rounded-xl shadow-lg bg-secondary hover:scale-105 duration-300">
            {/* left side */}
            <div className="flex flex-col text-center p-2 justify-center items-center w-full">
              <h1 className="uppercase font-bold text-3xl p-2">Ouder- kind <br />interactie</h1>
              <p className="font-thin text-xs py-2 text-start w-4/5">
                - Frequentie en duur is maatwerk <br />
                - Zowel ouder-kind als gezinsmogelijkheden <br />
                - Gebruik van materiaal in prijs inbegrepen
              </p>
            </div>
            {/* right side */}
            <div className="p-2 flex flex-col justify-center items-center gap-4">
              <div className="w-full text-center">
                <h1 className="font-bold text-l">€100 excl.</h1>
              </div>
              <Link to="/contact#contactinformation" className="bg-[#f1f1f1] cursor-pointer hover:bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-600 rounded-xl shadow">
                Informatie
              </Link>
            </div>
          </div>

          {/* Card 4*/}
          <div className="flex flex-col lg:flex-row justify-evenly p-5 rounded-xl shadow-xl shadow-gray-300 bg-secondary hover:scale-105 duration-300">
            {/* left side */}
            <div className="flex flex-col text-center p-2 justify-center items-center w-full">
              <h1 className="uppercase font-bold text-3xl p-2">Hulp bij kind in <br />scheiding</h1>
              <p className="font-thin text-xs py-2 text-start w-4/5">
                - Duur sessie 1 uur <br />
                - Gebruik van materiaal inbegrepen in prijs <br />
                - Eindproduct = Ouder/kind plan
              </p>
            </div>
            {/* right side */}
            <div className="p-2 flex flex-col justify-center items-center gap-4">
              <div className="w-full text-center">
                <h1 className="font-bold text-l">€80 excl.</h1>
              </div>
              <Link to="/contact#contactinformation" className="bg-[#f1f1f1] cursor-pointer hover:bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-600 rounded-xl shadow">
                Informatie
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="bg-voorwaarden h-[80vh] w-full bg-cover bg-center"></div>
      </section>

      {/* VOLGENDE PAGINA */}
      <section className="w-screen">
        <div className="w-full p-10 lg:p-20">
          <h1 className="text-[30px] lg:text-[80px] uppercase font-bold text-right tracking-widest">
            Volgende <br />
            <span className="text-secondary">Pagina</span>
          </h1>
          <div className="flex flex-row justify-end items-center pt-5">
            <Link to="/voorwaarden#toppage" className="flex items-center justify-center text-right uppercase font-bold tracking-wider">
              Voorwaarden
            </Link>
            <FaArrowRight className="text-secondary"/>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Diensten;
