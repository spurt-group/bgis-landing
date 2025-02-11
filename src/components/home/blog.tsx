import { motion } from 'framer-motion';

const BlogSection = () => {
	const blogPosts = [
		{
			image: '/images/image_1.png',
			title: 'BGIS event - meet the judges for the event',
		},
		{
			image: '/images/image_2.png',
			title:
				'BGIS kick starts startup initiative event with more than 100 startup applicants',
		},
		{
			image: '/images/image_3.png',
			title: 'Spurt! teams and other partner gearing to help onboard startups',
		},
		{
			image: '/images/image_4.png',
			title: 'BGIS event - meet the judges for the event',
		},
	];

	return (
		<section className="py-16 bg-[#F6F9FF]">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-helvetica-neue-bold text-center text-[#151D48] mb-12">
					Stay Updated
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{blogPosts.map((post, index) => (
						<motion.div
							key={index}
							className="rounded-lg overflow-hidden shadow-md relative"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}>
							<img
								src={post.image}
								alt={post.title}
								className="w-full h-full object-cover"
							/>
							<div className="p-2 absolute bottom-0 bg-gradient-to-b from-[#143c640b] via-[#143c64cc] to-[#143C64] text-white h-32 flex items-center text-sm w-full">
								<h3 className="text-navy-900 font-medium self-end">
									{post.title}
								</h3>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogSection;
