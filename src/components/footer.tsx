const FooterSection = () => {
	const links = [
		"About", 
		"Skills", 
		"Experience",
		// "Projects"
	]
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative mt-12 bg-black/20 backdrop-blur-lg">
			{/* Gradient Line */}
			<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50"></div>

			{/* Background Glow */}
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

			<div className="max-w-7xl mx-auto px-6 py-8">
				<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
					
					{/* Left - Brand & Contact */}
					<div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
						<div className="text-center md:text-left">
							<h2 className="text-2xl font-outfit font-bold tracking-wide text-sky-500">
								Harshit
							</h2>
							<p className="text-white/50 text-sm mt-1">
								Backend Developer + AI Engineer
							</p>
						</div>

						<div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/60">
							<a 
								href="mailto:pawarharshit26@gmail.com" 
								className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300"
							>
								<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								pawarharshit26@gmail.com
							</a>
							<a 
								href="tel:+917697621816" 
								className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300"
							>
								<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
								+917697621816
							</a>
						</div>
					</div>

					{/* Right - Links & Socials */}
					<div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
						<ul className="flex items-center gap-6">
							{links.map((item) => (
								<li key={item}>
									<a 
										href={`#${item.toLowerCase()}`}
										className="text-white/60 hover:text-sky-400 text-sm font-medium transition-colors duration-300"
									>
										{item}
									</a>
								</li>
							))}
						</ul>

						<div className="flex items-center gap-4">
							<a 
								href="https://github.com/pawarharshit26" 
								target="_blank" 
								rel="noreferrer"
								className="text-white/60 hover:text-sky-400 transition-colors duration-300"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
								</svg>
							</a>
							<a 
								href="https://www.linkedin.com/in/pawarharshit26/" 
								target="_blank" 
								rel="noreferrer"
								className="text-white/60 hover:text-sky-400 transition-colors duration-300"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				{/* Copyright - Integrated cleanly */}
				<div className="mt-8 pt-6 border-t border-white/5 text-center">
					<p className="text-white/30 text-xs">
						© {currentYear}  Harshit. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;