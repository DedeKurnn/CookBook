import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<header className="w-full fixed backdrop-blur-lg z-50">
			<nav className="w-[90%] mx-auto flex justify-between items-center px-4 py-6">
                <span className="text-2xl font-bold">CookBook.</span>
				<ul className="flex gap-16 justify-end">
					<li>
						<NavLink to="..">Home</NavLink>
					</li>
					<li>
						<NavLink to="..">About</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
