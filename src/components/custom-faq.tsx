/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ICustomProps {
	options: {
		header: string;
		desc: string[];
	}[];
}

const CustomFAQs = (props: ICustomProps) => {
	const [activeIndex, setActiveIndex] = useState<any>([]);

	const handleToggle = (option: string) => {
		setActiveIndex((prev: any) => {
			if (prev?.includes(option)) {
				return prev.filter((exisitingItem: any) => exisitingItem !== option);
			} else {
				return [...prev, option];
			}
		});
	};

	return (
		<>
			{props.options.map((a, index) => {
				const active = activeIndex.includes(a.header);

				return (
					<div
						key={index}
						className={`${
							active ? 'bg-[rgba(244,178,51,0.05)]' : 'bg-white'
						} w-full p-5 bg-white rounded-lg shadow-sm self-start`}>
						<div
							onClick={() => {
								handleToggle(a.header);
							}}
							className={`flex gap-4 px-1 bg-white hover:cursor-pointer w-full`}>
							<button>
								<img
									src="/icons/plus.svg"
									alt="plus"
									className={`${
										active ? 'rotate-45' : ''
									} w-4.5 h-4.5 duration-300 transition-all cursor-pointer`}
								/>
							</button>
							<p className="text-sm text-[#06241B] font-helvetica-neue-medium">
								{a.header}
							</p>
						</div>
						<AnimatePresence>
							{active && (
								<motion.div className="py-3 text-sm text-[#6D737A] px-1 font-light overflow-hidden">
									{a.desc.map((b, index) => (
										<motion.div
											initial={{ y: -10, height: 0 }}
											animate={{ y: 0, height: 'auto' }}
											exit={{ y: -5, height: 0 }}
											key={index}
											className="transition-transform duration-300">
											{b}
										</motion.div>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				);
			})}
		</>
	);
};

export default CustomFAQs;
