import {
    CircleStackIcon,
    CodeBracketIcon,
    CpuChipIcon,
    PaintBrushIcon,
    WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";

const skills = [
    {
        name: "Core Languages",
        icon: <CodeBracketIcon className="w-10 h-10" />,
        list: ["Python", "Golang"],
    },
    {
        name: "Backend Frameworks",
        icon: <CpuChipIcon className="w-10 h-10" />,
        list: ["Django, Django Rest Framework", "FastAPI", "Gin", "WebSockets", "pytest"],
    },
    {
        name: "Applied AI & Utilities",
        icon: <CpuChipIcon className="w-10 h-10" />,
        list: ["LangChain", "LangGraph", "Pydantic", "Celery", "Asyncio"],
    },
    {
        name: "Data & Streaming",
        icon: <CircleStackIcon className="w-10 h-10" />,
        list: ["PostgreSQL", "Couchbase", "Redis", "Kafka", "MongoDB"],
    },
    {
        name: "Cloud & DevOps",
        icon: <WrenchScrewdriverIcon className="w-10 h-10" />,
        list: ["AWS", "Docker", "Kubernetes", "Git", "GitHub Actions", "Grafana"],
    },
    {
        name: "Architecture & Design",
        icon: <PaintBrushIcon className="w-10 h-10" />,
        list: ["Clean Architecture", "SOLID Principles", "Microservices", "Dependency Injection", "TDD", "Third-party API Integration"],
    }
];

const SkillsSection = () => {
	return (
		<section id="skills" className="p-20">
			<h1 className="text-center text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-500 to-sky-500 animate-gradient-x">
				Technical Skills
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
				{skills.map((skill) => (
					<div
						key={skill.name}
						className="group relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col items-center"
					>
						{/* Glassmorphism overlay */}
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-sky-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

						<div className="relative z-10 flex flex-col items-center w-full">
							<div className="text-blue-500 transform group-hover:scale-110 transition-transform duration-300 mb-4">
								{skill.icon}
							</div>
							<h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-6">
								{skill.name}
							</h2>
							<div className="w-full flex flex-wrap justify-center gap-2">
								{skill.list.map((item) => (
									<span
										key={item}
										className="px-3 py-1 text-sm text-gray-400 bg-gray-800/50 rounded-full border border-gray-700/50 group-hover:text-gray-200 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-300"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default SkillsSection;
