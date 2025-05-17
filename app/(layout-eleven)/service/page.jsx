import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-seven/faq";
import About from "@/components/service-page/about";
import Services from "@/components/service-page/services";
export const metadata = {
	title: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",
	description: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",

};
function ServicePage() {
	return (
		<>
			<BreadCrumb title="Service" />
			<Services />
			<AutoSlider />
			<About />
			<Faq />
		</>
	);
}

export default ServicePage;
