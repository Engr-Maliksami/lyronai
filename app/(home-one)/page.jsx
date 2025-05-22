import AboutOne from "@/components/home/home-seven/about-one";
import AboutThree from "@/components/home/home-seven/about-three/AboutThree";
import AboutTwo from "@/components/home/home-seven/about-two/AboutTwo";
import Blogs from "@/components/home/home-seven/blogs";
import Features from "@/components/home/home-seven/features";
import Hero from "@/components/home/home-seven/hero";
import Integrations from "@/components/home/home-seven/integrations";
import Services from "@/components/home/home-seven/services";
import Testimonials from "@/components/home/home-seven/testimonials";
import Advantages from "@/components/home/home-seven/advantages";
import CreateAI from "@/components/home/home-seven/create-AI";
import Templates from "@/components/Templates";
import Enterprisesec from "@/components/home/home-seven/enterprisesec"
import Integrationsec from "@/components/home/home-seven/integratoinsec";
import Employeesec from "@/components/home/home-seven/employeesec";
import Complex from "@/components/home/home-seven/complex";



function HomeSeven() {
	return (
		<>
			<Hero />
			<Templates/>
			<Advantages/>
			<Enterprisesec/>
			<CreateAI/>

			<Integrationsec/>
			<Employeesec />
			<Features />

			<Complex/>


			<AboutOne />

			{/*  */}
			
			{/* <Services /> */}
			{/* <AboutTwo /> */}
		
			{/* <AboutThree /> */}
			{/* <Testimonials /> */}
			
			<Integrations />
		
		</>
	);
}

export default HomeSeven;
