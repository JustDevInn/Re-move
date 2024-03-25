import React from "react";
import { FaArrowRight } from "react-icons/fa";
// linking
import { Link } from 'react-router-dom';

const Informatie = () => {
  return (
    <section id="toppage">
    {/* HERO */}
<section className="w-screen px-10 lg:px-20 flex flex-col md:flex-row justify-evenly items-center tracking-widest">
  {/* text */}
    <div className="text-[50px] lg:text-[120px] font-bold uppercase pt-20 lg:pt-0">Informatie</div>
  {/* image */}
    <div className="w-[400px] h-[556px] bg-removecouple bg-center bg-contain bg-no-repeat"></div>
</section>

{/* INFORMATION*/}
<section className="w-screen py-20">
  <div className="px-10 lg:px-20">
  {/* oprichters */}
    <div className="lg:w-1/2 rounded-xl shadow-xl bg-secondary p-5">
      <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest pb-5">oprichters</h1>
      <div className="pl-2 tracking-widest">
      <p>
<span className="font-bold uppercase">- Rein van Bedaf</span> <br /><span className="text-xs">muziektherapeut/bokstrainer.</span>
<br />
<br />
<span className="font-bold uppercase">- Evi Schut</span> <br /> <span className="text-xs">sociaal pedagogisch hulpverlener / teamleider in de GGZ.</span>
      </p>
      </div>
      <div className="py-10 pl-2 text-xs tracking-widest">
      Boksen is voor ons beide een fijne uitlaatklep na een drukke werkweek, emotionele inspanning of momenten van somberheid. Als bokstrainer heeft Rein gezien dat dit het zelfbeeld versterkte van de mensen die hij trainde. Mensen komen erachter dat ze meer kunnen dan ze dachten. Als oud-wedstrijd bokser heeft Rein ervaren dat er op deze momenten was niemand was behalve hijzelf waarop teruggevallen kon worden. Zelfredzaamheid, kracht en doorzettingsvermogen waren belangrijke levenslessen die het boksen hem geleerd hebben. 
<br /><br />
Als sociaal pedagogisch hulpverlener en schoolmaatschappelijk werker zag Evi dat praten niet altijd voldoende was. De kinderen en jongeren waarmee zij werkte vonden het lastig woorden te vinden voor hetgeen wat zij voelde. Door dingen visueel te maken leerde deze kinderen/jongeren zichzelf beter verwoorden en dus kennen. Ook veel goede gesprekken vonden plaats tijdens een wandeling, sportactiviteit of een spelletje. Zelf heeft Evi ervaren dat boksen haar kracht gaf waar ze dacht die kwijt te zijn. 
<br /><br />
Samen zagen Rein en Evi een gezamenlijke passie hierin: Boksen en coachen van mensen! 
      </div>
    </div>

  {/* container programma en doelroep */}
    <div className="py-10 flex justify-center items-start flex-col lg:flex-row
    p-5 rounded-xl shadow-lg">
      {/* programma */}
      <div className="lg:w-1/2">
      <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest pb-10">programma</h1>
      <p className="tracking-widest">Dit programma helpt kinderen en jongeren van 8 tot 21 jaar die hun sociaal-emotionele vaardigheden willen verbeteren en op zoek zijn naar persoonlijke groei en ontwikkeling. We combineren de fysieke voordelen van boksen met de kracht van emotionele begeleiding voor een holistische ontwikkelingservaring.</p>
      </div>
      {/* doelgroep */}
      <div className="lg:w-1/2 text-right py-5 lg:py-0">
        <p className="order-last lg:order-first tracking-widest">Onze doelgroep omvat kinderen en jongvolwassenen van 8 t/m 21 jaar die geïnteresseerd zijn in het verbeteren van hun sociaal-emotionele vaardigheden en op zoek zijn naar persoonlijke groei en ontwikkeling.</p>
      </div>
    </div>
  </div>

  {/* ONS COACHING TRAJECT */}
  <section className="w-screen p-10 lg:p-20">
    <div className="flex flex-col rounded-xl shadow-lg p-5">
    <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest text-center pb-10">Ons coaching traject</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:px-10 pb-10">
          <p className="tracking-widest">
          Ons coachingsprogramma combineert bokstraining met emotionele coachingsessies door middel van sport en spel. Deelnemers leren bokstechnieken en werken tegelijkertijd aan het begrijpen en beheersen van hun emoties, het verminderen van stress en het verbeteren van hun sociale vaardigheden. Het doel is om deelnemers op een leuke en actieve manier te helpen hun emoties te voelen en te leren uiten. De volgende vier punten zijn hierin belangrijk:
          </p>
        </div>
        <div className="lg:w-1/2 lg:p-10 py-10 p-5
        rounded-xl shadow-lg bg-secondary tracking-widest">
          <p>
              <span className="font-bold uppercase">Holisme</span>: we kijken naar de ontwikkeling als één geheel, waarbij fysieke en emotionele aspecten samenkomen.<br /><br />
              <span className="font-bold uppercase">Leren door ervaring</span>: deelnemers leren door te doen. Zo wordt het makkelijker om emotionele vaardigheden in het dagelijks leven toe te passen.
<br /><br />
              <span className="font-bold uppercase">Professionele coaching</span>: onze coaches zijn gespecialiseerd in zowel boksen als het bieden van emotionele begeleiding. Dit zorgt voor unieke kennis en vaardigheden om iedere deelnemer op de beste manier te kunnen helpen.
<br /><br />
              <span className="font-bold uppercase">Persoonlijk aanpak</span>: we stemmen het programma af op wat elke deelnemer nodig heeft, gericht op hun eigen ontwikkeling en met aandacht voor persoonlijke groei.

              </p>
        </div>
      </div>
    </div>
  </section>
</section>
{/* VOLGENDE PAGINA */}
<section className="w-screen">
    <div className="w-full p-10 lg:p-20">
        <h1 className="text-[30px] lg:text-[80px] uppercase font-bold text-right tracking-widest">volgende <br /><span className="text-secondary">pagina</span></h1>
        <div className="flex flex-row justify-end items-center pt-5">
        <Link to="/diensten#toppage" className="flex items-center justify-center text-right uppercase font-bold tracking-wider">
        Diensten
        </Link>
        <FaArrowRight className="text-secondary"/>
        </div>
    </div>
</section>
</section>
    )
};

export default Informatie;
