import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Informatie = () => {
  return (
    <section id="toppage">
      {/* Hero section */}
      <section className="relative w-screen h-[85vh] bg-voorwaarden4 bg-cover bg-center flex justify-center items-center">
        <div className="absolute bottom-10 left-5 text-white p-5 max-w-[90%]">
          <h1 className="text-[8vw] md:text-[50px] lg:text-[120px] font-bold uppercase leading-none">
            Informatie
          </h1>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" aria-hidden="true"></div>
      </section>

      {/* Information Section */}
      <section className="w-full py-20 px-6 md:px-10 lg:px-20">
        {/* oprichters kaart */}
        <div className="flex flex-col lg:flex-row lg:min-h-[80vh] w-full">
          {/* Oprichters */}
          <div className="lg:w-1/2 w-full shadow-xl bg-secondary p-5 rounded-t-xl lg:rounded-t-none lg:rounded-tl-xl lg:rounded-bl-xl">
            <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest pb-5 text-center">oprichters</h1>
            <div className="pl-2 tracking-widest">
              <p>
                <span className="font-bold uppercase">- Rein van Bedaf</span><br />
                <span className="text-xs">muziektherapeut/bokstrainer.</span>
                <br /><br />
                <span className="font-bold uppercase">- Evi Schut</span><br />
                <span className="text-xs">sociaal pedagogisch hulpverlener / teamleider in de GGZ.</span>
              </p>
            </div>
            <div className="py-10 pl-2 text-xs tracking-widest text-justify">
              Boksen is voor ons beide een fijne uitlaatklep na een drukke werkweek, emotionele inspanning of momenten van somberheid. 
              Als bokstrainer heeft Rein gezien dat dit het zelfbeeld versterkte van de mensen die hij trainde. Mensen komen erachter dat 
              ze meer kunnen dan ze dachten. Als oud-wedstrijd bokser heeft Rein ervaren dat er op deze momenten niemand was behalve 
              hijzelf waarop teruggevallen kon worden. Zelfredzaamheid, kracht en doorzettingsvermogen waren belangrijke levenslessen die 
              het boksen hem geleerd hebben.
              <br /><br />
              Als sociaal pedagogisch hulpverlener en schoolmaatschappelijk werker zag Evi dat praten niet altijd voldoende was. De 
              kinderen en jongeren waarmee zij werkte vonden het lastig woorden te vinden voor hetgeen wat zij voelde. Door dingen visueel 
              te maken leerde deze kinderen/jongeren zichzelf beter verwoorden en dus kennen. Ook veel goede gesprekken vonden plaats 
              tijdens een wandeling, sportactiviteit of een spelletje. Zelf heeft Evi ervaren dat boksen haar kracht gaf waar ze dacht die kwijt te zijn.
              <br /><br />
              Samen zagen Rein en Evi een gezamenlijke passie hierin: Boksen en coachen van mensen!
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 min-h-[80vh] bg-couple bg-cover bg-center rounded-b-xl lg:rounded-b-none lg:rounded-tr-xl lg:rounded-br-xl" role="img" aria-label="Image of the founders of Re-Move Coaching"></div>
        </div>

        {/* Programma & Doelgroep */}
        <div className="py-10 md:mt-20 flex flex-col lg:flex-row rounded-xl px-6 md:px-10 lg:px-20">
          <div className="lg:w-1/2">
            <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest text-center md:text-start">programma</h1>
          </div>
          <div className="lg:w-1/2 text-justify py-5 lg:py-0 tracking-widest">
            <p>
              Het programma helpt kinderen en jongeren van 8 tot 21 jaar die hun sociaal-emotionele vaardigheden willen verbeteren en op 
              zoek zijn naar persoonlijke groei en ontwikkeling.
              <br /><br />
              Dit programma helpt kinderen en jongeren van 8 tot 21 jaar die hun sociaal-emotionele vaardigheden willen verbeteren en op 
              zoek zijn naar persoonlijke groei en ontwikkeling. We combineren de fysieke voordelen van boksen met de kracht van 
              emotionele begeleiding voor een holistische ontwikkelingservaring.
              <br /><br />
              Onze doelgroep omvat kinderen en jongvolwassenen van 8 t/m 21 jaar die geïnteresseerd zijn in het verbeteren van hun sociaal-
              emotionele vaardigheden en op zoek zijn naar persoonlijke groei en ontwikkeling.
            </p>
          </div>
        </div>
      </section>

      {/* Ons Coaching Traject */}
      <section className="w-screen">
        <div className="flex flex-col rounded-xl p-10 lg:p-20">
          <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest text-center">Ons coaching traject</h1>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:px-10 py-5">
              <p className="tracking-widest text-justify">
                Ons coachingsprogramma combineert bokstraining met emotionele coachingsessies door middel van sport en spel. Deelnemers 
                leren bokstechnieken en werken tegelijkertijd aan het begrijpen en beheersen van hun emoties, het verminderen van stress en 
                het verbeteren van hun sociale vaardigheden. Het doel is om deelnemers op een leuke en actieve manier te helpen hun emoties 
                te voelen en te leren uiten. De volgende vier punten zijn hierin belangrijk:
              </p>
            </div>
            {/* Holisme Kaart */}
            <div className="lg:w-1/2 lg:p-10 py-10 p-1 rounded-b-lg shadow-lg tracking-widest text-justify">
              <p>
                <span className="font-bold uppercase text-start">Holisme</span>: <br />We kijken naar de ontwikkeling als één geheel, waarbij fysieke en emotionele aspecten 
                samenkomen.<br /><br />
                <span className="font-bold uppercase text-start">Leren door ervaring</span>: <br />Deelnemers leren door te doen. Zo wordt het makkelijker om emotionele 
                vaardigheden in het dagelijks leven toe te passen.<br /><br />
                <span className="font-bold uppercase text-start">Professionele coaching</span>: <br />Onze coaches zijn gespecialiseerd in zowel boksen als het bieden van emotionele 
                begeleiding. Dit zorgt voor unieke kennis en vaardigheden om iedere deelnemer op de beste manier te kunnen helpen.<br /><br />
                <span className="font-bold uppercase text-start">Persoonlijke aanpak</span>: <br />We stemmen het programma af op wat elke deelnemer nodig heeft, gericht op hun 
                eigen ontwikkeling en met aandacht voor persoonlijke groei.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-grenzenherkennen h-[80vh] w-full bg-cover bg-center" role="img" aria-label="Background image representing boundaries"></div>
      </section>

      {/* Next Page Link */}
      <section className="w-screen">
        <div className="w-full p-10 lg:p-20">
          <h1 className="text-[30px] lg:text-[80px] uppercase font-bold text-right tracking-widest">
            Volgende <br />
            <span className="text-secondary">Pagina</span>
          </h1>
          <div className="flex flex-row justify-end items-center pt-5">
            <Link to="/diensten#toppage" className="flex items-center justify-center text-right uppercase font-bold tracking-wider focus:outline focus:ring-2 focus:ring-secondary">
              Diensten
            </Link>
            <FaArrowRight className="text-secondary" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Informatie;
