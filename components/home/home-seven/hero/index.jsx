"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";

import PlayBtn from "@/public/images/v3/videoplay.png";
import Dashboard from "@/public/images/v7/deshbordv7.png";
import HeroContent from "./HeroContent";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
import FadeInUp from "../../../animation/FadeInUp";

// ✨ Animated Typing Placeholder in Textarea
const AiAnimatedTextarea = () => {
  const phrases = [
    "Describe what you want your agent to do...",
    "Generate leads for my business",
    "Answer customer FAQs automatically",
    "Book appointments with clients",
    "Summarize and reply to emails",
    "Qualify leads from my website",
    "Create onboarding instructions for new clients",
    "Suggest the best products to customers",
    "Collect feedback after a service",
	"Automate my customer support system",
	"Nurture leads through conversation",
	"Qualify potential clients in real-time",
	"Close more sales with smart replies",
	"Guide visitors through my service process",
	"Schedule meetings without manual effort",
	"Turn FAQs into intelligent answers",
	"Engage first-time visitors automatically",
	"Turn website traffic into paying customers",
	"Capture emails with engaging conversation",
	"Provide 24/7 support to my customers",
	"Convert social media DMs into sales",
	"Educate customers about my product",
	"Collect contact info from site visitors",
	"Redirect users to the right service",
	"Offer discount codes to warm leads",
	"Filter out spam or unqualified leads",
	"Help users compare pricing plans",
	"Walk visitors through a product demo",
	"Handle appointment rescheduling",
	"Collect detailed feedback after purchase",
	"Recommend the best package for each user",
	"Offer tailored coaching suggestions",
	"Handle refund or cancellation requests",
	"Send follow-up messages after a chat",
	"Generate invoices or order summaries",
	"Provide onboarding for new team members",
	"Assist customers with tracking orders",
	"Create ticket for unresolved queries",
	"Explain how my subscription model works",
	"Handle 'how it works' questions smartly",
	"Route users to the right department",
	"Gather testimonials from happy clients",
	"Turn a quiz into a sales funnel",
	"Collect pre-sale questions for leads",
	"Explain product features interactively",
	"Suggest services based on user input",
	"Book discovery calls instantly",
	"Convert live chat into CRM entries",
	"Personalize offers based on behavior",
    "Assist visitors with pricing questions",
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
    <textarea
      rows={3}
      placeholder={text || "Loading..."}
      className="p-4 border rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-500 resize-none"
    />
  );
};

// 🎯 Hero Section
function Hero() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="sofax-section-padding6" id="hero">
      <div className="container">
        <HeroContent />

        <ModalVideo
          channel="youtube"
          youtube={{ autoplay: 0 }}
          isOpen={isOpen}
          videoId="6mttwIBcig0"
          onClose={() => setOpen(false)}
        />

        <FadeInStaggerTwo className="sofax-hero-btn-wrap mt-5">
          <FadeInStaggerTwoChildren>
            <Link className="sofax-default-btn pill" data-text="Start Your Free Trial" href="/contact-us">
              <span className="button-wraper">Start Your Free Trial</span>
            </Link>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren>
            <button className="sofax-popup-video video-init" onClick={() => setOpen(true)}>
              <Image src={PlayBtn} alt="Play Btn" />
              Watch A Demo
            </button>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
		<FadeInStaggerTwo>	
				<div className="Hero-boxes">
  {/* Feature 1 */}
  <div className="hero-box">
    <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 text-2xl mx-auto">
      🔗
    </div>
    <h4 className="text-lg font-semibold text-gray-800">No Code Required</h4>
    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
      Build visually and deploy instantly <br /> without writing a single line of code.
    </p>
  </div>

  {/* Feature 2 */}
  <div className="hero-box">
    <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 text-2xl mx-auto">
      ✨
    </div>
    <h4 className="text-lg font-semibold text-gray-800">Smart Templates</h4>
    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
      Use prebuilt logic for sales, support, <br /> onboarding, and more.
    </p>
  </div>

  {/* Feature 3 */}
  <div className="hero-box">
    <div className="mb-4 flex justify-center items-center w-12 h-12 rounded-xl bg-purple-100 text-purple-600 text-2xl mx-auto">
      📦
    </div>
    <h4 className="text-lg font-semibold text-gray-800">Full Integration</h4>
    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
      Connect with Zapier, Shopify, Slack, <br /> and more in minutes.
    </p>
  </div>
</div>
</FadeInStaggerTwo>

        <FadeInUp className="hero7-thumb extra-mt">
          <Image src={Dashboard} alt="Dashboard" />
        </FadeInUp>



        <FadeInUp>
          <br />
          <h3 className="text-xl font-semibold mt-4 text-center">What would you like to build today?</h3>
          <br />
          <AiAnimatedTextarea />
        </FadeInUp>
        <br />
      </div>
    </div>
  );
}

export default Hero;
