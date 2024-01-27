import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Voorwaarden = () => {
  return (
  <section>
        {/* HERO */}
<section className="w-screen px-10 lg:px-20 flex flex-col md:flex-row justify-center items-center tracking-widest">
  {/* text */}
    <div className="text-[50px] lg:text-[120px] font-bold uppercase pt-20 lg:pt-0">Voorwaar<br/>den</div>
  {/* image */}
    <div className="w-[400px] h-[556px] bg-removecouple bg-center bg-contain bg-no-repeat"></div>
</section>

{/* ALG VOORWAARDEN */}
<section className="w-screen">
  <div className="p-10 lg:p-20">
    <h1 className="text-[35px] lg:text-[50px] pb-20 uppercase font-bold tracking-widest text-center">algemene voorwaarden</h1>
    {/* Art 1 */}
    <div>
      <h1 className="underline">Artikel 1. Definities</h1>
      <p>
        In deze algemene voorwaarden wordt verstaan onder:
        <br /><br />
        - Opdrachtnemer: RE-MOVE coaching die deze algemene voorwaarden gebruikt voor het aanbieden van diensten; <br />
        - Opdrachtgever: de wederpartij van opdrachtnemer, zijnde personen en of organisaties die een dienst afnemen van RE-MOVE coaching <br />
        - Overeenkomst: een contract tussen opdrachtgever en RE-MOVE coaching betreffende een overeengekomen dienstverlening als individuele coaching, advies, een training, workshop, lezing of andere dienst.
        <br /><br />
      </p>
    </div>
        {/* Art 2 */}
      <div>
      <h1 className="underline">Artikel 2. Toepasselijkheid van deze voorwaarden</h1>
      <br />
      <p>
      - Deze voorwaarden gelden voor iedere aanbieding en iedere overeenkomst tussen RE-MOVE coaching en opdrachtgever waarop RE-MOVE coaching deze voorwaarden van toepassing heeft verklaard, voor zover van deze voorwaarden niet door partijen uitdrukkelijk en schriftelijk is afgewezen; <br />
      - De onderhavige voorwaarden zijn eveneens van toepassing op alle overeenkomsten met RE-MOVE coaching voor de uitvoering waarvan derder dienen te worden betrokken; <br />
      - Onrechtmatig bezwarende algemene voorwaarden van opdrachtgever worden nadrukkelijkniet erkend en worden afgewezen.
      <br /><br />
      </p>
    </div>
        {/* Art 3 */}
        <div>
      <h1 className="underline">Artikel 3. Offertes en prijzen</h1>
      <br />
      <p>
      - De door RE-MOVE coaching gemaakte offertes en prijzen zijn vrijblijvend. RE-MOVE coaching begoudt zich het recht offertes en prijzen te wijzigen indien zij dit noodzakelijk acht; <br />
      - De prijzen in de genoemde offertes zijn exclusief BTW. Sommige diensten zijn btw-vrijgesteld. Dit wordt in de offerte aangegeven.<br />
      - Offertes zijn gebasseerd op de bij RE-MOVE coaching beschikbare informatie.
      <br /><br />
      </p>
    </div>
      {/* Art 4 */}
      <div>
      <h1 className="underline">Artikel 4. Uitvoering van de overeenkomst</h1>
      <br />
      <p>
      - RE-MOVE coaching zal de overeenkomst naar beste inzicht, vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren;<br />
      - Indien en voor zover een goede uitvoering van de overeenkomst dit vereist, heeft RE-MOVE coaching het recht bepaalde wekzaamheden te laten verrichten door derden;<br />
      - Re-MOVE coaching is niet aansprakelijk voor schade, van welke aard ook, doordat RE-MOVE coaching is uit gegevaan van door de opdrachtfever verstrekte onjuiste 
      <br /><br />
      </p>
    </div>
  </div>
</section>

{/* VOLGENDE PAGINA */}
<section className="w-screen">
    <div className="w-full px-10 lg:px-20">
        <h1 className="text-[30px] lg:text-[80px] uppercase font-bold text-right tracking-widest">volgende <br /><span className="text-secondary">pagina</span></h1>
        <div className="flex flex-row justify-end items-center pt-5">
        <p className="flex items-center justify-center text-right uppercase font-bold tracking-wider">Contact</p>
        <FaArrowRight className="text-secondary"/>
        </div>
    </div>
</section>
  </section>
  );
};

export default Voorwaarden;
