import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import AboutOne from "@/components/home/home-seven/about-one";
import Faq from "@/components/home/home-seven/faq";
import Features from "@/components/home/home-seven/features";
import TeamMembers from "@/components/team-page/TeamMembers";

// Teams images
export const metadata = {
	title: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",
	description: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",
};
function AboutUs() {
	return (
		<>
			<BreadCrumb title="About Us" />
			<Features />
			<AboutOne />
			<AutoSlider />
			<TeamMembers />
			<Faq />
		</>
	);
}

export default AboutUs;
