import LogoSlider from "@/components/career-page/logo-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import dynamic from "next/dynamic";

const Career = dynamic(() => import("@/components/career-page"), {
	ssr: false,
});
export const metadata = {
	title: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",
	description: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",

};
function CareerPage() {
	return (
		<>
			<BreadCrumb title="Templates" />
			<Career />
			<LogoSlider />
		</>
	);
}

export default CareerPage;
