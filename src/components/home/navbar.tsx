import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const { hash } = useLocation();
	const [activeHash, setActiveHash] = useState(hash || '#home');

	const NavbarLinks = [
		{ name: 'Home', href: '#home' },
		{ name: 'Our Partners', href: '#our-partners' },
		{ name: 'Programme', href: '#programme' },
		{ name: 'Contact Us', href: '#contact-us' },
	];

	// Smooth scrolling function
	const handleSmoothScroll = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		href: string,
	) => {
		e.preventDefault();
		setActiveHash(href); // Update active section
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
	};

	// Update active section when the hash changes (e.g., user scrolls manually)
	useEffect(() => {
		setActiveHash(hash || '#home');
	}, [hash]);

	return (
		<motion.nav
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto px-4 flex justify-between items-center py-4 bg-white text-sm rounded-lg">
			<img src="/icons/logo.svg" alt="logo" className="w-24" />
			<ul className="hidden md:flex gap-6">
				{NavbarLinks.map((link, index) => (
					<a
						href={link.href}
						onClick={(e) => handleSmoothScroll(e, link.href)}
						key={index}
						className={`${
							activeHash === link.href
								? 'bg-gradient-to-br from-blue-sky via-blue-sky to-regal-red text-transparent bg-clip-text font-helvetica-neue-bold'
								: 'text-[#B4B4B4]'
						} transition duration-300`}>
						{link.name}
					</a>
				))}
			</ul>
			<button className="bg-gradient-to-br from-blue-sky via-blue-sky to-regal-red text-white px-4 py-2 rounded-md font-helvetica-neue-medium text-sm flex items-center gap-x-1">
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSe2F8pNI8GBKb97-BOUSfKxuP4L2oCmrfKD80DtaiGOCSO2ww/viewform"
					target="_blank"
					rel="noopener noreferrer">
					Register Now{' '}
				</a>{' '}
				<Icon icon="mynaui:arrow-right" width="24" height="24" />
			</button>
			<FaBars className="md:hidden text-xl" />
		</motion.nav>
	);
}
