import React from "react";
import { FaArrowRight } from "react-icons/fa";
// linking
import { Link } from 'react-router-dom';

const Voorwaarden = () => {
  return (
  <section id="toppage">
{/* Hero section */}
<section className="relative max-w-full h-[85vh] bg-beschermtool2 bg-cover bg-center flex justify-center items-center">
  {/* text */}
  <div className="absolute bottom-5 left-0 sm:left-10 text-white p-2 sm:p-5">
    <h1 className="text-[50px] lg:text-[120px] font-bold uppercase leading-none">
      Voorwaarden
    </h1>
  </div>

  {/* transparent overlay to darken image for better text visibility */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

  {/* background image */}
  <div className="w-full h-full bg-beschermtool2 bg-cover bg-center"
  style={{ backgroundPosition: 'center bottom 30%' }}
  role="img" aria-label="Therapist couple"></div>
</section>


{/* ALG VOORWAARDEN */}
<section className="w-screen">
  <div className="p-10 lg:p-20 tracking-widest">
    <h1 className="text-[35px] lg:text-[50px] pb-20 uppercase font-bold tracking-widest text-center">algemene voorwaarden</h1>
    {/* Art 1 */}
    <div className="rounded-xl shadow-xl p-5 my-2">
      <h1 className="underline font-bold text-xl uppercase">Artikel 1. Definities</h1>
      <p className="font-light text-justify p-3">
        In deze algemene voorwaarden wordt verstaan onder:
        <br /><br />
        - Opdrachtnemer: RE-MOVE coaching die deze algemene voorwaarden gebruikt voor het aanbieden van diensten; <br />
        - Opdrachtgever: de wederpartij van opdrachtnemer, zijnde personen en of organisaties die een dienst afnemen van RE-MOVE coaching <br />
        - Overeenkomst: een contract tussen opdrachtgever en RE-MOVE coaching betreffende een overeengekomen dienstverlening als individuele coaching, advies, een training, workshop, lezing of andere dienst.
        <br /><br />
      </p>
    </div>
        {/* Art 2 */}
      <div className="rounded-xl shadow-xl bg-secondary p-5 my-2">
      <h1 className="underline font-bold text-xl uppercase">Artikel 2. Toepasselijkheid van deze voorwaarden</h1>
      <br />
      <p className="font-light text-justify p-3">
      - Deze voorwaarden gelden voor iedere aanbieding en iedere overeenkomst tussen RE-MOVE coaching en opdrachtgever waarop RE-MOVE coaching deze voorwaarden van toepassing heeft verklaard, voor zover van deze voorwaarden niet door partijen uitdrukkelijk en schriftelijk is afgewezen; <br />
      - De onderhavige voorwaarden zijn eveneens van toepassing op alle overeenkomsten met RE-MOVE coaching voor de uitvoering waarvan derder dienen te worden betrokken; <br />
      - Onrechtmatig bezwarende algemene voorwaarden van opdrachtgever worden nadrukkelijkniet erkend en worden afgewezen.
      <br /><br />
      </p>
    </div>
        {/* Art 3 */}
        <div className="rounded-xl shadow-xl p-5 my-2">
      <h1 className="underline font-bold text-xl uppercase">Artikel 3. Offertes en prijzen</h1>
      <br />
      <p className="font-light text-justify p-3">
      - De door RE-MOVE coaching gemaakte offertes en prijzen zijn vrijblijvend. RE-MOVE coaching begoudt zich het recht offertes en prijzen te wijzigen indien zij dit noodzakelijk acht; <br />
      - De prijzen in de genoemde offertes zijn exclusief BTW. Sommige diensten zijn btw-vrijgesteld. Dit wordt in de offerte aangegeven.<br />
      - Offertes zijn gebasseerd op de bij RE-MOVE coaching beschikbare informatie.
      <br /><br />
      </p>
    </div>
      {/* Art 4 */}
      <div className="rounded-xl shadow-xl bg-secondary p-5 my-2">
      <h1 className="underline font-bold text-xl uppercase">Artikel 4. Uitvoering van de overeenkomst</h1>
      <br />
      <p className="font-light text-justify p-3">
      - RE-MOVE coaching zal de overeenkomst naar beste inzicht, vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren;<br />
      - Indien en voor zover een goede uitvoering van de overeenkomst dit vereist, heeft RE-MOVE coaching het recht bepaalde wekzaamheden te laten verrichten door derden;<br />
      - Re-MOVE coaching is niet aansprakelijk voor schade, van welke aard ook, doordat RE-MOVE coaching is uit gegevaan van door de opdrachtfever verstrekte onjuiste en/of onvolledige gegevens, tenzij deze onjuistheid of onvolledigheid voor haar kenbaar behoorde te zijn.

      <br /><br />
      </p>
    </div>
     {/* Art 5 */}
     <div className="rounded-xl shadow-xl p-5 my-2">
      <h1 className="underline font-bold text-xl uppercase">Artikel 5. Contractduur; uitvoeringstermijn</h1>
      <br />
      <p className="font-light text-justify p-3">
      - De overeenkomst tussen RE-MOVE coaching en opdrachtgever wordt aangegaan voor onbepaalde tijd tenzij partijen uitdrukkelijk en schriftelijk anders overeenkomen;<br />
      - Indien wijziging of aanvulling op de overeenkomst financiële consequenties heeft, zal RE-MOVE coaching de opdrachtgever hierover tevoren inlichten.<br />
      <br /><br />
      </p>
    </div>
         {/* Art 6 */}
         <div className="rounded-xl shadow-xl p-5 my-2 bg-secondary">
      <h1 className="underline font-bold text-xl uppercase">Artikel 6. Geheimhouding</h1>
      <br />
      <p className="font-light text-justify p-3">
      - Alle partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van hun overeenkomsten van elkaar of uit andere bron hebben verkregen. Informatie geldt als vertrouwelijk als dit door elke partij is medegedeeld of als dit voortvloeit uit de aard van de informatie of als door de deelnemers redelijkerwijs kan worden aangenomen dat het vertrouwelijke informatie betreft.
      <br /><br />
      </p>
    </div>
         {/* Art 7 */}
         <div className="rounded-xl shadow-xl p-5 my-2">
      <h1 className="underline font-bold text-xl uppercase">Artikel 7. Opzegging</h1>
      <br />
      <p className="font-light text-justify p-3">
      - Beide partijen kunnen te allen tijde de overeenkomst mondeling of schriftelijk opzeggen;<br />
      - Indien door opzegging van opdrachtgever kosten voortvloeien doordat RE-MOVE coaching haar verplichtingen jegens deelnemers niet of niet afdoende kan nakomen, worden die kosten verhaald voor rekening van opdrachtgever.<br />
      <br /><br />
      </p>
    </div>
             {/* Art 8 */}
             <div className="rounded-xl shadow-xl p-5 my-2 bg-secondary">
      <h1 className="underline font-bold text-xl uppercase">Artikel 8. Gebreken, klachtentermijn</h1>
      <br />
      <p className="font-light text-justify p-3">
      - Klachten over de verrichte werkzaamheden dienen door de opdrachtgever binnen 8 dagen na ontdekking, doch uiterlijk 14 dagen na voltooiing van de betreffende werkzaamheden schriftelijk te worden gemeld aan RE-MOVE coaching; <br />
      - Indien een klacht gegrond is, zal RE-MOVE coaching de werkzaamheden alsnog verrichten zoals overeengekomen; tenzij dit inmiddels voor RE-MOVE coaching of deelnemer aantoonbaar zinloos is geworden; <br />
      - Indien het alsnog verrichten van de overeengekomen dienstverlening niet meer mogelijk of zinvol is, zal RE-MOVE coaching slechts aansprakelijk zijn binnen de grenzen van artikel 13.
      <br /><br />
      </p>
    </div>
             {/* Art 9 */}
             <div className="rounded-xl shadow-xl p-5 my-2">
      <h1 className="underline font-bold text-xl uppercase">Artikel 9. Honorarium</h1>
      <br />
      <p className="font-light text-justify p-3">
      - Partijen kunnen bij het tot stand komen van de overeenkomst afhankelijk van de aard van de opdrachtverlening een vast honorarium overeenkomen voor de duur van een project, dan wel een uurtarief hanteren.<br />
      - Eventuele kostenramingen zijn exclusief btw.<br />
      - Indien RE-MOVE coaching  met de opdrachtgever een vast honorarium of uurtarief overeenkomt, is RE-MOVE coaching desalniettemin gerechtigd tot verhoging van dit honorarium of uurtarief. RE-MOVE coaching mag prijsstijgingen doorberekenen, indien RE-MOVE coaching kan aantonen dat zich tussen het moment van aanbieding en levering significante prijswijzigingen hebben voorgedaan ten aanzien van bijvoorbeeld lonen en/of vergelijkbare markttarieven.<br />
      <br /><br />
      </p>
    </div>
                 {/* Art 10 */}
                 <div className="rounded-xl shadow-xl p-5 my-2 bg-secondary">
      <h1 className="underline font-bold text-xl uppercase">Artikel 10. Betaling</h1>
      <br />
      <p className="font-light text-justify p-3">
      - Betaling vindt slechts plaats na facturering van RE-MOVE coaching aan opdrachtgever. Opdrachtgever betaalt deze kosten binnen 14 dagen na factuurdatum.<br />
      - De betalingsvoorwaarden zijn van toepassing op alle zowel mondeling als schriftelijk gemaakte afspraken. <br />
      - Indien de opdrachtgever het verschuldigde bedrag niet binnen 14 dagen na factuurdatum heeft betaald krijgt de opdrachtgever een betalingsherinnering toegestuurd. Voldoet de opdrachtgever binnen 14 dagen nog niet aan de betalingsherinnering, dan is RE-MOVE coaching gerechtigd incassomaatregelen te treffen, dan wel dit door derden te laten uitvoeren. Alle kosten die verband houden met deze vordering komen voor de rekening van de cliënt. <br />
      - Bij een betalingsachterstand is RE-MOVE coaching gerechtigd verdere behandeling op te schorten totdat de opdrachtgever aan de betalingsverplichting heeft voldaan. <br />
      - Afspraken dienen uiterlijk 24 uur voor het tijdstip van de afspraak geannuleerd worden. Bij niet tijdig annuleren voor de afspraak, is RE-MOVE coaching gerechtigd de gereserveerde tijd voor 50% in rekening te brengen.
      <br /><br />
      </p>
    </div>
                 {/* Art 11 */}
                 <div className="rounded-xl shadow-xl p-5 my-2">
      <h1 className="underline font-bold text-xl uppercase">Artikel 11. Aansprakelijkheid</h1>
      <br />
      <p className="font-light text-justify p-3">
      Indien RE-MOVE coaching aansprakelijk is, dan is die aansprakelijkheid als volgt begrensd:<br /><br />
      - De aansprakelijkheid van RE-MOVE coaching is beperkt tot de factuurwaarde van de opdracht, althans dat gedeelte van de overeenkomst waarop de aansprakelijkheid betrekking heeft.<br />
      - De in deze voorwaarden opgenomen beperkingen van de aansprakelijkheid gelden niet indien de schade te wijten is aan opzet of grove schuld van RE-MOVE coaching<br />
      - RE-MOVE coaching is nimmer aansprakelijk voor gevolgschade.
      <br /><br />
      </p>
    </div>
                     {/* Art 12 */}
                     <div className="rounded-xl shadow-xl p-5 my-2 bg-secondary">
      <h1 className="underline font-bold text-xl uppercase">Artikel 12. Overmacht</h1>
      <br />
      <p className="font-light text-justify p-3">
      - Onder overmacht wordt in deze algemene voorwaarden verstaan naast hetgeen daaromtrent in de wet en jurisprudentie wordt begrepen, alle van buiten komende oorzaken, voorzien of niet voorzien, waarop RE-MOVE coaching geen invloed kan uitoefenen, doch waardoor RE-MOVE coaching niet in staat is haar verplichtingen na te komen.<br />
      - RE-MOVE coaching heeft ook het recht zich op overmacht te beroepen, indien de omstandigheid die (verdere) nakoming verhindert, intreedt nadat RE-MOVE coaching haar verbintenis had moeten nakomen.<br />
      - Tijdens overmacht worden de verplichtingen van RE-MOVE coaching opgeschort. Indien de periode waarin door overmacht nakoming van de verplichtingen door RE-MOVE coaching mogelijk is langer duurt dan 2 maanden zijn beide partijen bevoegd de overeenkomst te ontbinden zonder dat er in dat geval een verplichting tot schadevergoeding bestaat.<br />
      - RE-MOVE coaching bij het intreden van de overmacht al gedeeltelijk aan haar verplichtingen heeft voldaan, of slechts gedeeltelijk aan haar verplichtingen kan voldoen is zij gerechtigd het reeds uitgevoerde c. q uitvoerbare deel afzonderlijk te factureren en is de deelnemer gehouden deze factuur te voldoen als betrof het een afzonderlijke overeenkomst.<br />
      <br /><br />
      </p>
    </div>
                     {/* Art 13 */}
                     <div className="rounded-xl shadow-xl p-5 my-2">
      <h1 className="underline font-bold text-xl uppercase">Artikel 13. Geschillenbeslechting</h1>
      <br />
      <p className="font-light text-justify p-3">
      - Partijen komen overeen geschillen naar beste eer en geweten te behandelen en zorg te dragen dat een voor alle partijen aanvaardbaar vergelijk nagestreefd wordt binnen redelijk te noemen grenzen en termijn.<br />
      - Indien geen vergelijk wordt bereikt overeenkomstig lid 1. is de rechter in de woonplaats van RE-MOVE coaching bij uitsluiting bevoegd van geschillen kennis te nemen, tenzij de kantonrechter bevoegd is. Niettemin heeft RE-MOVE coaching het recht haar wederpartij te dagvaarden voor de volgens de wet bevoegde rechter.<br />
      <br /><br />
      </p>
    </div>
  </div>
</section>

{/* VOLGENDE PAGINA */}
<section className="w-screen">
    <div className="w-full p-10 lg:p-20">
        <h1 className="text-[30px] lg:text-[80px] uppercase font-bold text-right tracking-widest">volgende <br /><span className="text-secondary">pagina</span></h1>
        <div className="flex flex-row justify-end items-center pt-5">
        <Link to="/contact#toppage" className="flex items-center justify-center text-right uppercase font-bold tracking-wider">
        Contact
        </Link>
        <FaArrowRight className="text-secondary"/>
        </div>
    </div>
</section>
  </section>
  );
};

export default Voorwaarden;