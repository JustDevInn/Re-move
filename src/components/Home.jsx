import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="toppage" className="w-full">
{/* Hero Section */}
<section
  className="relative w-full h-[85vh] bg-removecouple bg-cover bg-center flex justify-center items-center"
  style={{ backgroundPosition: '50% 30%' }}
  aria-label="Therapist couple in background image"
>
  <div className="absolute bottom-10 left-5 text-white p-5 max-w-[90%]">
    <h1 className="text-[15vw] md:text-[70px] lg:text-[100px] font-bold uppercase leading-none">
      Vind je <br />
      <span className="text-secondary">eigen</span><br />
      <span className="text-[20vw] md:text-[90px] lg:text-[120px]">kracht</span>
    </h1>
  </div>
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" aria-hidden="true"></div>
</section>


      {/* Section 1 */}
      <section className="w-full py-10 md:py-20">
        <div className="px-5 md:px-10 lg:px-20">
          <div className=" text-justify max-w-[90%] lg:w-2/3 mx-auto space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              Geholpen worden bij het vergroten van je <span className="font-bold">zelfvertrouwen</span>, je zelfbeeld verbeteren, leren hoe je emoties kunt verwerken en uiten op een voor jou fijne manier, zonder dat je er altijd over hoeft te praten? Houd je van actief bezig zijn en ben je tussen de 8 en 21 jaar oud? Dan is RE-MOVE Coaching iets voor jou!
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <div className="bg-emotiegevoel h-[60vh] md:h-[80vh] w-full bg-cover bg-center" role="img" aria-label="Emotion feeling related background image"></div>

      {/* Section 2: Experience Statement */}
      <section className="w-full py-10 md:py-20 flex justify-center items-center">
        <div className="px-5 md:px-10 lg:px-20 text-center max-w-[90%] ">
          <h1 className="text-[8vw] md:text-[35px] lg:text-[50px] font-bold uppercase py-5">
            <span className="text-secondary">Ervaring</span> waar je op kan vertrouwen.
          </h1>
        </div>
      </section>

      {/* Section 2 Image Section */}
      <div className="bg-boksen h-[60vh] md:h-[80vh] w-full bg-cover bg-center" role="img" aria-label="Boxing related background image"></div>

      {/* Section 3 */}
      <section className="flex justify-center w-full py-10 bg-gray-50">
        <div className="px-5 md:px-10 lg:px-20 text-justify space-y-6 max-w-[90%] lg:w-2/3">
          <p className="text-lg md:text-xl leading-relaxed">
            Sporten is geweldig voor je mentale gezondheid. Het maakt endorfine aan, vermindert stress, traint je brein en verbetert je concentratie!
          </p>
          <h1 className="text-[6vw] md:text-[30px] lg:text-[50px] font-bold text-center uppercase tracking-widest text-secondary">
            "Boksen is meer dan een sport"
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Het is ook een geweldige manier om <span className="font-bold">sterker</span> in je schoenen te staan, met je <span className="text-secondary">emoties</span> om te gaan, en belangrijke <span className="font-bold">levensvaardigheden</span> te <span className="font-bold">leren</span>.
          </p>
        </div>
      </section>

      {/* Evaluation Image Section */}
      <div className="bg-evaluatie h-[60vh] md:h-[80vh] w-full bg-cover bg-center" role="img" aria-label="Evaluation related background image"></div>

      {/* Next Page Link */}
      <section className="w-full">
        <div className="w-full p-5 md:p-10 lg:p-20">
          <h1 className="text-[8vw] md:text-[30px] lg:text-[80px] uppercase font-bold text-right tracking-widest">
            Volgende <br />
            <span className="text-secondary">Pagina</span>
          </h1>
          <div className="flex flex-row justify-end items-center pt-5">
            <Link
              to="/werkwijze#toppage"
              className="flex items-center justify-center text-right uppercase font-bold tracking-wider focus:outline focus:ring-2 focus:ring-secondary"
            >
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
