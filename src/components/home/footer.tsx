import { Icon } from '@iconify/react/dist/iconify.js';

const FooterSection = () => {
	return (
		<footer
			id="contact-us"
			className="py-16 bg-gradient-to-br from-blue-sky via-blue-sky to-regal-red  text-white">
			<div className="container mx-auto px-4">
				<h4 className="uppercase font-helvetica-neue-light text-center text-xs mb-2">
					Take your startup to the next level
				</h4>
				<h2 className="text-2xl font-bold text-center mb-12">
					Request More Information
				</h2>
				<div className="max-w-xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						<input
							type="text"
							placeholder="Full Name"
							className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60"
						/>
						<input
							type="email"
							placeholder="Email"
							className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60"
						/>
					</div>
					<div className="flex justify-center mt-8">
						<a
							href="mailto:bgis@spurt.group"
							className="bg-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all">
							<p className="bg-gradient-to-br from-blue-sky via-blue-sky to-regal-red text-transparent px-4 rounded-md font-helvetica-neue-medium bg-clip-text text-sm ">
								Contact Us
							</p>
						</a>
					</div>
				</div>
				<div className="flex gap-8 mt-10 text-base justify-center border-b border-white/20 pb-4">
					<a href="#" className="text-sm hover:text-gray-300">
						Home
					</a>
					<a href="#" className="text-sm hover:text-gray-300">
						Partners
					</a>
					<a href="#" className="text-sm hover:text-gray-300">
						Programme
					</a>
				</div>
			</div>
			{/* Footer */}
			<section className="pt-4">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex flex-wrap items-center gap-x-6">
							<img src="/icons/tech_logo_white.svg" alt="bgis-logo" />
							<img
								src="/icons/uk_logo_white.svg"
								alt="uk-logo"
								className="h-10"
							/>
							<img
								src="/icons/ub_logo_white.svg"
								alt="bgis-logo"
								className="h-10"
							/>
							<img src="/icons/spurt_logo_white.svg" alt="bgis-logo" />
						</div>

						<div className="flex flex-wrap items-center gap-x-6">
							{[
								// {
								// 	icon: 'ri:linkedin-fill',
								// 	href: '',
								// },
								// {
								// 	icon: 'basil:facebook-solid',
								// 	href: 'mailto:bgis@spurt.group',
								// },
								{
									icon: 'ri:instagram-line',
									href: 'https://www.instagram.com/bgi_startups/',
								},
							].map((item, index) => (
								<button
									key={index}
									className="border cursor-pointer rounded-full p-3 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all">
									<a href={item.href} rel="noopener noreferrer">
										<Icon icon={item.icon} width="20" height="20" />
									</a>
								</button>
							))}
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default FooterSection;
