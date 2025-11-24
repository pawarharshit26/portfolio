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
    },
	{
		name: "Third party integrations",
		icon: <PaintBrushIcon className="w-10 h-10" />,
		list: ["Twilio", "Razorpay", "Google Cloud TTS"],
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
						className="bg-gray-800 p-6 rounded-lg flex flex-col items-center"
					>
						<div className="text-blue-500">{skill.icon}</div>
						<h2 className="text-2xl font-bold mt-4">{skill.name}</h2>
						<ul className="mt-4 text-center">
							{skill.list.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};

export default SkillsSection;
