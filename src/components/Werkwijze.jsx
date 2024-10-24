import React from "react";
import { FaArrowRight } from "react-icons/fa";
// linking
import { Link } from 'react-router-dom';

const Werkwijze = () => {
  return (
  <section id="toppage">
  {/* HERO */}

{/* Onderdelen */}
  <div className="p-10 lg:p-20">
    <div className="flex flex-col justify-center items-center gap-5">
    <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest">onze werkwijze</h1>

    {/* onderdeel 1 */}
  <div className="flex flex-col lg:flex-row rounded-xl shadow-xl hover:scale-105 bg-secondary duration-300">
    {/* logo */}
    <div className="flex justify-center items-center lg:w-1/4 p-5">
      <div className=" w-[200px] h-[200px] bg-kennismaken bg-center bg-cover rounded-xl bg-no-repeat"></div>
    </div>
    {/* text */}
    <div className=" p-5 lg:p-10 flex justify-center items-center">
      <div className="lg:px-10 xl:px-20 flex justify-center items-start flex-col tracking-widest">
        <h1 className="py-2 font-bold">Kennismaken</h1>
        <p className="text-sm pl-1">Re-Move Coaching werkt door middel van sessies met verschillende thema’s. Tijdens de kennismaking hebben we het over jouw vraag en leren we elkaar kort kennen. Al snel gaan we over op het boksen! Je leert de basistechnieken en we komen samen in beweging. Vooraf kunnen we afspraken maken over de frequentie van de sessies, het tijdstip en het gebruik van de ruimtes. De trainingsruimte kan qua licht en geluid worden aangepast aan jouw voorkeuren! 

        </p>
      </div>
    </div>
  </div>

   {/* onderdeel 2 */}
   <div className="flex flex-col lg:flex-row rounded-xl shadow-xl hover:scale-105 duration-300">
    {/* logo */}
    <div className="flex justify-center items-center lg:w-1/4 p-5">
      <div className=" w-[200px] h-[200px] bg-boksen bg-center bg-cover rounded-xl bg-no-repeat"></div>
    </div>
    {/* text */}
    <div className=" p-5 lg:p-10 flex justify-center items-center">
      <div className="lg:px-10 xl:px-20 flex justify-center items-start flex-col tracking-widest">
        <h1 className="py-2 font-bold">Boksen</h1>
        <p className="text-sm pl-1">We coachen door middel van boks-technieken. In de kennismaking of eerste sessie leren we je de basis van het boksen. In de volgende sessies komen deze basistechnieken terug maar breiden wij die ook uit met alles wat bij boksen komt kijken. Stevige houding, ademhalingstechnieken, concentratie, leiden en volgen, reageren en anticiperen. 
        </p>
      </div>
    </div>
  </div>

{/* onderdeel 3 */}
<div className="flex flex-col lg:flex-row rounded-xl shadow-xl hover:scale-105 bg-secondary duration-300">
    {/* logo */}
    <div className="flex justify-center items-center lg:w-1/4 p-5">
      <div className=" w-[200px] h-[200px] bg-emotiegevoel bg-center bg-cover rounded-xl bg-no-repeat"></div>
    </div>
    {/* text */}
    <div className=" p-5 lg:p-10 flex justify-center items-center">
      <div className="lg:px-10 xl:px-20 flex justify-center items-start flex-col tracking-widest">
        <h1 className="py-2 font-bold">Emoties/Gevoelens</h1>
        <p className="text-sm pl-1">Er bestaan veel verschillende emoties en gevoelens waar we mee kunnen werken. Ken en herken jij ze allemaal? Vind je ze prettig of soms lastig? En hoe laat jij ze zien? Door sport en spel gaan we samen op ontdekkingstocht. Tijdens de sessies is er ruimte om situaties met elkaar te bespreken en stil te staan bij wat dit met je doet of heeft gedaan. Door dit samen visueel te maken krijg je meer grip op je gevoelens en gedachten en kan je ze beter leren te begrijpen. Wij maken gebruik van verschillende hulpmiddelen zoals: ‘Teken je gesprek’, Helpende gedachten kaartjes, emotie-kaartjes en een emotie plan. 
        </p>
      </div>
    </div>
  </div>

  {/* onderdeel 4 */}
  <div className="flex flex-col lg:flex-row rounded-xl shadow-xl hover:scale-105 duration-300">
    {/* logo */}
    <div className="flex justify-center items-center lg:w-1/4 p-5">
      <div className=" w-[200px] h-[200px] bg-grenzenherkennen bg-center bg-cover rounded-xl bg-no-repeat"></div>
    </div>
    {/* text */}
    <div className=" p-5 lg:p-10 flex justify-center items-center">
      <div className="lg:px-10 xl:px-20 flex justify-center items-start flex-col tracking-widest">
        <h1 className="py-2 font-bold">Grenzen (her)kennen</h1>
        <p className="text-sm pl-1">Iedereen kent de zin: STOP, HOU OP! Maar gebruikt iedereen die zin wel? En is het echt een goede manier om je grenzen aan te geven? Wij helpen je een manier te vinden om je grenzen duidelijk te maken. Maar eerst gaan we ontdekken waar jouw grenzen liggen. Dit doen we zowel in gesprek als tijdens het boksen. 
        </p>
      </div>
    </div>
  </div>

  {/* onderdeel 5 */}
  <div className="flex flex-col lg:flex-row rounded-xl shadow-xl hover:scale-105 bg-secondary duration-300">
    {/* logo */}
    <div className="flex justify-center items-center lg:w-1/4 p-5">
      <div className=" w-[200px] h-[200px] bg-gedrag bg-center bg-cover rounded-xl bg-no-repeat"></div>
    </div>
    {/* text */}
    <div className=" p-5 lg:p-10 flex justify-center items-center">
      <div className="lg:px-10 xl:px-20 flex justify-center items-start flex-col tracking-widest">
        <h1 className="py-2 font-bold">Gedrag</h1>
        <p className="text-sm pl-1">Nu je je emoties en gevoelens kent, je grenzen weet en hoe je ze kunt aangeven, gaan we oefenen om jezelf nog beter te begrijpen. Hoe merken anderen dat je boos, verdrietig of juist heel blij bent? Of hoe kan je je gedrag aanpassen zodat een situatie niet meer vervelend verloopt? Daarnaast is herhaling erg belangrijk tijdens onze sessies en zul je hierdoor nieuwe gedragingen eigen gaan maken. Wij willen dat je trots mag en kan zijn op jezelf en sluiten dus elke sessie af met eind oefening waarbij het gevoel van trots centraal staat. 
        </p>
      </div>
    </div>
  </div>

  {/* onderdeel 6 */}
  <div className="flex flex-col lg:flex-row rounded-xl shadow-xl hover:scale-105 duration-300">
    {/* logo */}
    <div className="flex justify-center items-center lg:w-1/4 p-5">
      <div className=" w-[200px] h-[200px] bg-evaluatie bg-center bg-cover rounded-xl bg-no-repeat"></div>
    </div>
    {/* text */}
    <div className=" p-5 lg:p-10 flex justify-center items-center">
      <div className="lg:px-10 xl:px-20 flex justify-center items-start flex-col tracking-widest">
        <h1 className="py-2 font-bold">Evaluatie / Einde?</h1>
        <p className="text-sm pl-1">Je bent er bijna! We gaan alles wat je hebt geleerd of nog wilt leren samen doornemen. Ook maken we een Emotie plan dat je thuis, op school of bij je sportclub kunt gebruiken. Dit plan bespreken we met je ouders/verzorgers, en kijken we samen terug op de sessies en wat je geleerd hebt! 
        </p>
      </div>
    </div>
  </div>

    </div>
  </div>

  {/* text area 7 */}
<section className="w-screen">
    <div className="w-full p-10 lg:p-20">
        <h1 className="text-[30px] lg:text-[80px] uppercase font-bold text-right tracking-widest">volgende <br /><span className="text-secondary">pagina</span></h1>
        <div className="flex flex-row justify-end items-center pt-5">
        <Link to="/informatie#toppage" className="flex items-center justify-center text-right uppercase font-bold tracking-wider">
        Informatie
        </Link>
        <FaArrowRight className="text-secondary"/>
        </div>
    </div>
</section>
  </section>
  );
};

export default Werkwijze;
