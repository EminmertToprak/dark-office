'use client';

import { useEffect, useRef, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaIndustry, FaLightbulb, FaChartLine, FaRobot, FaGlobeAmericas } from 'react-icons/fa';
import SectionWithImage from '@/components/SectionWithImage';
import Header from '@/components/Header';
function AboutPage() {
	const [visibleElements, setVisibleElements] = useState<number[]>([]);
	const timelineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
						setVisibleElements((prev) => {
							if (!prev.includes(index)) {
								return [...prev, index];
							}
							return prev;
						});
					}
				});
			},
			{ threshold: 0.1 }
		);

		const elements = timelineRef.current?.querySelectorAll('.vertical-timeline-element');
		elements?.forEach((el, index) => {
			el.setAttribute('data-index', index.toString());
			observer.observe(el);
		});

		return () => {
			elements?.forEach((el) => observer.unobserve(el));
		};
	}, []);

	const timelineElements = [
		{ date: "1991", title: "Founded", content: "Our journey began with a focus on factory efficiency.", icon: <FaIndustry />, color: "#3498db" },
		{ date: "2010", title: "AI Integration", content: "Introduced AI to streamline production workflows.", icon: <FaLightbulb />, color: "#2ecc71" },  
		{ date: "2015", title: "Global Expansion", content: "Expanded our services to international markets.", icon: <FaGlobeAmericas />, color: "#e74c3c" },
		{ date: "2020", title: "Advanced Analytics", content: "Launched cutting-edge analytics platform for real-time insights.", icon: <FaChartLine />, color: "#f39c12" },
		{ date: "2024", title: "Next-Gen Robotics", content: "Pioneered next-generation robotics solutions for smart factories.", icon: <FaRobot />, color: "#9b59b6" },
	];

	return (
		<>
			<Header
				title="Innovating Manufacturing for Over 30 Years"
				subtitle="Bringing cutting-edge technology to revolutionize factory operations."
				backgroundVideo="/videos/about_bg_video.mp4"
				buttons={[
					{
						label: 'Our Mission',
						href: '#about-us',
					},
					{
						label: 'Explore Our Journey',
						href: '#our-journey',
					},
				]}
			/>
			<section id="about-us" className="py-16">
			<SectionWithImage
				title="About Us"
				description="We are a leading AI solutions provider for factories, dedicated to optimizing production processes and enhancing efficiency through cutting-edge technology."
				src={"/images/mission.png"}
				imageAlt="AI in factory setting"
				reverse={false}
			/>
			</section>
			<div ref={timelineRef} id="our-journey" className="py-16">
				<h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
				<VerticalTimeline>
					{timelineElements.map((element, index) => (
						<VerticalTimelineElement
							key={index}
							className={`vertical-timeline-element--work ${visibleElements.includes(index) ? 'is-visible' : ''}`}
							contentStyle={{ background: element.color, color: "#fff" }}
							contentArrowStyle={{ borderRight: `7px solid ${element.color}` }}
							date={element.date}
							iconStyle={{ background: element.color, color: "#fff" }}
							icon={element.icon}
							visible={visibleElements.includes(index)}
						>
							<h3 className="vertical-timeline-element-title">{element.title}</h3>
							<p>{element.content}</p>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
}

export default AboutPage;
