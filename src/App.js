import React, { useState } from "react";
import ResumeNav from "./components/ResumeNav";
import ResumeButtons from "./components/ResumeButtons";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Personal from "./components/Personal";
import "./styles/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

function App() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(() => 0);
  const [componentsArr, saveComponentsArr] = useState([{}, {}, {}]); // persists the personal, education, and experience states upon umount
  const sections = [Personal, Education, Experience];
  const sectionsStrings = ["Personal", "Education", "Experience"];
  let CurrentComponent = sections[currentComponentIndex];

  let handleClick = (event) => {
    event.preventDefault();
    let { name } = event.target;
    if (name === "Previous") {
      setCurrentComponentIndex((prevCurrentComponentIndex) => {
        if (currentComponentIndex < 1) {
          return 2;
        } else {
          return --prevCurrentComponentIndex;
        }
      });
    } else {
      setCurrentComponentIndex((prevCurrentComponentIndex) => {
        if (currentComponentIndex > 1) {
          return 0;
        } else {
          return ++prevCurrentComponentIndex;
        }
      });
    }
  };

  return (
    <div>
      <nav className="navbar">
        <h1>CV Builder</h1>
      </nav>

      <main>
        <ResumeNav sectionTitle={sectionsStrings[currentComponentIndex]} />
        <form className="resume-form">
          <CurrentComponent
            componentsArr={componentsArr}
            saveComponentsArr={saveComponentsArr}
            currentComponentIndex={currentComponentIndex}
          />
          <ResumeButtons sectionTitle={sectionsStrings[currentComponentIndex]} handleClick={handleClick} />
        </form>
      </main>
    </div>
  );
}

export default App;
