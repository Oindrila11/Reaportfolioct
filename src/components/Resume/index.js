import React from "react";

function Resume() {
    return(
        <div className="resume">
            <h2 className="resumeForm" >
                Resume
            </h2>
            <a
              className="resumeLink"
              href="https://drive.google.com/file/d/1zdzlobllWyskDdHANnPQgON0cTUV4OGP/view?usp=sharing"
              download="Oindrila.pdf">
                See my resume
              </a>
        </div>
    );
}

export default Resume;