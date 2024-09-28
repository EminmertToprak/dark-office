'use client';

import { useEffect, useRef, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaIndustry, FaLightbulb, FaChartLine, FaRobot, FaGlobeAmericas } from 'react-icons/fa';
import SectionWithImage from '@/components/SectionWithImage';
import Header from '@/components/Header';
import { TechnologyCard } from '@/components/TechnologyCard';

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

	const leadershipTeam = [
		{name: 'Salih Düzel', image: 'images/salih_duzel.jpeg', role:'CEO', bio:'Salih Düzel is a dynamic entrepreneur and seasoned project manager with a strong foundation in software development, ERP systems, and business process optimization. His career began in software project management, evolving over the years as he took on key roles in companies like Atiker Yazılım and Projesis Yazılım. In 2021, he founded Dark Office, a company specializing in data mining, AI, and automation solutions, where he has been leading innovative projects in robotics and smart technologies. With expertise in Industry 4.0 and a proven track record in ERP and team management, Salih is passionate about bridging technology and business for future-driven solutions. Based in Istanbul, he combines his technical skills with a keen eye for strategic development.'},
		{name: 'Mert Toprak', image: 'images/mert_toprak.png', role:'Full-stack Developer', bio:'Mert Toprak is a passionate frontend developer with experience in JavaScript, TypeScript, and modern frameworks like React and Angular. With a strong foundation in both development and project management, he has contributed to various projects, including web applications and digital solutions for clients in diverse sectors. A quick learner and a collaborative team player, he thrives in agile environments and is committed to delivering high-quality user experiences. Mert is eager to expand his skill set while making a meaningful impact in the tech industry.'}

	]

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
			<div id="our-technology" className="py-16">
				<h2 className="text-3xl font-bold text-center mb-10">Our Technologies</h2>
				<h1 className='text-xl text-center mb-10'>Advanced Solutions for Today’s Factories</h1>
				<div id="industries-container" className="flex flex-wrap gap-6 justify-center py-8">
				<TechnologyCard
					title="ENS"
					description="Enterprise Nervous System"
					details="ENS integrates data across the factory for real-time decision-making."
				/>
				<TechnologyCard
					title="MES+"
					description="Manufacturing Execution System Plus"
					details="MES+ enhances production with advanced analytics and automation."
				/>
				<TechnologyCard
					title="MOM"
					description="Manufacturing Operations Management"
					details="Manage every operation from scheduling to quality control."
				/>
				{/* ... more cards can be added here ... */}
			</div>
			<div id='leadership-team' className='py-16 px-8 md:px-48 lg:px-96'>
			<h2 className="text-3xl font-bold text-center mb-10">Meet the Team Behind Our Success</h2>
				<div className="flex flex-wrap gap-6 justify-center py-8">
					{leadershipTeam.map((member, index) => (
						<div key={index} className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg">
							<img src={member.image} alt={`Photo of ${member.name}`} className="w-28 h-28 rounded-full mb-4 border-2 border-theme_dark_red" />
							<h3 className="text-xl font-semibold text-theme_red">{member.name}</h3>
							<p className="text-md text-white-800">{member.role}</p>
							<p className="text-md text-white mt-2">{member.bio}</p>
						</div>
					))}
				</div>
			</div>
			</div>
		
		</>
	);
}

export default AboutPage;
