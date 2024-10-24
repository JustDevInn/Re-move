import React from "react";
import { FaArrowRight } from "react-icons/fa";
// linking
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <section id="toppage" className="w-screen ">
{/* Hero section */}
<section className="relative w-screen h-[85vh] bg-removecouple bg-cover bg-center flex justify-center items-center">
  {/* text */}
  <div className="absolute bottom-10 left-5 text-white p-5">
    <h1 className="text-[80px] lg:text-[120px] font-bold uppercase leading-none">
      Vind je <br />
      <span className="text-secondary">eigen</span><br />
      <span className="text-[90px] lg:text-[150px]">kracht</span>
    </h1>
  </div>
  
  {/* transparent overlay to darken image for better text visibility */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
  
  {/* background image */}
  <div className="w-full h-full bg-removecouple bg-cover bg-center" role="img" aria-label="Therapist couple"></div>
</section>




      {/* Text Area 1 */}
      <section className="w-screen py-20">
        <div className="px-10 lg:px-20">
          <div className="lg:w-1/2 rounded-xl shadow-xl bg-secondary/20 p-5">
            <h5 className="text-xl tracking-widest leading-relaxed">
              Wil je je zelfvertrouwen vergroten en je zelfbeeld verbeteren, of leren hoe je emoties kunt verwerken en uiten, zonder dat je er altijd over hoeft te praten? Houd je van actief bezig zijn en ben je tussen de 8 en 21 jaar oud? Dan is RE-MOVE Coaching iets voor jou!
            </h5>
          </div>
        </div>
      </section>

      {/* Text Area 2 */}
      <section className="w-screen py-20 bg-gray-100">
        <div className="px-10 lg:px-20 flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 space-y-6">
            <h5 className="text-xl tracking-widest leading-relaxed">
              Geholpen worden bij het vergroten van je <span className="text-secondary">zelfvertrouwen</span>, je zelfbeeld verbeteren of hulp bij het verwerken en uiten van <span className="text-secondary">emoties</span>? Vind je het fijn om in beweging te zijn?
            </h5>
          </div>
          {/* Image Section */}
          <div className="w-full lg:w-[450px] lg:h-[550px] bg-removelogo bg-center bg-contain bg-no-repeat"></div>
        </div>
      </section>

      {/* Text Area 3 */}
      <section className="w-screen py-20 bg-white">
        <div className="px-10 lg:px-20 text-center">
          <h1 className="text-[35px] lg:text-[50px] uppercase font-bold tracking-widest bg-gray-50 py-5 rounded-xl shadow-lg">
            Ervaring waar je op kan <span className="text-secondary">vertrouwen.</span>
          </h1>
        </div>
      </section>

      {/* Text Area 4 */}
      <section className="w-screen py-10 bg-gray-50">
        <div className="px-10 lg:px-20 text-center space-y-6">
          <h5 className="text-xl tracking-widest leading-relaxed">
            Sporten is geweldig voor je mentale gezondheid. Het maakt endorfine aan, vermindert stress, traint je brein, verbetert je concentratie...
          </h5>
          <h1 className="text-[30px] lg:text-[50px] font-bold uppercase tracking-widest text-secondary">
            "Boksen is meer dan een sport"
          </h1>
          <p className="text-xl leading-relaxed">
            Het is ook een geweldige manier om <span className="font-bold">sterker</span> in je schoenen te staan, met je <span className="text-secondary">emoties</span> om te gaan, en belangrijke <span className="font-bold">levensvaardigheden</span> te <span className="font-bold">leren</span>.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-screen py-10">
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="h-[150px] w-[150px] bg-removelogo bg-center bg-contain bg-no-repeat"></div>
            <div className="h-[150px] w-[150px] bg-removelogo bg-center bg-contain bg-no-repeat"></div>
          </div>
        </div>
      </section>

      {/* Next Page Link */}
      <section className="w-screen">
        <div className="w-full p-10 lg:p-20">
          <h1 className="text-[30px] lg:text-[80px] uppercase font-bold text-right tracking-widest">
            Volgende <br />
            <span className="text-secondary">Pagina</span>
          </h1>
          <div className="flex flex-row justify-end items-center pt-5">
            <Link to="/werkwijze#toppage" className="flex items-center justify-center text-right uppercase font-bold tracking-wider">
              Werkwijze
            </Link>
            <FaArrowRight className="text-secondary" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
