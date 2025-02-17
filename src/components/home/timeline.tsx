import { motion } from 'framer-motion';
import { fadeInUp } from '../fade_up';
import { Icon } from '@iconify/react/dist/iconify.js';

const TimelineSection = () => {
	return (
		<section id="programme" className="py-10 px-4 bg-[#F6F9FF]">
			<div className="flex flex-col md:flex-row items-center gap-12 container mx-auto">
				<motion.div
					className="md:w-1/2 flex flex-col items-center"
					{...fadeInUp}>
					<h2 className="text-3xl font-helvetica-neue-bold  text-[#151D48] mb-5">
						Application Deadline
					</h2>
					<div className=" mx-auto">
						<h2 className=" text-[#6D737A] font-helvetica-neue-bold">
							March 17th, 2025
						</h2>
						<motion.button
							className="mt-5 bg-[#143C64] cursor-pointer text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-x-1 "
							whileHover={{ scale: 1.05 }}>
							<a
								href="https://bgis.innox.africa/auth/register"
								target="_blank"
								rel="noopener noreferrer">
								Apply Now{' '}
							</a>

							<Icon icon="mynaui:arrow-right" width="24" height="24" />
						</motion.button>
					</div>
				</motion.div>
				<motion.div
					className="md:w-1/2"
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}>
					<img
						src="/images/sponsor_image.png"
						alt="Business Growth"
						className="rounded-lg shadow-lg h-80"
					/>
				</motion.div>
			</div>
		</section>
	);
};

// function TimelineItem({ date, event }: { date: string; event: string }) {
// 	return (
// 		<motion.div
// 			className="flex items-center gap-4 text-sm"
// 			initial={{ opacity: 0, x: -20 }}
// 			whileInView={{ opacity: 1, x: 0 }}
// 			viewport={{ once: true }}>
// 			<img src="/icons/race.svg" alt="" />
// 			<div className="text-[#143C64] font-helvetica-neue-bold rounded-lg">
// 				{event} -{' '}
// 				<span className="text-[#6D737A] font-helvetica-neue-light">{date}</span>
// 			</div>
// 		</motion.div>
// 	);
// }

export default TimelineSection;
