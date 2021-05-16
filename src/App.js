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
  const [sections, setSections] = useState(() => {
    return [<Personal key={1} />, <Education key={2} />, <Experience key={3} />];
  });
  const [CurrentSection, setCurrentSection] = useState(() => 0);
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  let handleChange = (event) => {
    event.preventDefault();
    let { name } = event.target;
    if (name === "Previous") {
      setCurrentSection((prevCurrentSection) => {
        if (CurrentSection < 1) {
          return 2;
        } else {
          return --prevCurrentSection;
        }
      });
    } else {
      setCurrentSection((prevCurrentSection) => {
        if (CurrentSection > 1) {
          return 0;
        } else {
          return ++prevCurrentSection;
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
        <ResumeNav sections={sections} />
        <form className="resume-form">
          {sections[CurrentSection]}
          {console.log(sections[CurrentSection])}
          <ResumeButtons sections={"sections.toString.toLowerCase()"} handleChange={handleChange} />
        </form>
      </main>
    </div>
  );
}

export default App;
