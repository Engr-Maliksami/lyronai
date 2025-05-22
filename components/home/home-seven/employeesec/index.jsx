import Icon from "@/public/images/v5/icon4.png";
import Thumb from "@/public/images/v7/image2v7.png";
import AdvantagesImg from "@/public/images/about/employee.png";
import Image from "next/image";
import FadeInRight from "../../../animation/FadeInRight";

function employeesec() {
  return (
    <section className="advantages-sec">
      <div className="container">
        <div className="row">
          <div className="heading flex slider-custom-anim-left">
         </div>

          <div className="content mt-8"></div>

         

          <div className="col-lg-6 content-sec">
            <div className="sofax-default-content tac">
              <div className="tg-heading-subheading animation-style3">
                <h3>
                Al Agent Assist für Mitarbeiter 
                </h3>
              </div>

              <br/><br/>

              <p>
              Der BFX AI Copilot von BOTfriends ist der ideale KI-Assistent, der den Arbeitsalltag von Service Mitarbeiter revolutioniert. <br/><br/>

Mit intelligenter Ticket-Klassifizierung und schnellen E-Mail-Vorschlägen sorgt er für spürbare Entlastung und Effizienzsteigerung im Kundenservice. <br/><br/>

Innerhalb weniger Minuten startklar, ermöglicht der Copilot eine präzisere und schnellere Bearbeitung von Anfragen und hebt die Servicequalität auf ein neues Level. <br/>
              </p>
            </div>
          </div>

          <div className="img-sec flex">
            <Image src={AdvantagesImg} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default employeesec;
