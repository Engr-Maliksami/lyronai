import Blog from "@/components/blog-page";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
export const metadata = {
	title: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",
	description: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",

};
function BlogPage() {
	return (
		<>
			<BreadCrumb title="Blog" />
			<Blog />
			<AutoSlider />
		</>
	);
}

export default BlogPage;
