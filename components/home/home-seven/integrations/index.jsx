import Flag from "@/public/images/v7/flag.png";
import Image from "next/image";
import Link from "next/link";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function Integrations() {
	return (
		<section className="section integration-vertsion7 dark-bg mt-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 d-flex align-items-center">
						<div className="sofax-default-content tac light-color">
							<div className="tg-heading-subheading animation-style3">
								<h3>Vertrauen in über 30 Ländern – hauptsächlich in Europa
</h3>
							</div>
							<p>
								Lyron AI unterstützt Unternehmen in über 30 Ländern – mit starker Präsenz in Deutschland, Österreich, der Schweiz, Frankreich und weiteren europäischen Märkten. Unsere Plattform ist auf globale Skalierbarkeit und mehrsprachige Nutzung ausgelegt – damit Sie intelligenter, schneller und weiter starten können.
							</p>
							<FadeInUp className="extra-mt">
								<Link
									className="sofax-default-btn pill"
									data-text="View all integrations"
									href="/contact-us"
								>
									<span className="button-wraper">Holen Sie sich Ihren Bot</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
					<div className="col-lg-5">
						<FadeInRight className="integration-social-icon integrationv7">
							<Image src={Flag} alt="Flag" />
						</FadeInRight>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Integrations;
