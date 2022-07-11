
import React, { useState } from "react";

import About from "./components/About";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";


function App() {
  const [categories] = useState([
    {
      name: "About Me",
     
    },
    { name: "Contact", 
  },
    {
      name: "Portfolio",
    },
    {
      name: "Resume",
    },
  
  ]);


  const [currentCategory, setCurrentCategory] = useState(categories[0].name);

  return (
    <div className='mainContainer'>
      <Header
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}>
      </Header>

      <main className="content-wrapper">
        {(() => {
          if (currentCategory === 'About') {
            return (
              <div>
                <About></About>
              </div>
            );
          }
          else if (currentCategory === 'Portfolio') {
            return (
              <div>
                <Portfolio></Portfolio>
              </div>
            );
          }
          else if (currentCategory === 'Contact') {
            return (
              <div>
                <ContactForm></ContactForm>
              </div>
            );
          } else if (currentCategory === 'Resume') {
            return (
              <div>
                <Resume></Resume>
              </div>

            );
          }
          
        })()}
      </main>
      <Footer></Footer>
    </div>
  );
}
  
  export default App;