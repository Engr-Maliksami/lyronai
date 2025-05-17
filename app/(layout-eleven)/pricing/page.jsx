import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-seven/faq";
import Testimonials from "@/components/home/home-seven/testimonials";
import PricePlan from "@/components/home/home-seven/price-plan";
export const metadata = {
	title: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",
	description: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",

};
function Pricing() {
	return (
		<>
			<BreadCrumb title="Pricing" />
			<PricePlan />
			<AutoSlider />
			<Testimonials />
			<Faq />
		</>
	);
}

export default Pricing;
