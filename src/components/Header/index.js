
import React from "react";
import Nav from "../Nav";

function Header(props) {
	const { categories = [], currentCategory, setCurrentCategory } = props;

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
								categories={categories}
								currentCategory={currentCategory}
								setCurrentCategory={setCurrentCategory}
							></Nav>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;