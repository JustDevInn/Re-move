import React from "react";
const home = () => {
  return (
  <section className="max-h-screen overflow-none">
  {/* banner */}
    <div className="flex justify-evenly items-center px-20 pt-20">
        <div className="h-[350px] w-[350px] bg-removeweb bg-center bg-contain bg-no-repeat"></div>
        <div>
            <h1 className="uppercase font-bold text-[32px]">Under <br></br>construction.</h1>
        </div>
    </div>

    {/* information */}
<div className="h-full w-full my-10">
    <div className="flex justify-center items-center flex-col font-primary font-medium">
        <h5 className="text-xl tracking-wide pb-8">Neem contact met ons op via een van de onderstaande opties.</h5>
    <div className="flex justify-evenly items-center font-thin flex-row w-full px-40">
        <div className="flex justify-start items-center flex-col">
            <h4 className="text-xl tracking-widest uppercase pb-2">Email</h4>
            <p className="text-sm font-light tracking-wide"><a href="mailto:evi@schutzorgondersteuning.nl">evi@schutzorgondersteuning.nl</a></p>
        </div>
        <div className="flex justify-start items-center flex-col">
            <h4 className="text-xl tracking-widest uppercase pb-2">Telefoon</h4>
            <p className="text-sm font-light tracking-wide">0615138681</p>
        </div>
        <div className="flex justify-start items-center flex-col">
            <h4 className="text-xl tracking-widest uppercase pb-2">Social</h4>
            <a
            href="https://www.instagram.com/re_move_coaching"
            rel="noreferrer"
            target="_blank"
            className="text-sm font-light tracking-wide"
            >
            @re_move_coaching</a>
        </div>
    </div>
    </div>
</div>

     {/* footer */}
     <footer className="w-screen flex justify-start items-center px-20 text-xs">
        <div className="flex flex-col">
            <h5 className="pb-1">Re-move coaching</h5>
            <p>010101001</p>
        </div>
    </footer>;
  </section>
  );
};

export default home;
