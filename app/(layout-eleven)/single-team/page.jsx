import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
// import Faq from "@/components/home/home-seven/faq";
import SingleTeamDetails from "@/components/team-page/single/SingleTeamDetails";
export const metadata = {
	title: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",
	description: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",

};
function SingleTeamPage() {
	return (
		<>
			<BreadCrumb title="Team Details" />
			<SingleTeamDetails />
			<AutoSlider />
			{/* <Faq /> */}
		</>
	);
}

export default SingleTeamPage;
