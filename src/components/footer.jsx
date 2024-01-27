import React from "react";

const footer = () => {
  return (
  <footer className="w-screen">
  <div className="w-full flex flex-col justify-center
  items-center md:px-20 px-10 font-primary font-medium">
{/* logo */}
    <div className="bg-removeLangweb h-[150px] md:h-[200px] w-full bg-center bg-contain bg-no-repeat"></div>
{/* text */}
    <div className="w-full flex justify-center items-center py-10 text-center">
      <h5 className="text-xl tracking-wide font-light pb-8">Neem contact met ons op via een van de volgende opties.</h5>
    </div>
{/* contact gegevens */}
    <div className="w-full flex justify-evenly items-center font-thin flex-col md:flex-row md:px-20">

        <div className="flex justify-start items-center flex-col pb-5">
            <h4 className="text-xl tracking-widest uppercase pb-3 text-secondary">Email</h4>
            <p className="text-sm font-light tracking-wide"><a href="mailto:evi@schutzorgondersteuning.nl">evi@schutzorgondersteuning.nl</a></p>
        </div>
        <div className="flex justify-center items-center flex-col pb-5">
            <h4 className="text-xl tracking-widest uppercase pb-3 text-secondary">Telefoon</h4>
            <p className="text-sm font-light tracking-wide">0615138681</p>
        </div>
        <div className="flex justify-start items-center flex-col pb-5">
            <h4 className="text-xl tracking-widest uppercase pb-3 text-secondary">Social</h4>
            <a
            href="https://www.instagram.com/re_move_coaching"
            rel="noreferrer"
            target="_blank"
            className="text-sm text-black font-light tracking-wide"
            >
            @re_move_coaching</a>
        </div>
    </div>
</div>

{/* kvk nummer */}
  <section className="flex w-screen justify-evenly md:justify-start items-center px-20 pb-1 pt-10 text-xs">
        <div className="flex flex-row md:flex-col tracking-widest">
            <h5 className="md:pb-1 px-2 md:px-0"><span className="text-secondary">KVK</span> 87730278</h5>
            <p className="px-2 md:px-0"><span className="text-secondary">SKJ</span>100016128</p>
        </div>
  </section>
  </footer>
  );
};

export default footer;
