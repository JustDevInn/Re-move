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
              <div className="bg-kennismaken bg-center bg-cover bg-no-repeat w-full h-full hover:scale-110 transition-all duration-500" role="img" aria-label="visualisatie van kennismaking"></div>
            </div>
            <div className="p-5 lg:p-10 flex justify-center items-center lg:w-1/2">
              <div className="tracking-widest">
                <h1 className="py-2 font-bold">Kennismaken</h1>
                <p className="text-sm text-justify">Re-Move Coaching werkt door middel van sessies met verschillende thema’s. Tijdens de kennismaking hebben we het over jouw vraag en leren we elkaar kort kennen. Al snel gaan we over op het boksen! Je leert de basistechnieken en we komen samen in beweging. Vooraf kunnen we afspraken maken over de frequentie van de sessies, het tijdstip en het gebruik van de ruimtes. De trainingsruimte kan qua licht en geluid worden aangepast aan jouw voorkeuren! </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col lg:flex-row-reverse lg:h-[50vh] w-full lg:justify-between rounded-xl shadow-xl">
            <div className="overflow-hidden w-full lg:w-1/2 h-[50vh] lg:h-auto">
              <div className="bg-boksen bg-center bg-cover bg-no-repeat w-full h-full transition-transform duration-300 hover:scale-105" role="img" aria-label="visualisatie van boksen"></div>
            </div>
            <div className="p-5 lg:p-10 flex justify-center items-center lg:w-1/2">
              <div className="tracking-widest">
                <h1 className="py-2 font-bold">Boksen</h1>
                <p className="text-sm text-justify">We coachen door middel van boks-technieken. In de kennismaking of eerste sessie leren we je de basis van het boksen. In de volgende sessies komen deze basistechnieken terug maar breiden wij die ook uit met alles wat bij boksen komt kijken. Stevige houding, ademhalingstechnieken, concentratie, leiden en volgen, reageren en anticiperen. </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col lg:flex-row lg:h-[50vh] w-full lg:justify-between rounded-xl shadow-xl bg-secondary">
            <div className="overflow-hidden w-full lg:w-1/2 h-[50vh] lg:h-auto">
              <div className="bg-emotiegevoel bg-center bg-cover bg-no-repeat w-full h-full transition-transform duration-300 hover:scale-105" role="img" aria-label="visualisatie van gevoelens"></div>
            </div>
            <div className="p-5 lg:p-10 flex justify-center items-center lg:w-1/2">
              <div className="tracking-widest">
                <h1 className="py-2 font-bold">Emoties/Gevoelens</h1>
                <p className="text-sm text-justify">Er bestaan veel verschillende emoties en gevoelens waar we mee kunnen werken. Ken en herken jij ze allemaal? Vind je ze prettig of soms lastig? En hoe laat jij ze zien? Door sport en spel gaan we samen op ontdekkingstocht. Tijdens de sessies is er ruimte om situaties met elkaar te bespreken en stil te staan bij wat dit met je doet of heeft gedaan. Door dit samen visueel te maken krijg je meer grip op je gevoelens en gedachten en kan je ze beter leren te begrijpen. Wij maken gebruik van verschillende hulpmiddelen zoals: ‘Teken je gesprek’, Helpende gedachten kaartjes, emotie-kaartjes en een emotie plan. </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col lg:flex-row-reverse lg:h-[50vh] w-full lg:justify-between rounded-xl shadow-xl">
            <div className="overflow-hidden w-full lg:w-1/2 h-[50vh] lg:h-auto">
              <div className="bg-grenzenherkennen bg-center bg-cover bg-no-repeat w-full h-full transition-transform duration-300 hover:scale-105" role="img" aria-label="visualisatie van grenzen herkennen"></div>
            </div>
            <div className="p-5 lg:p-10 flex justify-center items-center lg:w-1/2">
              <div className="tracking-widest">
                <h1 className="py-2 font-bold">Grenzen (her)kennen</h1>
                <p className="text-sm text-justify">Iedereen kent de zin: STOP, HOU OP! Maar gebruikt iedereen die zin wel? En is het echt een goede manier om je grenzen aan te geven? Wij helpen je een manier te vinden om je grenzen duidelijk te maken. Maar eerst gaan we ontdekken waar jouw grenzen liggen. Dit doen we zowel in gesprek als tijdens het boksen. </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col lg:flex-row lg:h-[50vh] w-full lg:justify-between rounded-xl shadow-xl bg-secondary">
            <div className="overflow-hidden w-full lg:w-1/2 h-[50vh] lg:h-auto">
              <div className="bg-gedrag bg-center bg-cover bg-no-repeat w-full h-full transition-transform duration-300 hover:scale-105" role="img" aria-label="visualisatie van gedrag"></div>
            </div>
            <div className="p-5 lg:p-10 flex justify-center items-center lg:w-1/2">
              <div className="tracking-widest">
                <h1 className="py-2 font-bold">Gedrag</h1>
                <p className="text-sm text-justify">Nu je je emoties en gevoelens kent, je grenzen weet en hoe je ze kunt aangeven, gaan we oefenen om jezelf nog beter te begrijpen. Hoe merken anderen dat je boos, verdrietig of juist heel blij bent? Of hoe kan je je gedrag aanpassen zodat een situatie niet meer vervelend verloopt? Daarnaast is herhaling erg belangrijk tijdens onze sessies en zul je hierdoor nieuwe gedragingen eigen gaan maken. Wij willen dat je trots mag en kan zijn op jezelf en sluiten dus elke sessie af met eind oefening waarbij het gevoel van trots centraal staat. </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="flex flex-col lg:flex-row-reverse lg:h-[50vh] w-full lg:justify-between rounded-xl shadow-xl">
            <div className="overflow-hidden w-full lg:w-1/2 h-[50vh] lg:h-auto">
              <div className="bg-evaluatie bg-center bg-cover bg-no-repeat w-full h-full transition-transform duration-300 hover:scale-105" role="img" aria-label="visualisatie van evaluatie"></div>
            </div>
            <div className="p-5 lg:p-10 flex justify-center items-center lg:w-1/2">
              <div className="tracking-widest">
                <h1 className="py-2 font-bold">Evaluatie / Einde?</h1>
                <p className="text-sm text-justify">Je bent er bijna! We gaan alles wat je hebt geleerd of nog wilt leren samen doornemen. Ook maken we een Emotie plan dat je thuis, op school of bij je sportclub kunt gebruiken. Dit plan bespreken we met je ouders/verzorgers, en kijken we samen terug op de sessies en wat je geleerd hebt! </p>
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
            <Link
              to="/informatie#toppage"
              className="flex items-center justify-center text-right uppercase font-bold tracking-wider focus:outline focus:ring-2 focus:ring-secondary"
            >
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
