import { motion } from 'framer-motion';
import CustomFAQs from '../components/custom-faq';
import Benefits from '../components/home/benefits';
import { Icon } from '@iconify/react/dist/iconify.js';
import HeroSection from '../components/home/hero';
import SponsorSection from '../components/home/sponsor';
// import TimelineSection from '../components/home/timeline';
import BlogSection from '../components/home/blog';
import FooterSection from '../components/home/footer';
import Cohort from '../components/home/Cohort';
import Gallery from '../components/home/gallery';

function App() {
	const faqs = [
		{
			header: 'What is the BGIS programme about?',
			desc: [
				'The Business Growth Initiative for Startups is a programme designed to empower growth-stage business in Nigeria by providing tailored support, mentorship, and resources to scale sustainably and profitably.',
			],
		},
		{
			header: 'Who can apply?',
			desc: [
				'The programme is open to growth-stage businesses operating in Nigeria with proven business models and operational traction.',
			],
		},
		{
			header: 'What are the benefits of participating?',
			desc: [
				'Participants will receive expert-driven support, access to international consultants, capacity-building workshops, branding sessions, and post-programme monitoring. Businesses will also gain visibility through media coverage and events.',
			],
		},
		{
			header: 'Are there any fees to participate?',
			desc: [
				'No, the programme is fully funded by UK International Development, making it free for selected participants.',
			],
		},
		{
			header: 'How are businesses selected?',
			desc: [
				'Businesses are selected based on their growth potential, market traction, and alignment with programme goals. A rigorous and transparent evaluation process ensures fairness.',
			],
		},

		{
			header: "What is the programme's duration?",
			desc: [
				'The programme runs for nine months, from January 2025 to August 2025, with light-touch post-program monitoring continuing until November 2025.',
			],
		},
		{
			header: 'Where will the programme take place?',
			desc: [
				'The programme includes both virtual and in-person components, ensuring flexibility while fostering collaboration.',
			],
		},
		{
			header: 'How do I apply?',
			desc: [
				'Applications are submitted online through our dedicated platform. Ensure you meet the eligibility criteria and provide all required information during submission.',
			],
		},

		{
			header: 'Can businesses outside Lagos apply?',
			desc: [
				'Yes! Business Growth Initiative for Startups aims to support businesses from all regions of Nigeria to foster a diverse and inclusive ecosystem.',
			],
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<HeroSection />

			{/* Benefits Section */}
			<Benefits />

			{/* Sponsors Section */}
			<SponsorSection />
			<Cohort />
			<Gallery />

			{/* Timeline Section */}
			{/* <TimelineSection /> */}

			{/* FAQs Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-helvetica-neue-bold text-center text-[#151D48] mb-12">
						FAQs
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
						<CustomFAQs options={faqs} />
					</div>
				</div>
			</section>

			{/* Blog Section */}
			<BlogSection />

			<div className="flex justify-center items-center py-8">
				<motion.button
					className="mt-8 bg-[#143C64] text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-x-2 "
					whileHover={{ scale: 1.05 }}>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSe2F8pNI8GBKb97-BOUSfKxuP4L2oCmrfKD80DtaiGOCSO2ww/viewform"
						target="_blank"
						rel="noopener noreferrer">
						Register Now{' '}
					</a>{' '}
					<Icon icon="mynaui:arrow-right" width="24" height="24" className='mt-1'/>
				</motion.button>
			</div>

			{/* Footer */}
			<FooterSection />
		</div>
	);
}

export default App;
