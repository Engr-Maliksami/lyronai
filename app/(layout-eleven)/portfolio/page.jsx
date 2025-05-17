import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-seven/faq";
import dynamic from "next/dynamic";

const PortfolioList = dynamic(() => import("@/components/portfolio/PortfolioList"), {
	ssr: false,
});

export const metadata = {
	title: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",
	description: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",

};
function PortfolioPage() {
	return (
		<>
			<BreadCrumb title="Our Portfolio" />
			<PortfolioList />
			<Faq />
		</>
	);
}

export default PortfolioPage;
