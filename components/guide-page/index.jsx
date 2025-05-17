"use client"
import Link from "next/link";
import CountUp from "react-countup";
import Icon from "@/public/images/v5/icon4.png";
import Thumb from "@/public/images/v7/image2v7.png";
import AIimage from "@/public/images/guide-steps/Agentic-AI-1.jpg"
import Image from "next/image";
import FadeInRight from "../animation/FadeInRight";
import BreadCrumb from "@/components/common/Breadcrumb";



function GuideStep() {
	return (
		<>	
			<BreadCrumb title="Our Guide" />
		<section className="section sofax-section-padding position-ralative">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-2">
						<FadeInRight className="about-thumbv5  ml-50">
							<Image src={AIimage} alt="AI" />
						</FadeInRight>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>How to Use Lyron AI</h2>
							</div>
							<p>
                            Welcome to Lyron AI — your no-code platform to create, launch, and even resell powerful AI agents.
Whether you're automating your business or earning from AI bots, this guide will help you get started step-by-step.

					</p>
							<div className="extra-mt">
								<div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={Icon} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4>Describe It. Don’t Code It.</h4>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={Icon} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4> Build with Blocks. Launch in Clicks.</h4>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={Icon} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4>Deploy Anywhere You Work.</h4>
									</div>
                                   

								</div>
                                <div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={Icon} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4>Sell Your Bot. Earn on Autopilot.</h4>
									</div>
                                   

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

            <div className="container">
			<br/><br/><br/>
				<div className="sofax-career-details-content terms-condition mb130">
				
					<p>
                    Lyron AI — the no-code platform to build, deploy, and even resell intelligent AI agents. This user manual walks you through each key phase of using the platform so you can get the most out of every feature.

Whether you're here to automate business workflows or generate revenue as a creator, follow this 4-step guide to master the Lyron experience.
					</p>
			<br />
                    <div className="user-guide">
                        
  <div className="sofax-career-details-content terms-condition mb130">
    <h4>🧠 1. Describe It. Don’t Code It.</h4>
    <p><strong>Goal:</strong> Define the task your AI bot should perform.</p>
    <h4>What to Do:</h4>
    <ul>
      <li>Go to your <strong>Dashboard</strong> and click <em>"Create New Bot."</em></li>
      <li>In the first field, describe in plain English what you want your bot to do.</li>
      <li><strong>Example:</strong> "I want a bot to handle new customer inquiries and collect their emails."</li>
      <li>Select the goal category: Lead Gen, Customer Support, Content Creation, etc.</li>
      <li>Choose a pre-made template or start from scratch.</li>
    </ul>
    <h4>Tips:</h4>
    <ul>
      <li>Be clear and specific. The better your input, the smarter the AI agent.</li>
      <li>Use templates for faster setup and inspiration.</li>
    </ul>
  </div>

  <div className="sofax-career-details-content terms-condition mb130">
    <h4>🧹 2. Build with Blocks. Launch in Clicks.</h4>
    <p><strong>Goal:</strong> Customize your bot using no-code tools and launch instantly.</p>
    <h4>What to Do:</h4>
    <ul>
      <li>Use the drag-and-drop builder to add prompts, inputs, buttons, or replies.</li>
      <li>Configure logic: What should happen when a user selects Option A or Option B?</li>
      <li>Personalize your bot:</li>
      <ul>
        <li>Set avatar image and bot name</li>
        <li>Choose tone (friendly, professional, casual)</li>
        <li>Add greeting and closing message</li>
      </ul>
      <li>Test your bot using the <strong>Prompt Testing Simulator</strong></li>
    </ul>
    <h4>Tips:</h4>
    <ul>
      <li>Use the A/B testing tool to try two prompt variations.</li>
      <li>Apply branding elements to match your business look.</li>
    </ul>
  </div>

  <div className="sofax-career-details-content terms-condition mb130">
    <h4>🛌 3. Deploy Anywhere You Work.</h4>
    <p><strong>Goal:</strong> Publish and integrate your bot across key platforms.</p>
    <h4>What to Do:</h4>
    <ul>
      <li>Click <em>"Deploy"</em> after your bot passes testing.</li>
      <li>Choose deployment options:</li>
      <ul>
        <li>Website widget (auto-generated embed code)</li>
        <li>Smart link (for forms, DMs, email)</li>
        <li>QR Code for offline access</li>
        <li>Connect via Webhooks/API for CRMs or advanced setups</li>
      </ul>
    </ul>
    <h4>Tips:</h4>
    <ul>
      <li>Use integrations with tools like WhatsApp, Gmail, Calendly, and Google Sheets.</li>
      <li>Add the widget script to your site’s <code>{'<head>'}</code> or use our WordPress plugin.</li>
    </ul>
  </div>

  <div className="sofax-career-details-content terms-condition mb130">
    <h4>💰 4. Sell Your Bot. Earn on Autopilot.</h4>
    <p><strong>Goal:</strong> List your bot on the marketplace and start earning.</p>
    <h4>What to Do:</h4>
    <ul>
      <li>Navigate to the <strong>Templates</strong> section and click <em>"Submit to Marketplace."</em></li>
      <li>Fill in details:</li>
      <ul>
        <li>Template name, use case, industry tags</li>
        <li>Description, screenshots, and demo video (optional)</li>
        <li>Set pricing: Free, One-Time, or Subscription</li>
      </ul>
      <li>Submit for admin review and go live after approval</li>
    </ul>
    <h4>Tips:</h4>
    <ul>
      <li>Promote your bot on social media, email, or embed on landing pages.</li>
      <li>Track sales and payouts from your <strong>Earnings Dashboard</strong>.</li>
      <li>High-rated bots may get featured for more visibility.</li>
    </ul>
  </div>

  <div className="sofax-career-details-content terms-condition mb130">
    <h4>✅ Need Help?</h4>
    <ul>
      <li>Visit the <strong>Help Center</strong> from your dashboard</li>
      <li>Use <strong>Live Chat Support</strong> for real-time help</li>
      <li>Email us at <a href="mailto:support@lyron.ai">support@lyron.ai</a></li>
    </ul>
  </div>


</div>
	</div>
			

				<div className="sofax-career-details-content terms-condition mb130">
					<h3>Contact Information</h3>
					<p>
						If you have any questions or concerns regarding these terms and conditions, please contact us.
					</p>
				</div>
			</div>
		</section>
		</>
	
	);
}

export default GuideStep;
