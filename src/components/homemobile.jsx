import React from "react";

const homemobile = () => {
    return (
  <section className="px-10">
  {/* Navbar */}
    <div className="flex justify-center items-center py-[50px]">
        <div>
            <h1 className="uppercase font-primary font-regular text-[32px]">RE-MOVE COACHING</h1>
        </div>
    </div>
    {/* banner */}
    <section className="w-full flex justify-center items-center flex-col">
        <div className="h-[300px] w-[300px] bg-removelogo bg-center bg-contain bg-no-repeat"></div>
        <div className="mt-20">
            <h1 className="uppercase font-bold text-[32px]">Under <br></br>construction.</h1>
        </div>
    </section>

    {/* information */}
<div className="h-full w-full my-20">
    <div className="flex justify-center items-center flex-col font-primary font-medium text-center">
        <h5 className="text-md tracking-wide pb-8">Neem contact met ons op via een van de onderstaande opties.</h5>
    <div className="flex justify-evenly items-center flex-row w-full px-40">
        <div className="flex justify-start items-center flex-col">
            <h4 className="text-lg tracking-widest uppercase pb-2">Telefoon</h4>
            <p className="text-[10px] font-light">0615138681</p>
        </div>
        <div className="flex justify-start items-center flex-col">
            <h4 className="text-lg tracking-widest uppercase pb-2">Email</h4>
            <p className="text-[10px] font-light px-2"><a href="mailto:evi@schutzorgondersteuning.nl">evi@schutzorgondersteuning.nl</a></p>
        </div>
        <div className="flex justify-start items-center flex-col">
            <h4 className="text-lg tracking-widest uppercase pb-2">Social</h4>
            <a
            href="https://www.instagram.com/re_move_coaching"
            rel="noreferrer"
            target="_blank"
            className="text-[10px] font-light"
            >
            @re_move_coaching
            </a>
        </div>
    </div>
    </div>
</div>

     {/* footer */}
     <footer className="flex justify-center items-center text-[8px] mt-5">
        <div className="flex flex-row">
            <h5 className="px-1">Re-move coaching</h5>
            <p>010101001</p>
        </div>
    </footer>
  </section>
  );
};

export default homemobile;

