import Icon1 from "@/public/images/v7/icon1v7.png";
import Icon2 from "@/public/images/v7/icon2v7.png";
import Icon3 from "@/public/images/v7/icon3v7.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";

const featuresData = [
	{
		id: "feature1",
		icon: Icon1,
		title: "Build Your Bot",
		description: "Use Lyron AI’s intuitive builder to create automation workflows, chatbots, or task-specific AI agents"
	},
	{
		id: "feature2",
		icon: Icon2,
		title: "Package & Publish",
		description: "Add a name, description, pricing, and target audience. Set your bot as Public (for resale) or Private (for personal use).",
	},
	{
		id: "feature3",
		icon: Icon3,
		title: "Sell on the Lyron Network",
		description: "Your bot will appear in the public marketplace where thousands of  entrepreneurs can discover it",
	},
];
function Features() {
	return (
		<section className="sofax-section-padding bg-light" id="features">
			<div className="container">
				<div className="sofax-section-title center max-width-700">
					<div className="tg-heading-subheading animation-style3">
						<h2>How It Works for Bot Creators & Sellers</h2>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger index={index} key={feature.id} className="col-lg-4 col-md-6">
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
