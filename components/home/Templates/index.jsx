"use client";
import image1 from "@/public/images/about/image1.png";
import image2 from "@/public/images/about/image2.png";
import image3 from "@/public/images/about/image3.png";
import image4 from "@/public/images/about/image4.png";
import image5 from "@/public/images/about/image5.png";
import image6 from "@/public/images/about/image6.png";
import image7 from "@/public/images/about/image7.png";
import image8 from "@/public/images/about/image8.png";
import Thumb from "@/public/images/career/thumb1.png";
import mixitup from "mixitup";
import Image from "next/image";
import { useEffect } from "react";

const teamMembers = [
	{
		id: crypto.randomUUID(),
		name: "Jonathon Marics",
		title: "Founder & CEO",
		image: image1,
	},
	{
		id: crypto.randomUUID(),
		name: "Sellimers Terrony",
		title: "Marketing expert",
		image: image5,
	},
	{
		id: crypto.randomUUID(),
		name: "Helmioll Vesters",
		title: "Chief financial officer",
		image: image2,
	},
	{
		id: crypto.randomUUID(),
		name: "Elimerson Sanvry",
		title: "Chief executive officer",
		image: image6,
	},
	{
		id: crypto.randomUUID(),
		name: "Willemor Smilty",
		title: "Chief Strategy Officer",
		image: image3,
	},
	{
		id: crypto.randomUUID(),
		name: "Ferroliam Centrl",
		title: "Creative director",
		image: image7,
	},
	{
		id: crypto.randomUUID(),
		name: "Amillen Canver",
		title: "Director of HR",
		image: image4,
	},
	{
		id: crypto.randomUUID(),
		name: "Jovenners Willom",
		title: "Market researcher",
		image: image8,
	},
];

function Career() {
	useEffect(() => {
		mixitup(".sofax-portfolio-column", {
			selectors: {
				target: ".mix",
			},
			animation: {
				duration: 500,
			},
		});
	}, []);

	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-6 col-lg-8">
							<h2>Explore Ready to Use AI Bot Templates</h2>
						</div>
						<div className="col-xl-6 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-aboutus-content-text ">
								<p>
								Browse intelligent, no-code AI bots Primarly for real businesses — from coaching to solar, real estate to eCommerce. Launch, customize, and automate in minutes.


								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="sofax-career-thumb ">
					<Image src={Thumb} alt="Thumb" />
				</div>
				<div className="sofax-section-title center max-width-large">
					<h2>Curently Available Bot's</h2>
					<div className="sofax-portfolio-menu extra-mt">
						<ul className="option-set clear-both controls">
							<li className="mixitup-control mixitup-control-active" data-filter="*">
								All
							</li>
							<li className="mixitup-control" data-filter=".development">
								Marketing
							</li>
							<li className="mixitup-control" data-filter=".consultancy">
								Web Design
							</li>
							<li className="mixitup-control" data-filter=".security">
								Development
							</li>
						</ul>
					</div>
				</div>
				<div className="sofax-portfolio-column row">
					<div className="collection-grid-item mix col-md-6  business consultancy">
						<div className="sofax-career-content-wrapper ">
							<div className="sofax-career-content-autohre-wrap">
								<div className="sofax-career-content-data">
									<h4>Real Estate Inquiry Bot</h4>
									{/* <p>Full Time</p> */}
								</div>
								<div className="sofax-career-content-icon">
									<a href="single-career.html">
										<svg
											width="16"
											height="14"
											viewBox="0 0 16 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
												fill="white"
											/>
										</svg>
									</a>
								</div>
							</div>
							<div className="sofax-career-content-text">
								<p>
								Capture and convert homebuyer interest with a bot that collects preferences, shares listings, and instantly connects qualified leads to your sales team.

</p>
							</div>
							
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6  development">
						<div className="sofax-career-content-wrapper ">
							<div className="sofax-career-content-autohre-wrap">
								<div className="sofax-career-content-data">
									<h4> Online Coach Assistant</h4>
								</div>
								<div className="sofax-career-content-icon">
									<a href="single-career.html">
										<svg
											width="16"
											height="14"
											viewBox="0 0 16 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
												fill="white"
											/>
										</svg>
									</a>
								</div>
							</div>
							<div className="sofax-career-content-text">
								<p>
								Automate client onboarding, answer FAQs, and recommend the right coaching package with a conversational bot that speaks your brand’s voice.								</p>
							</div>
						
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6  Security business consultancy">
						<div className="sofax-career-content-wrapper ">
							<div className="sofax-career-content-autohre-wrap">
								<div className="sofax-career-content-data">
									<h4>Ecommerce Product Recommender</h4>
								</div>
								<div className="sofax-career-content-icon">
									<a href="single-career.html">
										<svg
											width="16"
											height="14"
											viewBox="0 0 16 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.42855 1.60733C3.48356 0.978554 4.03788 0.513422 4.66666 0.568433L14.3272 1.41362C14.956 1.46863 15.4211 2.02296 15.3661 2.65174L14.5209 12.3123C14.4659 12.9411 13.9116 13.4062 13.2828 13.3512C12.654 13.2962 12.1889 12.7419 12.2439 12.1131L12.8486 5.20113L2.70552 13.7122C2.22201 14.1179 1.50114 14.0549 1.09543 13.5713C0.68971 13.0878 0.752778 12.367 1.23629 11.9613L11.3794 3.45017L4.46745 2.84545C3.83867 2.79044 3.37354 2.23612 3.42855 1.60733Z"
												fill="white"
											/>
										</svg>
									</a>
								</div>
							</div>
							<div className="sofax-career-content-text">
								<p>
								Help customers find what they need faster — this bot filters products, highlights bestsellers, and encourages conversions directly in the chat.


								</p>
							</div>
					
						</div>
					</div>
					
				</div>
			</div>
		</section>
	);
}

export default Career;
