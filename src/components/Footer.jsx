const Footer = () => {
	return (
		<footer className="w-full bg-dark-green text-white mt-12">
			<div className="w-[90%] mx-auto px-4 py-8">
				<ul className="flex gap-8 justify-center">
					<li>About</li>
					<li>Frequently Asked Question</li>
					<li><a href="https://developer.edamam.com/edamam-docs-recipe-api">API Documentation</a></li>
					<li>Website Documentation</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
