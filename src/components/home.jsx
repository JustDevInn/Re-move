import React from "react";
import { FaArrowRight } from "react-icons/fa";
// linking
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <section id="toppage" className="w-screen">
  {/* Hero section*/}
<div className="px-10 lg:px-20 flex flex-col md:flex-row justify-center items-center tracking-widest">
  {/* text */}
    <div className="text-[80px] lg:text-[120px] font-bold uppercase">Vind je <br /><span className="text-secondary">eigen</span><br /> <span className="text-[90px] lg:text-[150px]">kracht</span></div>
  {/* image */}
    <div className="w-[400px] h-[556px] bg-removecouple bg-center bg-contain bg-no-repeat"></div>
</div>


{/* text area 1*/}
<section className="w-screen p-10 lg:px-20 flex">
    <div className="tracking-wider w-full p-5 rounded-xl shadow-lg">
        <h5 className="text-xl text-end">
        Wil je je zelfvertrouwen vergroten en je zelfbeeld verbeteren, of leren hoe je emoties kunt verwerken en uiten, zonder dat je er altijd over hoeft te praten? Houd je van actief bezig zijn en ben je tussen de 8 en 21 jaar oud? Dan is RE-MOVE Coaching iets voor jou!

        </h5>
    </div>
</section>


{/* text area 2 */}
<section className="w-screen p-10 lg:p-20bg-red-200">
  <div className="flex flex-col justify-evenly lg:flex-row ">
    {/* text */}
    <div className="lg:w-1/2">
      <h5 className="text-xl tracking-widest">
        Geholpen worden bij het vergroten van je <span className="text-secondary">zelfvertrouwen</span>, je zelfbeeld verbeteren of hulp bij het verwerken en uiten van <span className="text-secondary">emoties</span>?
        <br /><br />
        Maar niet altijd de behoefte om hierover te praten of kan je niet altijd de juiste woorden vinden?
        <br /><br />
        Vind je het fijn om in beweging te zijn?
        En ben jij tussen de 8 en 21 jaar?
        <br /><br />
        Dan past RE-MOVE coaching bij jou!
      </h5>
    </div>
    {/* image on large screens */}
    <div className="hidden lg:block bg-removelogo bg-center bg-contain bg-no-repeat h-[550px] w-[450px]"></div>
  </div>
</section>


{/* text area 3 */}
<section className="w-screen">
<div className="flex flex-col p-10 lg:p-20">
    {/* text */}
    <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest pb-10 text-center
    hover:scale-105 duration-300 rounded-xl shadow-xl">
    Ervaring waar je op kan <span className="text-secondary">vertrouwen.</span>
    </h1>
    </div>
</section>


{/* text area 4 */}
<section className="w-screen">
<div className="flex flex-col px-10 lg:px-20">
    {/* text */}
        <h5 className="text-xl
        tracking-widest text-justify">
        Sporten is geweldig voor je mentale gezondheid. Het maakt endorfine aan, vermindert stress, traint je brein, verbetert je concentratie, helpt je omgaan met tegenslagen en verhoogt je zelfvertrouwen. Het is ook een manier om emoties te verkennen en hiermee te oefenen.

        </h5>
        <h1 className="py-5
        text-[20px] lg:text-[50px]
        font-bold uppercase tracking-widest text-justify text-secondary">
        "Boksen is meer
        dan een sport"
        </h1>
        <p className="tracking-widest text-xl">
            Het is ook een geweldige manier om <span className="font-bold">sterker</span> in je schoenen te staan, met je <span className="text-secondary">emoties</span> om te gaan,
            en belangrijke <span className="font-bold">levensvaardigheden</span> te <span className="font-bold">leren</span>.
            Dus trek die bokshandschoenen aan en ontdek de <span className="font-bold">kracht</span> in <span className="text-secondary">jezelf</span>!
        </p>
    </div>
</section>


{/* text area 5 */}
<section className="w-screen">
    <div className="p-10 lg:p-20 flex flex-col justify-center items-center">
        <div>
        </div>
        {/* images */}
        <div className="flex flex-row gap-5">
            <div className="
            bg-removelogo bg-center bg-contain bg-no-repeat
            h-[150px] w-[150px]">
            </div>
            <div className="hidden lg:block
            bg-removelogo bg-center bg-contain bg-no-repeat
            h-[150px] w-[150px]">
            </div>
            <div className="hidden lg:block
            bg-removelogo bg-center bg-contain bg-no-repeat
            h-[150px] w-[150px]">
            </div>
            <div className="hidden lg:block
            bg-removelogo bg-center bg-contain bg-no-repeat
            h-[150px] w-[150px]">
            </div>
            <div className="hidden lg:block
            bg-removelogo bg-center bg-contain bg-no-repeat
            h-[150px] w-[150px]">
            </div>
        </div>
    </div>
</section>


{/* text area 7 */}
<section className="w-screen">
    <div className="w-full p-10 lg:p-20">
        <h1 className="text-[30px] lg:text-[80px] uppercase font-bold text-right tracking-widest">volgende <br /><span className="text-secondary">pagina</span></h1>
        <div className="flex flex-row justify-end items-center pt-5">
        <Link to="/werkwijze#toppage" className="flex items-center justify-center text-right uppercase font-bold tracking-wider">
        Werkwijze
        </Link>
        <FaArrowRight className="text-secondary"/>
        </div>
    </div>
</section>


  </section>
  );
};

export default Home;
