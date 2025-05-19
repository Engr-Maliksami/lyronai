'use client';
import { useEffect, useState, useRef } from 'react';

const bots = [
	{
	  id: 'bot1',
	  title: 'Kundensupport-Bot',
	  category: 'Support',
	  description: 'Beantwortet Kundenanfragen rund um die Uhr mit natürlichem Sprachverständnis.',
	  tools: ['GPT-4', 'Zendesk'],
	  tags: ['KI', 'Live-Chat'],
	},
	{
	  id: 'bot2',
	  title: 'Lead-Erfassungs-Bot',
	  category: 'Marketing',
	  description: 'Erfasst und qualifiziert automatisch Leads über Landingpages.',
	  tools: ['Typeform', 'Zapier'],
	  tags: ['Leads', 'Automatisierung'],
	},
	{
	  id: 'bot3',
	  title: 'Terminplanungs-Bot',
	  category: 'Produktivität',
	  description: 'Plant Meetings und synchronisiert sich mit deinem Kalender zur Vermeidung von Konflikten.',
	  tools: ['Google Kalender', 'Calendly'],
	  tags: ['Planer', 'Intelligente KI'],
	},
	{
	  id: 'bot4',
	  title: 'Verkaufsassistent-Bot',
	  category: 'Vertrieb',
	  description: 'Empfiehlt Produkte und unterstützt Kunden während des Bezahlvorgangs.',
	  tools: ['Shopify', 'AI Engine'],
	  tags: ['E-Commerce', 'Assistent'],
	},
	{
	  id: 'bot5',
	  title: 'FAQ-Bot',
	  category: 'Support',
	  description: 'Beantwortet häufig gestellte Fragen automatisch zur Reduzierung von Support-Tickets.',
	  tools: ['Eigene KI', 'Chatbot UI'],
	  tags: ['Support', 'FAQ'],
	},
	{
	  id: 'bot6',
	  title: 'Feedback-Sammler-Bot',
	  category: 'Feedback',
	  description: 'Sammelt Kundenfeedback und Vorschläge nach dem Kauf.',
	  tools: ['Google Formulare', 'Notion'],
	  tags: ['Umfragen', 'UX'],
	},
	{
	  id: 'bot7',
	  title: 'Produkt-Empfehlungs-Bot',
	  category: 'Vertrieb',
	  description: 'Macht personalisierte Produktvorschläge basierend auf Nutzerverhalten.',
	  tools: ['ML-Modell', 'Verhaltens-Tracker'],
	  tags: ['Personalisierung', 'Intelligenter Verkauf'],
	},
	{
	  id: 'bot8',
	  title: 'Bestellverfolgungs-Bot',
	  category: 'Betrieb',
	  description: 'Ermöglicht Kunden, den Status ihrer Bestellung im Chat zu prüfen.',
	  tools: ['WooCommerce', 'Tracking-API'],
	  tags: ['Logistik', 'Echtzeit'],
	},
	{
	  id: 'bot9',
	  title: 'Onboarding-Bot',
	  category: 'HR',
	  description: 'Führt neue Mitarbeiter durch den Einarbeitungsprozess.',
	  tools: ['BambooHR', 'Slack'],
	  tags: ['HR', 'Automatisierung'],
	},
	{
	  id: 'bot10',
	  title: 'E-Mail-Marketing-Bot',
	  category: 'Marketing',
	  description: 'Sendet automatisch zielgerichtete E-Mails basierend auf Nutzerverhalten.',
	  tools: ['Mailchimp', 'HubSpot'],
	  tags: ['Newsletter', 'Kampagnen'],
	},
	{
	  id: 'bot11',
	  title: 'Rechnungs-Bot',
	  category: 'Finanzen',
	  description: 'Generiert automatisch Rechnungen und sendet Zahlungserinnerungen.',
	  tools: ['Xero', 'QuickBooks'],
	  tags: ['Finanzen', 'Rechnungen'],
	},
	{
	  id: 'bot12',
	  title: 'Social-Media-Bot',
	  category: 'Marketing',
	  description: 'Plant und veröffentlicht Beiträge automatisch auf sozialen Medien.',
	  tools: ['Buffer', 'Meta API'],
	  tags: ['Social Media', 'Automatisierung'],
	},
	{
	  id: 'bot13',
	  title: 'Bewerbermanagement-Bot',
	  category: 'HR',
	  description: 'Automatisiert den Bewerbungsprozess von der Bewerbung bis zum Interview.',
	  tools: ['Greenhouse', 'Zapier'],
	  tags: ['HR', 'Recruiting'],
	},
	{
	  id: 'bot14',
	  title: 'Support-Ticket-Bot',
	  category: 'Support',
	  description: 'Erstellt und verwaltet automatisch Support-Tickets aus Kundenanfragen.',
	  tools: ['Freshdesk', 'AI Parser'],
	  tags: ['Support', 'Ticketsystem'],
	},
	{
	  id: 'bot15',
	  title: 'Wissensdatenbank-Bot',
	  category: 'Produktivität',
	  description: 'Bietet schnellen Zugriff auf interne Wissensdatenbanken per Chat.',
	  tools: ['Confluence', 'Elasticsearch'],
	  tags: ['Wissen', 'Suche'],
	},
  ];
  ;

const BOTS_PER_PAGE = 3;

export default function BotCarousel() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(bots.length / BOTS_PER_PAGE);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, [totalPages]);

  const handlePrev = () => {
    clearInterval(timerRef.current);
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    clearInterval(timerRef.current);
    setPage((prev) => (prev + 1) % totalPages);
  };

  const currentBots = bots.slice(
    page * BOTS_PER_PAGE,
    page * BOTS_PER_PAGE + BOTS_PER_PAGE
  );

  return (
    <div>
      {/* Grid of Bots */}



	  <div className="tg-heading-subheading animation-style3 text-center slider-custom-anim-left template-title">
						<h3>KI-Agenten: Die Zukunft intelligenter Geschäftsprozesse
</h3>
						<p>KI-Agenten automatisieren komplexe Abläufe mit menschenähnlicher Präzision – rund um die Uhr, fehlerfrei.
Ein digitales Top-Team für Ihr Unternehmen – ganz ohne zusätzliche Personalkosten.








</p>
					</div>
      <div className="bot-grid sofax-career-grid">
        {currentBots.map((bot) => (
          <div key={bot.id} className="sofax-career-content-wrapper bot-card">
            <div className="sofax-career-content-autohre-wrap bot-card-header">
              <div className="sofax-career-content-icon">
                <a href="#">
                  <div className="bot-circle"></div>
                </a>
              </div>
              <span className="bot-category">{bot.category}</span>
            </div>

            <div className="sofax-career-content-text bot-card-body">
              <h3 className="bot-card-title">{bot.title}</h3>
              <p className="bot-card-desc">{bot.description}</p>

              <div className="bot-tools">
                <strong>Tools:</strong> {bot.tools.join(', ')}
              </div>
              <div className="bot-tags">
                {bot.tags.map((tag, idx) => (
                  <span key={idx} className="bot-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="bot-pagination">
        <button className="bot-arrow" onClick={handlePrev}>{'←'}</button>
        <div className="bot-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              onClick={() => setPage(i)}
              className={`dot ${i === page ? 'active' : ''}`}
            >
              •
            </span>
          ))}
        </div>
        <button className="bot-arrow" onClick={handleNext}>{'→'}</button>
      </div>
    </div>
  );
}
