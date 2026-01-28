

import { BriefcaseIcon } from "@heroicons/react/24/outline";

const experiences = [
	{
		period: "Nov 2025 - Present",
		company: "Creditas (via Thotnr)",
		location: "Greater Noida",
		position: "Senior Backend Developer",
		details: [
			"Built a real-time call campaign dashboard service processing ~250K call status events/day across ~50K calls, persisting state changes in the database and streaming live updates to the UI using Server-Sent Events (SSE), enabling instant failure detection, real-time call tracking, and accurate campaign progress calculation.",
			"Integrate google text to speech api for audio generation in voice bot",
			"Developed the client onboarding flow",
			"Apply the best practices for code quality and maintainability",
		],
		technologies: "Django, Django Channels, Websockets, Celery, Mysql, FastAPI, Google Cloud",
	},
	// {
	// 	period: "Apr 2025 - Aug 2025",
	// 	company: "Prashant Adwait Foundation",
	// 	location: "Greater Noida",
	// 	position: "Senior Backend Developer",
	// 	details: [
	// 		"Developed a Follow-up Management System that streamlined outreach operations by enabling efficient call logging and automated follow-up scheduling, resulting in measurable increase in operational efficiency",
	// 		"Integrated Razorpay API to fully automate refund workflows after subscription cancellations, eliminating manual refund tasks and saving measurable bandwidth of the finance team",
	// 		"Engineered a post tagging system using OpenAI APIs that intelligently categorized thousands of posts, improving search precision and content recommendations",
	// 	],
	// 	technologies: "Go, Gin, Couchbase, Clean Architecture, Dependency Injection, SOLID principles,",
	// },
	{
		period: "Sep 2022 - Mar 2025",
		company: "RDash",
		location: "Gurugram",
		position: "Backend Developer I -> II",
		details: [
			"Designed and architected core modules—including a Notification System and Activity Manager—within a modular monolith structure, ensuring long-term maintainability and scalability for the platform",
			"Developed an event-driven notification system to deliver approx 5k notifications per day using Celery, Redis, and webhooks for critical workflow updates. Enhanced reliability with retry mechanisms and dead-letter queue for failed notifications",
			"Optimized REST API performance by migrating DRF validation to Pydantic and implementing PostgreSQL triggers, cutting average response times by 60%",
			"Implemented a Role-Based Access Control (RBAC) system to ensure secure and granular user permissions and enforce data-level access policies across multiple modules",
			"Practiced Clean Architecture, SOLID principles, Dependency Injection, and TDD to ensure a highly maintainable and testable codebase. Mentored junior developers on best practices and project delivery",
			"Built end-to-end approval request workflows for expense approvals, streamlining financial processes and improving accountability",
			"Collaborated with DevOps team to setup CI/CD pipelines and automated deployments",
		],
		technologies: "Python, Django, Django Rest Framework, PostgreSQL, Celery, Twilio, Pydantic, Clean Architecture, SOLID principles, Dependency Injection, TDD",
	},
];

const ExperienceSection = () => {
	return (
		<section id="experience" className="min-h-screen p-8 md:p-20">
			<h1 className="text-center text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-500 to-sky-500 animate-gradient-x mb-16">
				Professional Experience
			</h1>

			<div className="max-w-6xl mx-auto space-y-8">
				{experiences.map((exp, index) => (
					<div
						key={index}
						className="group relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
					>
						{/* Glassmorphism overlay */}
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-sky-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

						<div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
							{/* Left Section - Time, Company, Position */}
							<div className="md:col-span-1 space-y-4 border-b md:border-b-0 md:border-r border-gray-700/50 pb-6 md:pb-0 md:pr-8 flex flex-col justify-center">
								{/* Period */}
								<div className="flex items-center gap-3">
									<BriefcaseIcon className="w-6 h-6 text-blue-500" />
									<span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
										{exp.period}
									</span>
								</div>

								{/* Company */}
								<h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
									{exp.company}
								</h3>

								{/* Position */}
								<div className="inline-block">
									<p className="text-lg font-medium bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
										{exp.position}
									</p>
									<div className="h-0.5 bg-gradient-to-r from-blue-500 to-sky-500 mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
								</div>

								{/* Technologies */}
								<div className="pt-4">
									<div className="flex flex-wrap gap-2">
										{exp.technologies.split(",").filter(tech => tech.trim()).map((tech, i) => (
											<span
												key={i}
												className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
											>
												{tech.trim()}
											</span>
										))}
									</div>
								</div>
							</div>

							{/* Right Section - Details in Bullet Points */}
							<div className="md:col-span-2 flex flex-col justify-center">
								<ul className="space-y-3">
									{exp.details.map((detail, idx) => (
										<li
											key={idx}
											className="flex items-start gap-3 text-gray-300 group/item hover:text-white transition-colors duration-200"
										>
											<span className="text-blue-500 mt-1.5 flex-shrink-0">
												<svg
													className="w-2 h-2"
													fill="currentColor"
													viewBox="0 0 8 8"
												>
													<circle cx="4" cy="4" r="4" />
												</svg>
											</span>
											<span className="leading-relaxed">{detail}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ExperienceSection;
