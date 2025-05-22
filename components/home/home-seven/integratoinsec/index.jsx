import Icon1 from "@/public/images/icon/coding.png";
import Icon2 from "@/public/images/icon/coding.png";
import Icon3 from "@/public/images/icon/language.png";
import Icon4 from "@/public/images/icon/group.png";
import Icon5 from "@/public/images/icon/shuttle.png";
import Icon6 from "@/public/images/icon/analytics.png";
import FeatureCard from "../features/FeatureCard";




import Image from "next/image";



import FadeInStagger from "../../../animation/FadeInStagger";

const featuresData = [
  {
    id: "feature1",
    icon: Icon1,
    title: "Kein Code",
    description:
      "Erstellen und trainieren Sie auch ohne Entwicklungskenntnisse AI Agents wie Chatbots und Phonebots. Unsere No Code Lösung macht es möglich.",
  },
  {
    id: "feature2",
    icon: Icon2,
    title: "Human Handover",
    description:
      "Hat ein AI Agent keine geeignete Antwort parat, kann er Ihre Nutzer per Live Chat an Ihre Mitarbeiter weiterleiten.",
  },
  {
    id: "feature3",
    icon: Icon3,
    title: "Mehrsprachigkeit",
    description:
      "Bieten Sie einen multilingualen Support. Ihr AI Agent versteht und antwortet in mehr als 120 Sprachen.",
  },
  {
    id: "feature4",
    icon: Icon4,
    title: "Rollenmanagement",
    description:
      "Arbeiten Sie im Team an Ihren Agent-Projekten und entscheiden Sie, wer worauf Zugriff haben soll.",
  },
  {
    id: "feature5",
    icon: Icon5,
    title: "Analytics",
    description:
      "Mithilfe der Analyticsdaten lässt sich der Erfolg Ihrer AI Agent Projekte überwachen und weiter optimieren.",
  },
  {
    id: "feature6",
    icon: Icon6,
    title: "Ihr Agent wächst mit",
    description:
      "Eine neue API? Ein weiterer Kanal? Kein Problem – Sie können Ihr AI Agent Setup jederzeit erweitern und skalieren.",
  },
];


function Integrationsec() {
	return (
		<section className="Integrationsec">
			<div className="container">
				<div className="row">
					<div className="heading flex slider-custom-anim-left text-center">
						<h3>Premium & Bereit für Unternehmen</h3>
					</div>
					<div className="sec-desc text-center">
						<b>KI-Marketingdirektor: Strategische Intelligenz, automatisiert</b>
					</div>
					<div className="main-dec text-center">
						<p>
							Entwickelt für Präzision und Skalierbarkeit agiert dieser KI-Agent
							als Ihr digitaler Marketingdirektor. Planen, automatisieren und
							optimieren Sie kanalübergreifende Kampagnen – datengestützt und
							vollständig markenkonform.
						</p>
					</div>

					<div className="row">
						{featuresData.map((feature, index) => (
							<FadeInStagger index={index} key={feature.id} className="col-lg-4 col-md-6">
								<FeatureCard feature={feature} />
							</FadeInStagger>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Integrationsec;

