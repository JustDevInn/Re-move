import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const Diensten = () => {
  return (
  <section>
        {/* HERO */}
<section className="w-screen px-10 lg:px-20 flex flex-col md:flex-row justify-center items-center tracking-widest">
  {/* text */}
    <div className="text-[50px] lg:text-[120px] font-bold uppercase pt-20 lg:pt-0">Diensten</div>
  {/* image */}
    <div className="w-[400px] h-[556px] bg-removecouple bg-center bg-contain bg-no-repeat"></div>
</section>

{/* Wat bieden wij */}
<section className="w-screen py-10">
<div className="px-10 lg:px-20">
  <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest py-10">Wat bieden wij</h1>
<div className="">
<div className="flex flex-row py-1 gap-2">
  <FaCheck />
    <p>Coachingssessies individueel (frequentie en duur is maatwerk)</p>
</div>
<div className="flex flex-row py-1 gap-2">
  <FaCheck />
    <p>Workshop / Clinics voor groepen</p>
</div>
<div className="flex flex-row py-1 gap-2">
  <FaCheck />
    <p>Ouder-kind interactie</p>
</div>
<div className="flex flex-row py-1 gap-2">
  <FaCheck />
    <p>Hulp bij kind in scheiding</p>
</div>
</div>
<p>
<br /><br />
Prijzen zijn excl.<br />
Coachingssessie - €80 excl.<br />
Workshop / clinics - prijs in overleg<br />
Ouder-kind Interactie - €100
  </p>
</div>
</section>

{/* VOLGENDE PAGINA */}
<section className="w-screen">
    <div className="w-full px-10 lg:px-20">
        <h1 className="text-[30px] lg:text-[80px] uppercase font-bold text-right tracking-widest">volgende <br /><span className="text-secondary">pagina</span></h1>
        <div className="flex flex-row justify-end items-center pt-5">
        <p className="flex items-center justify-center text-right uppercase font-bold tracking-wider">Voorwaarden </p>
        <FaArrowRight className="text-secondary"/>
        </div>
    </div>
</section>
  </section>
  );
};

export default Diensten;
