
import React from "react";
import Navigation from "../Nav";

function Header(props) {
	const { sections = [], currentSection, setCurrentSection } = props;

	return (
		<div className="mb-2">
			<header className="py-3">
				<div className="">
					<div className="container">
						<div className="text-center">
							<h1 className="navTitle">Oindrila Talukder</h1>
						</div>
						<nav className="text-center">
							<Nav
								sections={sections}
								currentSection={currentSection}
								setCurrentSection={setCurrentSection}
							></Nav>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;