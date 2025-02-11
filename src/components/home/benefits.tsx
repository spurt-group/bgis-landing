import { motion } from 'framer-motion';

export default function Benefits() {
	const benefits = [
		{
			title: 'Tailored Expert Support',
			description:
				'Personalized business strategies and mentorship to directly address the startups’ core challenges and key areas for improvement.',
			icon: 'persons.svg',
			bgColor: '#E0EAFF',
		},
		{
			title: 'Capacity Building',
			description:
				'Participate in masterclasses, branding sessions, training, and expert 1:1 consultancy to strengthen business strategies and leadership skills.',
			icon: 'monitor.svg',
			bgColor: '#E0EAFF',
		},
		{
			title: 'Brand Visibility & Communications Support',
			description:
				'Boost your startup’s profile through strategic branding efforts and media exposure.',
			icon: 'rocket.svg',
			bgColor: '#FCE7F6',
		},
		{
			title: 'Networking & Global Connections',
			description:
				'Connect with industry leaders, mentors, and other innovators to build valuable partnerships and elevate business practices.',
			icon: 'people.svg',
			bgColor: '#FCF5E7',
		},
		{
			title: 'Post-Programme Monitoring & Support',
			description:
				'Light-touch M&E activities and skeletal support to ensure long-term sustainability.',
			icon: 'search.svg',
			bgColor: '#E7F6FC',
		},
		{
			title: 'Performance Tracking',
			description:
				'Gain insights through ongoing data collection and monitoring to track your progress and refine growth strategies.',
			icon: 'tracker.svg',
			bgColor: '#ECE0FF',
		},
	];

	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-helvetica-neue-bold text-center text-[#151D48] mb-12">
					Benefits
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm gap-8">
					{benefits.map((benefit, index) => (
						<motion.div
							key={index}
							className="p-6 rounded-xl bg-white shadow group hover:bg-gradient-to-br from-blue-sky via-blue-sky to-regal-red hover:text-white  "
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}>
							<div className="flex items-center gap-x-3">
								<div
									style={{
										backgroundColor: benefit.bgColor,
									}}
									className={`w-[39.46px] h-[41.36px] rounded-lg flex  items-center justify-center`}>
									<img src={`/icons/${benefit.icon}`} alt={benefit.title} />
								</div>
								<h3 className="font-helvetica-neue-bold  text-navy-900">
									{benefit.title}
								</h3>
							</div>
							<p className="text-[#6D737A]  group-hover:text-white transition-all duration-200 text-sm max-w-[17rem] mt-3 leading-6">
								{benefit.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
