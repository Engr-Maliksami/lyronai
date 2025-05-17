import BreadCrumb from "@/components/common/Breadcrumb";
import Contact from "@/components/contact-us-page";
import MyMap from "@/components/contact-us-page/MyMap";
export const metadata = {
	title: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",
	description: "Lyron  AI| Build Smart. Automate Fast. Earn Always.",

};
function ContactUs() {
	return (
		<>
			<BreadCrumb title="Contact Us" />
			<Contact />
			<MyMap />
		</>
	);
}

export default ContactUs;
