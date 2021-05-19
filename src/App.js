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
    const copy = JSON.parse(JSON.stringify(componentsData));
    copy[currentSectionIndex].push({});
    saveComponentsData(copy);
  };

  let saveData = (data, index) => {
    saveComponentsData((prevComponentArr) => {
      let copy = JSON.parse(JSON.stringify(prevComponentArr));
      copy[currentSectionIndex][index] = data;
      return copy;
    });
  };

  let deleteForm = (formIndex) => {
    saveComponentsData((prevComponentArr) => {
      let copy = JSON.parse(JSON.stringify(prevComponentArr));
      copy[currentSectionIndex].splice(formIndex, 1);
      return copy;
    });
  };

  let newComponent = (Component, index, data = {}) => {
    return (
      <Component
        deleteForm={deleteForm}
        handleInput={handleInput}
        componentsData={data}
        currentCompIndex={index}
        key={index}
      />
    );
  };

  let renderComponents = () => {
    let currentSection = JSON.parse(JSON.stringify(componentsData[currentSectionIndex]));
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
    const dataCopy = JSON.parse(JSON.stringify(data));
    dataCopy[name] = value;
    if (type === "text") setData(dataCopy);
    saveData(dataCopy, currentCompIndex);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("yep");
  };

  return (
    <div>
      <nav className="navbar">
        <h1>CV Builder</h1>
      </nav>

      <main>
        <ResumeNav sectionTitle={sectionsStrings[currentSectionIndex]} />
        <FormContext.Provider value={deleteForm}>
          <form className="resume-form" onSubmit={handleSubmit}>
            {renderComponents()}
            <ResumeButtons
              newComponentData={newComponentData}
              sectionTitle={sectionsStrings[currentSectionIndex]}
              navigateSections={navigateSections}
            />
          </form>
        </FormContext.Provider>
      </main>
    </div>
  );
}

export default App;
export const FormContext = React.createContext();
