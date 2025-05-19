// import {heroimg} from  "@/public/images/v1/hero.png"
import dashboard from "@/public/images/abt.jpeg"

function HeroContent() {
	return (
		<div className="hero-section flex ">
		<div className="sofax-hero-content center">

<div className="main-hero flex">
			<div className="content-right">
			<h2 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
			Automate Smarter. Build AI Agents Without Code.
			</h2>
			<p>
				
			Let Lyron AI take care of repetitive business tasks — from lead qualification to customer service — with intelligent AI agents you can create in minutes, no tech skills needed.



			</p>
			</div>
			<div className="content-left">
				<img src={dashboard} alt="ddd" />
			</div>

			</div>

		</div>
		</div>
	);
}

export default HeroContent;
