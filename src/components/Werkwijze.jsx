import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Werkwijze = () => {
  return (
    <section id="toppage">
      {/* HERO Section */}
      <div className="p-10 lg:px-20">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest">Onze Werkwijze</h1>

          {/* Section 1 */}
          <div className="flex flex-col lg:flex-row lg:h-[50vh] w-full lg:justify-between rounded-xl shadow-xl bg-secondary">
            <div className="overflow-hidden w-full lg:w-1/2 h-[50vh] lg:h-auto">
              <div className="bg-kennismaken bg-center bg-cover bg-no-repeat w-full h-full hover:scale-110 transition-all duration-500"></div>
            </div>
            <div className="p-5 lg:p-10 flex justify-center items-center lg:w-1/2">
              <div className="tracking-widest">
                <h1 className="py-2 font-bold">Kennismaken</h1>
                <p className="text-sm">Re-Move Coaching werkt door middel van sessies met verschillende thema’s, elk gericht op het bevorderen van persoonlijke groei en ontwikkeling.</p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col lg:flex-row-reverse lg:h-[50vh] w-full lg:justify-between rounded-xl shadow-xl">
            <div className="overflow-hidden w-full lg:w-1/2 h-[50vh] lg:h-auto">
              <div className="bg-boksen bg-center bg-cover bg-no-repeat w-full h-full transition-transform duration-300 hover:scale-105"></div>
            </div>
            <div className="p-5 lg:p-10 flex justify-center items-center lg:w-1/2">
              <div className="tracking-widest">
                <h1 className="py-2 font-bold">Boksen</h1>
                <p className="text-sm">We coachen door middel van boks-technieken die zelfvertrouwen en fysieke kracht bevorderen.</p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col lg:flex-row lg:h-[50vh] w-full lg:justify-between rounded-xl shadow-xl bg-secondary">
            <div className="overflow-hidden w-full lg:w-1/2 h-[50vh] lg:h-auto">
              <div className="bg-emotiegevoel bg-center bg-cover bg-no-repeat w-full h-full transition-transform duration-300 hover:scale-105"></div>
            </div>
            <div className="p-5 lg:p-10 flex justify-center items-center lg:w-1/2">
              <div className="tracking-widest">
                <h1 className="py-2 font-bold">Emoties/Gevoelens</h1>
                <p className="text-sm">Er bestaan veel verschillende emoties en gevoelens waarmee we kunnen werken om veerkracht en emotionele beheersing te ontwikkelen.</p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col lg:flex-row-reverse lg:h-[50vh] w-full lg:justify-between rounded-xl shadow-xl">
            <div className="overflow-hidden w-full lg:w-1/2 h-[50vh] lg:h-auto">
              <div className="bg-grenzenherkennen bg-center bg-cover bg-no-repeat w-full h-full transition-transform duration-300 hover:scale-105"></div>
            </div>
            <div className="p-5 lg:p-10 flex justify-center items-center lg:w-1/2">
              <div className="tracking-widest">
                <h1 className="py-2 font-bold">Grenzen (her)kennen</h1>
                <p className="text-sm">Iedereen kent de zin: STOP, HOU OP! Deze module richt zich op het herkennen en respecteren van persoonlijke grenzen.</p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col lg:flex-row lg:h-[50vh] w-full lg:justify-between rounded-xl shadow-xl bg-secondary">
            <div className="overflow-hidden w-full lg:w-1/2 h-[50vh] lg:h-auto">
              <div className="bg-gedrag bg-center bg-cover bg-no-repeat w-full h-full transition-transform duration-300 hover:scale-105"></div>
            </div>
            <div className="p-5 lg:p-10 flex justify-center items-center lg:w-1/2">
              <div className="tracking-widest">
                <h1 className="py-2 font-bold">Gedrag</h1>
                <p className="text-sm">Nu je je emoties en gevoelens kent en je grenzen weet, werken we aan gedragsontwikkeling en zelfdiscipline.</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col lg:flex-row-reverse lg:h-[50vh] w-full lg:justify-between rounded-xl shadow-xl">
            <div className="overflow-hidden w-full lg:w-1/2 h-[50vh] lg:h-auto">
              <div className="bg-evaluatie bg-center bg-cover bg-no-repeat w-full h-full transition-transform duration-300 hover:scale-105"></div>
            </div>
            <div className="p-5 lg:p-10 flex justify-center items-center lg:w-1/2">
              <div className="tracking-widest">
                <h1 className="py-2 font-bold">Evaluatie / Einde?</h1>
                <p className="text-sm">Je bent er bijna! We gaan alles wat je hebt geleerd of nog wilt leren samen doornemen en evalueren.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Next Page Link */}
      <section className="w-full">
        <div className="w-full p-10 lg:p-20">
          <h1 className="text-[30px] lg:text-[80px] uppercase font-bold text-right tracking-widest">
            Volgende <br />
            <span className="text-secondary">Pagina</span>
          </h1>
          <div className="flex flex-row justify-end items-center pt-5">
            <Link to="/informatie#toppage" className="flex items-center justify-center text-right uppercase font-bold tracking-wider">
              Informatie
            </Link>
            <FaArrowRight className="text-secondary" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Werkwijze;
