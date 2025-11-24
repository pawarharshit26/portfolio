// src/components/NavItem.tsx
import React from "react";

// 1. Define the props interface
interface NavItemProps {
	href: string;
	children: React.ReactNode;
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// 2. Use the interface in the component
const NavItem: React.FC<NavItemProps> = ({ href, children, Icon }) => {
	return (
		<a
			href={href}
			className="flex items-center gap-2 text-sm text-white/80 hover:text-white rounded-xl px-6 py-2 hover:bg-sky-500/10 transition-all duration-200"
			onClick={(e) => {
				e.preventDefault();
				const target = document.querySelector(href);
				if (target) {
					target.scrollIntoView({ behavior: "smooth" });
				}
			}}
		>
			{Icon && <Icon className="w-5 h-5" />}
			{children}
		</a>
	);
};

export default NavItem;
