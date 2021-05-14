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

  let gotoPrevSection = () => {
    const copy = [...sections];
    copy.push(copy.shift());
    setSections(copy);
  };

  let gotoNextSection = () => {
    const copy = [...sections];
    copy.unshift(copy.pop());
    setSections(copy);
  };

  let handleEvent = (event) => {
    event.preventDefault();
    let { name } = event.target;
    if (name === "Previous") {
      gotoPrevSection();
    } else {
      gotoNextSection();
    }
  };

  return (
    <div>
      <nav className="navbar">
        <h1>CV Builder</h1>
      </nav>

      <main>
        <nav className="resume-nav">
          <h1 className="resume-nav__header">Personal</h1>
          <h1 className={"resume-nav__header " + 1}>Education</h1>
          <h1 className="resume-nav__header">Experience</h1>
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
