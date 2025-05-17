import SingleBlog from "@/components/blog-page/single-blog";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
export const metadata = {
	title: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",
	description: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",

};
function SingleBlogPage() {
	return (
		<>
			<BreadCrumb title="Blog Details" />
			<SingleBlog />
			<AutoSlider />
		</>
	);
}

export default SingleBlogPage;
