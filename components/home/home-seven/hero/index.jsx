"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";

import PlayBtn from "@/public/images/v3/videoplay.png";
import Dashboard from "@/public/images/v7/deshbordv7.png";
import dashboard from "@/public/images/hero.png"

import HeroContent from "./HeroContent";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
import FadeInUp from "../../../animation/FadeInUp";

//  Animated Typing Placeholder in Textarea
const AiAnimatedTextarea = () => {
  const phrases = ["Beschreiben Sie, was Ihr Agent tun soll.....",
  "Generiere Leads für mein Unternehmen.....",
  "Beantworte automatisch häufige Kundenfragen.....",
  "Vereinbare Termine mit Kunden.....",
  "Fasse E-Mails zusammen und beantworte sie.....",
  "Qualifiziere Leads von meiner Website.....",
  "Erstelle Anleitungen für die Einarbeitung neuer Kunden.....",
  "Schlage Kunden die besten Produkte vor.....",
  "Sammle Feedback nach einer Dienstleistung.....",
  "Automatisiere meinen Kundensupport.....",
  "Pflege Leads durch Gespräche.....",
  "Qualifiziere potenzielle Kunden in Echtzeit.....",
  "Schließe mehr Verkäufe mit intelligenten Antworten ab.....",
  "Führe Besucher durch meinen Serviceprozess.....",
  "Plane Meetings ohne manuellen Aufwand.....",
  "Verwandle FAQs in intelligente Antworten.....",
  "Beziehe neue Besucher automatisch ein.....",
  "Verwandle Website-Besucher in zahlende Kunden.....",
  "Erfasse E-Mails durch ansprechende Gespräche.....",
  "Biete 24/7-Support für meine Kunden.....",
  "Verwandle Social-Media-DMs in Verkäufe.....",
  "Erkläre Kunden mein Produkt.....",
  "Sammle Kontaktdaten von Website-Besuchern.....",
  "Leite Benutzer zum richtigen Service weiter.....",
  "Biete Rabattcodes für warme Leads an.....",
  "Filtere Spam oder unqualifizierte Leads heraus.....",
  "Hilf Nutzern beim Vergleich von Preisplänen.....",
  "Führe Besucher durch eine Produktdemo.....",
  "Verwalte Terminverschiebungen.....",
  "Sammle detailliertes Feedback nach dem Kauf.....",
  "Empfehle das beste Paket für jeden Nutzer.....",
  "Biete maßgeschneiderte Coaching-Vorschläge an.....",
  "Bearbeite Rückerstattungen oder Stornierungsanfragen.....",
  "Sende Folge-Nachrichten nach einem Chat.....",
  "Erstelle Rechnungen oder Bestellzusammenfassungen.....",
  "Biete Einarbeitung für neue Teammitglieder.....",
  "Hilf Kunden bei der Sendungsverfolgung.....",
  "Erstelle ein Ticket für ungelöste Anfragen.....",
  "Erkläre, wie mein Abonnementmodell funktioniert.....",
  "Beantworte 'Wie funktioniert das?'-Fragen intelligent.....",
  "Leite Benutzer an die richtige Abteilung weiter.....",
  "Sammle Testimonials von zufriedenen Kunden.....",
  "Verwandle ein Quiz in einen Sales-Funnel.....",
  "Sammle Vorverkaufsfragen von Leads.....",
  "Erkläre Produktfunktionen interaktiv.....",
  "Schlage Dienste basierend auf Nutzereingaben vor.....",
  "Buche sofort Kennenlerngespräche.....",
  "Verwandle Live-Chats in CRM-Einträge.....",
  "Personalisiere Angebote basierend auf Verhalten.....",
  "Hilf Besuchern bei Preisfragen....."
  ];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let typingSpeed = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div className="space-y-4">
    <textarea
      rows={3}
      onChange={(e) => setUserInput(e.target.value)}
      placeholder={text || "Loading..."}
      className="p-4 border rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-500 resize-none"
    />
  
  </div>
    
  );
};

// 🎯 Hero Section
function Hero() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="sofax-section-padding6" id="hero">
      <div className="container">
        {/* <HeroContent /> */}


     

<div className="main-hero flex">
			<div className="content-right mt-5">
			<h3 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
      Intelligenter automatisieren. KI-Agenten ohne Code erstellen.
			</h3>
			<p className="custom-anim-left">
				
      Überlassen Sie Lyron AI wiederkehrende Geschäftsaufgaben – von der Lead-Qualifizierung bis zum Kundenservice – mit intelligenten KI-Agenten, die Sie in wenigen Minuten erstellen können, ohne dass technische Kenntnisse erforderlich sind.


			</p>
      <ModalVideo
          channel="youtube"
          youtube={{ autoplay: 0 }}
          isOpen={isOpen}
          videoId="6mttwIBcig"
          onClose={() => setOpen(false)}
        />

        <FadeInStaggerTwo className="hero-buttons ">
          <FadeInStaggerTwoChildren>
            <Link className="sofax-default-btn pill" data-text="Testversion starten" href="/contact-us">
              <span className=" h -wraper">Testversion starten</span>
            </Link>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren>     
            <button className="sofax-popup-video video-init" onClick={() => setOpen(true)}>  
              <Image src={PlayBtn} alt="Play Btn" />
              Demo ansehen
            </button>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
			</div>
			<div className="content-left FadeInUp custom-anim-left">  
				<Image src={dashboard} alt="ddd" />
			</div>

      </div>
 

        
		<FadeInStaggerTwo>	
				<div className="Hero-boxes slider-custom-anim-left mt-5">
  {/* Feature 1 */}
  <div className="hero-box">
    <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 text-2xl mx-auto">
      {/* icon here */}
          </div>
    <h4 className="text-lg font-semibold ">Kein Code erforderlich</h4>
    <p className="">
    Erstellen Sie visuell und stellen Sie sofort bereit, ohne eine einzige Codezeile zu schreiben.    </p>
  </div>

  {/* Feature 2 */}
  <div className="hero-box bg-pink">
    <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 text-2xl mx-auto">
       {/* icon here */}
    </div>
    <h4 className="text-lg font-semibold text-gray-800 ">Intelligente Vorlagen</h4>
    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
    Verwenden Sie vorgefertigte Logik für Vertrieb, Support
    </p>
  </div>

  {/* Feature 3 */}
  <div className="hero-box">
    <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-xl bg-purple-100 text-purple-600 text-2xl mx-auto">
       {/* icon here */}
    </div>
    <h4 className="text-lg font-semibold text-gray-800">Vollständige Integration</h4>
    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
    Verbinden Sie sich in wenigen Minuten mit Zapier, Shopify, Slack und mehr.
    </p>
  </div>
</div>
</FadeInStaggerTwo>

        {/* <FadeInUp className="hero7-thumb extra-mt">
          <Image src={Dashboard} alt="Dashboard" />
        </FadeInUp> */}



        <FadeInUp>
          <br />
          <h3 className="text-xl font-semibold mt-4 text-center slider-custom-anim-left">Was möchten Sie heute bauen?</h3>
          <br />
          <AiAnimatedTextarea />
          <button
    
      className="sofax-default-btn pill"
    >
      Bot erstellen
    </button>
    
        </FadeInUp>
        <br />
      </div>
    </div>
  );
}

export default Hero;
