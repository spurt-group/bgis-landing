import Navbar from './navbar';
import { motion } from 'framer-motion';
import { fadeInUp } from '../fade_up';

const HeroSection = () => {
	return (
		<section
			id="home"
			className="pt-5 px-4 bg-gradient-to-br from-blue-sky via-blue-sky to-regal-red text-white">
			<Navbar />
			<div className="container mx-auto py-16">
				<div className="flex flex-col md:flex-row items-center gap-12">
					<motion.div className="md:w-1/2" {...fadeInUp}>
						<h1 className="text-3xl md:text-4xl font-helvetica-neue-bold mb-4">
							Welcome to the Business Growth Initiative for Startups (BGIS)
						</h1>
						<p className="text-gray-200 text-base mb-8 font-helvetica-neue-light">
							Empowering Nigerian Startups for Sustainable Growth and Global
							Impact
						</p>
						<button className="bg-white text-navy-900 px-6 py-3 rounded-lg text-sm font-medium ">
							<p className="bg-gradient-to-br from-blue-sky via-blue-sky to-regal-red text-transparent bg-clip-text flex items-center gap-x-2">
								Register Now <span className="text-xl">→</span>
							</p>
						</button>
					</motion.div>
					<motion.div
						className="md:w-1/2"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}>
						<img
							src="/images/hero_image.png"
							alt="Business Growth"
							className="rounded-lg shadow-lg"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
