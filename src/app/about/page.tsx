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

	const clientTestimonials = [
		{company: 'ISO', logo: 'images/standards/iso.png'},
		{company: 'Turquality', logo: 'images/standards/turquality.png'},
		{company: 'BRC Food Certified', logo: 'images/standards/brc.jpg'},
		{company: 'Lean Manufacturing', logo: 'images/standards/lean.png'},
	]

	const listStyle = "flex flex-col items-center gap-4 border-2 rounded-lg border-gray-300 pl-4 w-1/4 pt-4"
	const listItemStyle = "pb-4 text-left list-disc list-inside"
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
					description="With over 30 years of ERP experience, our founder and experienced team continue on our path as an R&D company dedicated to providing solutions for humanity, supported by our dealer network."
					src={"/images/about_header.png"}
					imageAlt="AI in factory setting"
					reverse={false}
				/>
				<SectionWithImage
					title="Our Mission"
					description="Increasing efficiency and preventing waste through the effective use of artificial iztelligence recommendations, supported by digital neural networks, in every department involved in the production process and in every corner of the factory."
					src={"/images/mission.png"}
					imageAlt="AI in factory setting"
					reverse={true}
				/>

			</section>
			<div ref={timelineRef} id="our-journey" className="px-16">
				<h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
				<VerticalTimeline className="border-4 border-white rounded-lg px-4">
					{timelineElements.map((element, index) => (

						<VerticalTimelineElement
							key={index}
							className={`vertical-timeline-element--work ${visibleElements.includes(index) ? 'is-visible' : ''}`}
							contentStyle={{background: element.color, color: "#fff"}}
							contentArrowStyle={{borderRight: `7px solid ${element.color}`}}
							date={element.date}
							iconStyle={{background: element.color, color: "#fff",}}
							icon={element.icon}
							visible={visibleElements.includes(index)}
						>

							<h3 className="vertical-timeline-element-title pt-2 pl-2 font-bold">{element.title}</h3>
							<p className="pl-4 pb-4">{element.content}</p>
						</VerticalTimelineElement>

					))}
				</VerticalTimeline>
			</div>
			<div id="our-technology" className="py-16">
				<h2 className="text-4xl font-bold text-center mb-10">Our Technologies</h2>
				<h1 className='text-3xl font-bold text-center mb-10'>Advanced Solutions for Today’s Factories</h1>
				<h2 className='text-2xl text-center'>ENS MES +</h2>
				<div className='flex flex-wrap gap-6 justify-center py-8'>
					<div className={listStyle}>
						<h3 className="text-xl font-semibold mb-4">Quality</h3>
						<ul className={listItemStyle}>
							<li>Referencing technical drawings in numerical controls</li>
							<li>Displaying the correct image in visual inspections</li>
							<li>Sample Plan Support</li>
							<li>Advanced/Backward Traceability</li>
							<li>Push Notification Support in Field Controls</li>
						</ul>
					</div>
					<div className={listStyle}>
						<h3 className="text-xl font-semibold mb-4">Planning</h3>
						<ul className={listItemStyle}>
							<li>The ability to link multiple recipes and routes to a product</li>
							<li>Capacity Planning with MRP1 / MRP2 / VR</li>
							<li>Real-time communication with workshops</li>
						</ul>
					</div>
					<div className={listStyle}>
						<h3 className="text-xl font-semibold mb-4">Production</h3>
						<ul className={listItemStyle}>
							<li>The ability to produce without recipes</li>
							<li>Practical and Easy Use with Barcode Support</li>
							<li>If desired, the ability to link multiple recipes and routes to a product</li>
							<li>Real-time Cost Information</li>
							<li>Mobile APK support</li>
						</ul>
					</div>
					<div className={listStyle}>
						<h3 className="text-xl font-semibold mb-4">Purchase</h3>
						<ul className={listItemStyle}>
							<li>Transparent Procurement Support</li>
							<li>Automatically obtaining and evaluating vendor quotes</li>
							<li>E-Invoice Support</li>
						</ul>
					</div>
					<div className={listStyle}>
						<h3 className="text-xl font-semibold mb-4">Sale</h3>
						<ul className={listItemStyle}>
							<li>Establishing communication between production and sales</li>
							<li>Production Order Tracking</li>
							<li>Shipment Planning</li>
							<li>V-sight Connection</li>
						</ul>
					</div>
					<div className={listStyle}>
						<h3 className="text-xl font-semibold mb-4">Maintenance</h3>
						<ul className={listItemStyle}>
							<li>Planned/Unplanned Maintenance Tracking.</li>
							<li>Tracking of Fault Response Times.</li>
							<li>Tracking of Materials Used.</li>
							<li>VShelf Life Tracking - Sales</li>
						</ul>
					</div>
				</div>
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
				</div>

			</div>
			<div id='leadership-team' className='py-10 px-8 md:px-24 lg:px-48'>
				<h2 className="text-3xl font-bold text-center mb-6">Meet the Team Behind Our Success</h2>
				<div className="flex flex-row gap-6 justify-center py-4 w-full">
					{leadershipTeam.map((member, index) => (
						<div key={index} className="flex flex-col items-center rounded-lg shadow-lg w-1/2 border-2 border-theme_dark_red p-8">
							<img src={member.image} alt={`Photo of ${member.name}`}
								 className="w-28 h-28 rounded-full mb-4 border-2 border-theme_dark_red"/>
							<h3 className="text-xl font-semibold text-theme_red">{member.name}</h3>
							<p className="text-md text-white-800">{member.role}</p>
							<p className="text-md text-white mt-2 text-center">{member.bio}</p>
						</div>
					))}
				</div>
			</div>
			<div id="document-standards" className="py-4">
				<h2 className="text-3xl font-bold text-center mb-10">Ready Document Standards</h2>
				<h3 className="text-xl text-center">Directly supported document and production standards:</h3>
				<div className="flex flex-wrap gap-6 justify-center py-8">
					{clientTestimonials.map((testimonial, index) => (
						<div key={index}
							 className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg relative group">
							<img src={testimonial.logo} alt={`Logo of ${testimonial.company}`}
								 className="w-28 h-28 rounded-full mb-4 border-2 border-theme_dark_red"/>
							<p>{testimonial.company}</p>
						</div>
					))}
				</div>
			</div>
			<div id='call-to-action' className='py-10 px-8 md:px-24 lg:px-48 border-t-2 border-b-2 border-theme_dark_red'>
				<div className="text-center">
					<h2 className="text-3xl font-bold mb-4">Join Us on the Path to Efficiency</h2>
					<p className="text-lg mb-8">We’re committed to transforming industries and unlocking their full
						potential. Ready to elevate your factory’s performance?</p>
					<div className="flex justify-center gap-4">
						<a href="#contact"
						   className="bg-theme_dark_red text-white py-2 px-4 rounded hover:bg-theme_red transition duration-300">
							Contact Us
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutPage;
