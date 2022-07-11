import React from "react";

function Nav (props)  {
	const { categories = [], currentCategory, setCurrentCategory } = props;

	return (
		<div className="navbar">
			{categories.map((category) => (
				<li
					className={`nav px-1 mt-3 col-3 ${
						currentCategory === category.name && "selectedNav"
					}`}
					key={category.name}
				>
					<span
						onClick={() => {
							setCurrentCategory(category.name);
						}}
					>
						{category.name}
					</span>
				</li>
			))}
		</div>
	);
}


  

export default Nav;