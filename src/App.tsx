import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="min-h-screen w-full bg-black text-white">
			<Navbar />

			{/* Your sections */}
			<section id="about" className="h-screen p-20">
				<h1 className="text-4xl font-bold">About Section</h1>
			</section>

			<section id="skills" className="h-screen p-20">
				<h1 className="text-4xl font-bold">Skills Section</h1>
			</section>

			<section id="experience" className="h-screen p-20">
				<h1 className="text-4xl font-bold">Experience Section</h1>
			</section>

			<section id="projects" className="h-screen p-20">
				<h1 className="text-4xl font-bold">Projects Section</h1>
			</section>

			<section id="blogs" className="h-screen p-20">
				<h1 className="text-4xl font-bold">Blogs Section</h1>
			</section>

			<section id="contact" className="h-screen p-20">
				<h1 className="text-4xl font-bold">Contact Section</h1>
			</section>
		</div>
	);
}

export default App;
