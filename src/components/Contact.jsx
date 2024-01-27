import React from "react";

const Contact = () => {
  return (
  <section>
{/* HERO */}
<section className="w-screen px-10 lg:px-20 flex flex-col md:flex-row justify-center items-center tracking-widest">
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
    <div className="flex justify-center items-center order-last lg:order-first lg:w-1/2 tracking-wider">
      <p>
      Evi@schutzorgondersteuning <br />
      06 15 13 86 81 <br />
      <br />
      <span className="font-bold">KVK</span> 87730278 <br />
      <span className="font-bold">SKJ</span> 100016128
      </p>
    </div>

    {/* verzend formulier */}
    <div className="order-first lg:order last flex flex-col lg:w-1/2 pb-20 lg:pb-0">
      <h1 className="text-[35px] lg:text-[50px] pb-20 lg:pb-0 uppercase font-bold tracking-widest text-center lg:text-left">
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
               placeholder:text-brown text-black"
              type="text"
              name="name"
              placeholder='Naam'/>
            <input
               className="outline=none border-b
              border-b-brown h-[60px] bg-transparent
               font-light w-full pl-3
               placeholder:text-brown text-black"
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
               placeholder:text-brown text-black"
              type="text"
              name="subject"
              placeholder='Onderwerp'
              required
              />
            <textarea
            className="outline=none border-b
              border-b-brown h-[150px] bg-transparent
               font-light w-full pl-3 text-black
               placeholder:text-brown "
              type="text"
              name="message"
              placeholder='Typ hier uw bericht ...'
              required
              />
              <button
              type="submit" className='
              py-[5px] px-[5px] h-[35px] w-[120px] flex items-center justify-center uppercase font-bold border-solid border-2 border-black tracking-widest bg-[#F1F1F1] text-black
              mt-[30px] mx-auto
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
