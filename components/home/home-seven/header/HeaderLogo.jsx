	import Logo from "@/public/images/logo/logo-light.jpg";
	import Image from "next/image";
	import Link from "next/link";
	function HeaderLogo() {
		return (
			<div className="brand-logo">
				<Link href="/multi-page/home-seven">
				<Image src={Logo} alt="Logo" />
				</Link>
			</div>
		);
	}

	export default HeaderLogo;
