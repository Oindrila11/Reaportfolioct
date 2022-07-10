import React from 'react';
import {  FcBusinesswoman} from "react-icons/fc";
function Nav() {

    const [categories] = useState([
    {
      name: "portfolio",
  
    },
    { name: "resume", },
    
    
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

 return (
    <header className="flex-row px-1">
        <h2>
            <a data-testid="link" href="/">
            
      <span role="img" aria-label="camera">
        {""}
        <FcBusinesswoman /></span> {""}
        Oindrila  
            </a>
        </h2>
        <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`} key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
 );
            }

  

export default Nav;