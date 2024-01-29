import React from "react";

const Contact = () => {
  return (
  <section>
{/* HERO */}
<section className="w-screen px-10 lg:px-20 flex flex-col md:flex-row justify-evenly items-center tracking-widest">
  {/* text */}
    <div className="text-[50px] lg:text-[120px] font-bold uppercase pt-20 lg:pt-0">contact</div>
  {/* image */}
    <div className="w-[400px] h-[556px] bg-removecouple bg-center bg-contain bg-no-repeat"></div>
</section>

{/* Contact form */}
<section className="w-screen">
  <div className="flex flex-col p-10 lg:p-20">
    <div>
      <h1 className="text-[35px] lg:text-[50px] pb-20 uppercase font-bold tracking-widest text-right">
        Neem de eerste stap, wij <br />maken graag kennis <br />met je.
      </h1>
    </div>


    {/* form section*/}
    <div className="flex flex-col lg:flex-row">
    {/* contact gegevens */}
    <div className="flex justify-center items-center order-last lg:order-first lg:w-1/2 tracking-wider pt-10 lg:pt-0">
      <p className="p-5 rounded-xl shadow-lg">
      Evi@schutzorgondersteuning <br />
      06 15 13 86 81 <br />
      <br />
      <span className="font-bold">KVK</span> 87730278 <br />
      <span className="font-bold">SKJ</span> 100016128
      </p>
    </div>

    {/* verzend formulier */}
    <div className="order-first lg:order last flex flex-col lg:w-2/5 pb-10 lg:pb-5
    rounded-xl shadow-lg bg-secondary p-5 py-10">
      <h1 className="text-[35px] lg:text-[40px] pb-20 lg:pb-10 uppercase font-bold tracking-widest text-center">
        Contract <br />formulier
      </h1>
       {/* form */}
       <form
            action="https://getform.io/f/19890081-7383-4319-832f-c7a6294b1408"
            method="POST"
            className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
            <input
              className="outline=none border-b
              border-b-brown h-[60px] bg-transparent
               font-light w-full pl-3
               placeholder:text-black text-black tracking-widest"
              type="text"
              name="name"
              placeholder='Naam'/>
            <input
               className="outline=none border-b
              border-b-brown h-[60px] bg-transparent
               font-light w-full pl-3
               placeholder:text-black text-black tracking-widest"
              type="text"
              name="email"
              placeholder='Email address'
              required
              />
            </div>
            <input
            className="outline=none border-b
              border-b-brown h-[60px] bg-transparent
               font-light w-full pl-3
               placeholder:text-black text-black tracking-widest"
              type="text"
              name="subject"
              placeholder='Onderwerp'
              required
              />
            <textarea
            className="outline=none border-b
              border-b-brown h-[100px] bg-transparent
               font-light w-full pl-3 text-black
               placeholder:text-black tracking-widest"
              type="text"
              name="message"
              placeholder='Typ hier uw bericht ...'
              required
              />
              <button
              type="submit" className='
              py-2 px-4  h-[35px] w-[120px] bg-[#f1f1f1] mx-auto my-5 flex justify-center items-center
              hover:bg-white text-gray-800 font-semibold border border-gray-600 rounded-xl shadow
              '>
                Verzend
              </button>
          </form>
    </div>
    </div>
  </div>
</section>
  </section>
  );
};

export default Contact;
