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
  const [currentSectionIndex, setCurrentSectionIndex] = useState(() => 0);
  const [componentsData, saveComponentsData] = useState([[{}], [{}], [{}]]); // persists the personal, education, and experience states upon umount
  const sectionsStrings = ["Personal", "Education", "Experience"];
  let CurrentComponent = [Personal, Education, Experience][currentSectionIndex];

  let newComponentData = () => {
    const copy = [...componentsData];
    copy[currentSectionIndex].push({});
    saveComponentsData(copy);
  };

  let saveData = (data, index) => {
    saveComponentsData((prevComponentArr) => {
      let copy = [...prevComponentArr];
      copy[currentSectionIndex][index] = data;
      return copy;
    });
  };

  let newComponent = (Component, index, data = {}) => {
    return (
      <Component
        handleInput={handleInput}
        componentsData={data}
        saveData={saveData}
        currentCompIndex={index}
        key={index}
      />
    );
  };

  let renderComponents = () => {
    let currentSection = componentsData[currentSectionIndex];
    return currentSection.map((data, index) => {
      return newComponent(CurrentComponent, index, data);
    });
  };

  let navigateSections = (event) => {
    event.preventDefault();
    let { name } = event.target;
    if (name === "Previous") {
      setCurrentSectionIndex((prevCurrentComponentIndex) => {
        if (currentSectionIndex < 1) {
          return 2;
        } else {
          return --prevCurrentComponentIndex;
        }
      });
    } else {
      setCurrentSectionIndex((prevCurrentComponentIndex) => {
        if (currentSectionIndex > 1) {
          return 0;
        } else {
          return ++prevCurrentComponentIndex;
        }
      });
    }
  };

  let handleInput = (event, currentCompIndex, data, setData) => {
    let { name, value, type } = event.target;
    const dataCopy = { ...data };
    dataCopy[name] = value;
    if (type === "text") setData(dataCopy);
    saveData(dataCopy, currentCompIndex);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <nav className="navbar">
        <h1>CV Builder</h1>
      </nav>

      <main>
        <ResumeNav sectionTitle={sectionsStrings[currentSectionIndex]} />
        <form className="resume-form" onSubmit={handleSubmit}>
          {renderComponents()}
          <ResumeButtons
            newComponentData={newComponentData}
            sectionTitle={sectionsStrings[currentSectionIndex]}
            navigateSections={navigateSections}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
