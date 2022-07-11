import React from "react";

function Nav(props) {
	const { sections = [], currentSection, setCurrentSection } = props;

	return (
		<div className="navbar">
			{sections.map((section) => (
				<li
					className={`nav px-1 mt-3 col-3 ${
						currentSection === section.name && "selectedNav"
					}`}
					key={section.name}
				>
					<span
						onClick={() => {
							setCurrentSection(section.name);
						}}
					>
						{section.name}
					</span>
				</li>
			))}
		</div>
	);
}


  

export default Nav;