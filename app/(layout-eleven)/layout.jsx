import Footer from "@/components/home/home-seven/footer";

import Header from "@/components/common/header";
function LayoutEleven({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEleven;
