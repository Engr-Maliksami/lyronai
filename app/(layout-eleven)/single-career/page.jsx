import JobDetails from "@/components/career-page/single/JobDetails";
import BreadCrumb from "@/components/common/Breadcrumb";
import LogoSlider from "@/components/common/logo-slider";
export const metadata = {
	title: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",
	description: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",

};
function SingleCareerPage() {
	return (
		<>
			<BreadCrumb title="UI/UX Designer" />
			<JobDetails />
			<LogoSlider light />
		</>
	);
}

export default SingleCareerPage;
