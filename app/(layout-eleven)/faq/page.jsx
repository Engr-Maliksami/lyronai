import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/faq-page";
export const metadata = {
	title: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",
	description: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",

};
function FaqPage() {
	return (
		<>
			<BreadCrumb title="Faq" />
			<Faq />
			<AutoSlider />
		</>
	);
}

export default FaqPage;
