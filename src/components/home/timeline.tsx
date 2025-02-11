import { motion } from 'framer-motion';
import { fadeInUp } from '../fade_up';
import { Icon } from '@iconify/react/dist/iconify.js';

const TimelineSection = () => {
	return (
		<section id="programme" className="py-10 px-4 bg-[#F6F9FF]">
			<div className="flex flex-col md:flex-row items-center gap-12 container mx-auto">
				<motion.div className="md:w-1/2" {...fadeInUp}>
					<h2 className="text-3xl font-helvetica-neue-bold  text-[#151D48] mb-5">
						Programme Timeline
					</h2>
					<div className=" mx-auto">
						<div className="space-y-6">
							{[
								{
									date: '7th February to 7th March',
									event: 'Call for Applications',
								},
								{
									date: '21st March.',
									event: 'Final 15 Startups Announced ',
								},
								{
									date: ' April 5th.',
									event: 'Programme Launch and Kick Off Mixer',
								},
								{
									date: ' April 7th - August 15th.',
									event:
										'Tailored Support Sessions, Capacity Building Workshops etc',
								},
								{
									date: ' August 30th',
									event: 'Programme Closeout Event',
								},
							].map((item, index) => (
								<TimelineItem key={index} date={item.date} event={item.event} />
							))}
						</div>
						<motion.button
							className="mt-8 bg-[#143C64] text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-x-1 "
							whileHover={{ scale: 1.05 }}>
							Apply Now{' '}
							<Icon icon="mynaui:arrow-right" width="24" height="24" />
						</motion.button>
					</div>
				</motion.div>
				<motion.div
					className="md:w-1/3"
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

function TimelineItem({ date, event }: { date: string; event: string }) {
	return (
		<motion.div
			className="flex items-center gap-4 text-sm"
			initial={{ opacity: 0, x: -20 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}>
			<img src="/icons/race.svg" alt="" />
			<div className="text-[#143C64] font-helvetica-neue-bold rounded-lg">
				{event} -{' '}
				<span className="text-[#6D737A] font-helvetica-neue-light">{date}</span>
			</div>
		</motion.div>
	);
}

export default TimelineSection;
