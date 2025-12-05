import AboutSection from "./components/about";
import ExperienceSection from "./components/experience";
import FooterSection from "./components/footer";
import Navbar from "./components/navbar";
import SkillsSection from "./components/skills";

function App() {
	return (
		<div className="min-h-screen w-full bg-black text-white scroll-smooth">
			<Navbar />

			{/* Your sections */}
			<AboutSection />

			<SkillsSection />

			<ExperienceSection />

			{/* <section id="projects" className="h-screen p-20">
				<h1 className="text-4xl font-bold">Projects Section</h1>
			</section>

			<section id="blogs" className="h-screen p-20">
				<h1 className="text-4xl font-bold">Blogs Section</h1>
			</section>

			<section id="contact" className="h-screen p-20">
				<h1 className="text-4xl font-bold">Contact Section</h1>
			</section> */}

			<FooterSection />
		</div>
	);
}

export default App;
