import profileImg from "../assets/profile.jpg";
import NavItem from "./navItem";
import {
	UserIcon,
	BriefcaseIcon,
	CodeBracketIcon,
	SparklesIcon,
	PencilIcon,
} from "@heroicons/react/24/outline";

import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
	return (
		<nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50">
			<div className="max-w-7xl mx-auto relative">
				{/* Divider */}
				<div
					className="absolute bottom-0 left-0 w-full h-[1px]
          bg-gradient-to-r from-white/40 via-blue-400/40 to-white/100"
				></div>

				{/* Navbar Layout */}
				<div className="flex items-center justify-between px-6 py-4">
					{/* LEFT — Logo */}
					<div className="flex items-center gap-3 cursor-pointer">
						<img
							src={profileImg}
							alt="profile"
							className="w-10 h-10 rounded-full object-cover"
						/>
						<span className="text-2xl tracking-wide ml-2">Harshit</span>
					</div>

					{/* CENTER — Nav Menu */}
					<ul className="flex text-white/80 items-center absolute left-1/2 transform -translate-x-1/2">
						<li>
							<NavItem href="#about" Icon={UserIcon}>
								About
							</NavItem>
						</li>
						<li>
							<NavItem href="#skills" Icon={CodeBracketIcon}>
								Skills
							</NavItem>
						</li>
						<li>
							<NavItem href="#experience" Icon={BriefcaseIcon}>
								Experience
							</NavItem>
						</li>
						<li>
							<NavItem href="#projects" Icon={SparklesIcon}>
								Projects
							</NavItem>
						</li>
						<li>
							<NavItem href="#blogs" Icon={PencilIcon}>
								Blogs
							</NavItem>
						</li>
					</ul>

					{/* RIGHT — Contact Button (Rounded bluish icon) */}
					<a
						href="#contact"
						className="w-10 h-10 flex items-center justify-center rounded-full  bg-blue-500 hover:bg-blue-400 transition-colors duration-200 cursor-pointer"
					>
						<EnvelopeIcon className="w-5 h-5 text-black" />
					</a>
				</div>
			</div>
		</nav>
	);
}
