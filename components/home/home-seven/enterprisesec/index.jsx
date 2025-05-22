import Icon from "@/public/images/v5/icon4.png";
import Thumb from "@/public/images/v7/image2v7.png";
import AdvantagesImg from "@/public/images/about/advantages.jpeg";
import flowimg from "@/public/images/v1/flowchart.png"
import Image from "next/image";
import FadeInRight from "../../../animation/FadeInRight";

function Enterprisesec() {
  return (
    <section className="Enterprisesec">
      <div className="container">
        <div className="row">
          <div className="heading flex slider-custom-anim-left">
            <h3>Premium & Bereit für Unternehmen
</h3>
          </div>
          <div className="sec-desc text-center">
            <b> KI-Marketingdirektor: Strategische Intelligenz, automatisiert
</b>
         </div>

         <div className="main-dec text-center">
          <p className="text-center">Entwickelt für Präzision und Skalierbarkeit agiert dieser KI-Agent als Ihr digitaler Marketingdirektor. Planen, automatisieren und optimieren Sie kanalübergreifende Kampagnen – datengestützt und vollständig markenkonform.

</p>
         </div>
<div className="flow-chart">
  <Image src={flowimg}></Image>

</div>
        </div>
      </div>
    </section>
  );
}

export default Enterprisesec;