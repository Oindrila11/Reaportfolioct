import React from 'react';
import {  FcBusinesswoman} from "react-icons/fc";
function Nav() {
const categories = [
    {
      name: "portfolio",
      description:
        "Pictures, links of projects",
    },
    { name: "resume", description: "My resume reflecting my works" },
    
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  return (
    <header>
    <h2>
      <a href="/">
      <span role="img" aria-label="camera"><FcBusinesswoman /></span>Oindrila
      </a>
    </h2>
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a href="#about">
            About me
          </a>
        </li>
        <li>
          <span>Contact</span>
        </li>
         {categories.map((category) => (
          <li
            className="mx-1"
            key={category.name}
          >
            <span onClick={categorySelected}>
              {category.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  </header>
  );
}

export default Nav;