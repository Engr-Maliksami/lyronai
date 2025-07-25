"use client";
import Icon1 from "@/public/images/service/icon1.png";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Build Without Code",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Automate With Intelligence",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Launch In Minutes",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Grow Your Business",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Earn From Bots",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "No Dev Needed",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Work Smarter Daily",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Scale On Autopilot",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Social Media Markating",
	},
	{
		id: crypto.randomUUID(),
		img: Icon1,
		txt: "Start Up Business",
	},
];

const swiperSettings = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	centeredSlides: true,
	spaceBetween: 30,
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: "auto",
};

function AutoSlider() {
	return (
		<section className="sofax-service-slider">
			<div className="sofax-slider-service-section">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="sofax-service-slider-wrap">
									<div className="sofax-service-slider-icon">
										<Image src={item.img} alt="Icon" />
									</div>
									<div className="sofax-service-slider-data light-color">
										<h2>{item.txt}</h2>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</section>
	);
}

export default AutoSlider;
