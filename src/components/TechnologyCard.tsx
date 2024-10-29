import { useState } from 'react';
import { motion } from 'framer-motion';

export const TechnologyCard = ({ title, description, details }: { title: string; description: string; details: string }) => {
    const [hover, setHover] = useState(false);

    return (
        <motion.div
onMouseEnter={() => setHover(true)}
onMouseLeave={() => setHover(false)}
whileHover={{ scale: 1.1 }}
className="relative p-6 bg-gray-800 w-3/4 w-full md:w-2/4 lg:w-1/4 text-white rounded-lg transition-transform duration-300 transform-gpu will-change-transform z-10"
>
				<h3 className="text-xl text-center font-bold mb-2">{title}</h3>
				<p className='text-l text-center font-bold'>{description}</p>
				{hover && (
					<div className="absolute top-0 left-0 h-full w-full content-center bg-gray-900 bg-opacity-100 text-white rounded-lg z-20">
						<p className="text-sm text-center text-white text-wrap my-auto">{details}</p>
					</div>
				)}
			</motion.div>
	);
}

export default TechnologyCard;