const SponsorSection = () => {
	return (
		<section id="our-partners" className="py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-helvetica-neue-bold text-center text-[#151D48] mb-12">
					Sponsors & Partners
				</h2>
				<div className="flex flex-wrap justify-center items-center gap-12">
					<img src="/icons/tech-logo.svg" alt="bgis-logo" className="h-14" />
					<img src="/icons/uk-logo.svg" alt="uk-logo" className="h-14" />
					<img src="/icons/ub-logo.svg" alt="bgis-logo" className="h-14" />
					<img src="/icons/spurt-logo.svg" alt="bgis-logo" className="h-14" />
				</div>
			</div>
		</section>
	);
};

export default SponsorSection;
