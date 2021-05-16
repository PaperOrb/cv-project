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
  const [sections, setSections] = useState([<Personal />, <Education />, <Experience />]);
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});
  let CurrentSection = sections[0];

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

  let handleChange = (event) => {
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
        <ResumeNav sections={sections} />
        <form className="resume-form">
          {CurrentSection}
          <ResumeButtons sections={"sections.toString.toLowerCase()"} handleChange={handleChange} />
        </form>
      </main>
    </div>
  );
}

export default App;
