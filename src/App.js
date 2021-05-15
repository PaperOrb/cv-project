import React, { useState } from "react";
import ResumeCard from "./components/ResumeCard";
import "./styles/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

function App() {
  const [sections, setSections] = useState(["personal", "education", "experience"]);
  // const cardComponents = cards.map((card) => console.log(card));

  let gotoNextSection = () => {
    const copy = [...sections];
    const firstele = copy.shift();
    copy.push(firstele);
    setSections(copy);
  };

  let gotoPrevSection = () => {
    const copy = [...sections];
    const lastEle = copy.pop();
    copy.unshift(lastEle);
    setSections(copy);
  };

  let handleEvent = (event) => {
    event.preventDefault();
    let { name } = event.target;
    if (name === "Previous") {
      gotoPrevSection();
      console.log(sections);
    } else {
      gotoNextSection();
      console.log(sections);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <h1>CV Builder</h1>
      </nav>

      <main>
        <nav className="resume-nav">
          <h1 className={"resume-nav__header " + (sections[0] === "personal" ? "resume-nav__header-underline" : "")}>
            Personal
          </h1>
          <h1 className={"resume-nav__header " + (sections[0] === "education" ? "resume-nav__header-underline" : "")}>
            Education
          </h1>
          <h1 className={"resume-nav__header " + (sections[0] === "experience" ? "resume-nav__header-underline" : "")}>
            Experience
          </h1>
        </nav>

        <form className="resume-form">
          <ResumeCard section={sections[0]} />
          <div className="button-container">
            <button className="btn add-new-btn">Add New {sections[0].replace(/\b\w/g, (l) => l.toUpperCase())}</button>
          </div>

          <div className="button-container">
            <button className="btn" name="Previous" onClick={handleEvent}>
              Previous
            </button>
            <button className="btn" name="Next" onClick={handleEvent}>
              Next
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
