import Icon from "@/public/images/v5/icon4.png";
import Thumb from "@/public/images/v7/image2v7.png";
import AdvantagesImg from "@/public/images/about/Complex.png";
import Image from "next/image";
import FadeInRight from "../../../animation/FadeInRight";

function Complex() {
  return (
    <section className="advantages-sec">
      <div className="container">
        <div className="row">
          <div className="heading flex slider-custom-anim-left mt-5">
          </div>

          <div className="content mt-8"></div>

          <div className="img-sec flex">
            <Image src={AdvantagesImg} />
          </div>

          <div className="col-lg-6 content-sec ml-20">
            <div className="sofax-default-content tac">
              <div className="tg-heading-subheading animation-style3">
                <h3>
                Komplexe Abläufe in Rekordgeschwindigkeit: GenAl Nodes 
                </h3>
              </div>
              <p>
              Bislang war das Erstellen komplexer Bot-Prozesse zeitaufwendig. Mit GenAl Nodes schreiben Sie einfach eine Aufgabenbeschreibung und definieren, welche Daten der Bot sammeln soll. 
                <br /> <br />
                Die GenAl-Technologie kümmert sich um den Rest. Sie modelliert die benötigten Prozesse, berücksichtigt alle möglichen Szenarien und behandelt sogar komplizierte Edge Cases. Ein Prozess, der bisher Tage dauern konnte, wird jetzt in wenigen Minuten erledigt. 
                <br />
                <br />
                Nutzen Sie GenAl Nodes für vielfältige Anwendungen wie Terminbuchungen, Hotelreservierungen oder das Melden von Zählerständen. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Complex;
