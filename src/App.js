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
  const sectionsStrings = ["Personal", "Education", "Experience"];
  const [personal, setPersonal] = useState([{}]);
  const [education, setEducation] = useState([{}]);
  const [experience, setExperience] = useState([{}]);
  let CurrentComponent = [Personal, Education, Experience][currentSectionIndex];
  let currentSectionState = [personal, education, experience][currentSectionIndex];
  let currentFormSetState = [setPersonal, setEducation, setExperience][currentSectionIndex];

  let newComponentData = () => {
    const copy = JSON.parse(JSON.stringify(currentSectionState));
    copy.push({});
    currentFormSetState(copy);
  };

  let deleteForm = (formIndex) => {
    currentFormSetState((prevComponentArr) => {
      let copy = JSON.parse(JSON.stringify(prevComponentArr));
      copy.splice(formIndex, 1);
      return copy;
    });
  };

  let newComponent = (Component, index) => {
    return (
      <Component
        handleInput={handleInput}
        currentFormState={currentSectionState[index]}
        formIndex={index}
        key={index}
      />
    );
  };

  let renderComponents = () => {
    let currentSection = JSON.parse(JSON.stringify(currentSectionState));
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

  let handleInput = (event, formIndex) => {
    let { name, value, type } = event.target;
    let formObj = { ...currentSectionState[formIndex] };
    formObj[name] = value;
    const sectionCopy = JSON.parse(JSON.stringify(currentSectionState));
    sectionCopy[formIndex] = formObj;
    if (type === "text") currentFormSetState(sectionCopy);
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
