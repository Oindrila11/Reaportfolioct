import React from "react";
import { BsGithub} from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa";

function Footer(){
    return (
        <div className="">
            <div className= "footer-list">
                <li className= "mx-3">
                    <a
                        target= "_blank"
                        rel="noreferrer"
                        href="https://github.com/Oindrila11"
                        className= "social-icon"> <span className="bi bi-github"></span><BsGithub />   
                    </a>
                </li>
                <li className="mx-3">
                
                    <a
                        target= "_blank"
                        rel="noreferrer"
                        href="  https://www.linkedin.com/in/oindrila-talukder-75b734132/"
                        className= "social-icon"><span className="bi bi-linkedin"></span> <BsLinkedin />   
                    </a>
            
        </li>
        <li className='mx-3'>
                    <a
                        target= "_blank"
                        rel="noreferrer"
                        href=" https://stackoverflow.com/users/18237353/oindrila"
                        className= "social-icon"> <span className="bi bi-stackoverflow"></span><FaStackOverflow />   
                    </a>
                    </li>
                    </div>
              
              
        
        </div>
    );
}

export default Footer