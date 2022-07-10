
import React from "react";
import Navigation from "../Nav";

function Header(props) {
	const { sections = [], currentSection, setCurrentSection } = props;

	return (
		<div className="mb-3">
			<header className="py-2">
				<div className="">
					<div className="container">
						<div className="text-center">
							<h1 className="navTitle">Oindrila Talukder</h1>
						</div>
						<nav className="text-center">
							<Navigation
								sections={sections}
								currentSection={currentSection}
								setCurrentSection={setCurrentSection}
							></Navigation>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;