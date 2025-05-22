import Icon from "@/public/images/v5/icon4.png";
import Thumb from "@/public/images/v7/image2v7.png";
import AdvantagesImg from "@/public/images/about/advantages.jpeg";
import Image from "next/image";
import FadeInRight from "../../../animation/FadeInRight";

function Advantages() {
  return (
    <section className="advantages-sec">
      <div className="container">
        <div className="row">
          <div className="heading flex slider-custom-anim-left">
            <h3>Vorteile der BOTfriends Al Agent Plattform</h3>
          </div>

          <div className="content mt-8"></div>

          <div className="img-sec flex">
            <Image src={AdvantagesImg} />
          </div>

          <div className="col-lg-6 content-sec">
            <div className="sofax-default-content tac">
              <div className="tg-heading-subheading animation-style3">
                <h3>
                  83% der Kunden erwarten, dass der Kundenservice sofort
                  erreichbar is
                </h3>
              </div>
              <p>
                Ein exzellenter Kundenservice ist wichtiger als ein niedriger
                Preis. Aktuelle Studien zeigen: Viele Kunden sind bereit, bei
                einem guten Service mehr zu bezahlen.
                <br /> <br />
                Lange Wartezeiten, überlastete Mitarbeiter und ungenügende
                Antworten auf Kundenfragen führen zu einer Abwanderung zu
                Wettbewerbern.
                <br />
                <br />
                Dank Service-Automatisierung mithilfe von Al Agents wie Chatbots
                oder Phonebots lassen sich diese Probleme lösen..{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
