import Icon from "@/public/images/v5/icon4.png";
import Thumb from "@/public/images/v7/image2v7.png";
import Image from "next/image";
import createAIimg from "@/public/images/about/bot-builder.png";
import FadeInRight from "../../../animation/FadeInRight";

function CreateAI() {
  return (
    <section className="advantages-sec">
      <div className="container">
        <div className="row">
          <div className="content mt-8"></div>

          <div className="col-lg-6 content-sec">
            <div className="sofax-default-content tac">
              <div className="tg-heading-subheading animation-style3">
                <h3>Erstellen Sie Al Agents so intuitiv und graphisch wie nie zuvor</h3>
              </div>
              <p>
                Vergessen Sie komplexe Programmiersprachen und stundenlange Schulungen.
                Erstellen Sie mit Agentic Dialogs AI Agents ganz einfach interaktiv per Drag and Drop.
              </p>
              <br />
              <p>
                Jeder Dialog, jede Antwort und jede Integration ist wie ein Baustein, den Sie nach Belieben
                anordnen können. Dies ermöglicht maximale Flexibilität und Kreativität beim Aufbau Ihrer Agents.
              </p>
            </div>
          </div>

          <div className="img-sec flex">
            <Image src={createAIimg} alt="Create AI Agent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateAI;
