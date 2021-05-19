import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = ({ componentsData, saveComponentsData, currentSectionIndex, currentCompIndex }) => {
  const [education, setPersonal] = useState(componentsData);

  let saveData = () => {
    saveComponentsData((prevComponentArr) => {
      let copy = [...prevComponentArr];
      copy[currentSectionIndex][currentCompIndex] = education;
      return copy;
    });
  };

  let handleInput = (event) => {
    let { name, value, type } = event.target;
    const personalCopy = { ...education };
    personalCopy[name] = value;
    if (type === "text") setPersonal(personalCopy);
    saveData();
  };

  return (
    <div className="resume-card">
      <header className="resume-card__header">
        <h3 className="resume-card__h3">Education</h3>
        <FontAwesomeIcon icon={["fas", "trash"]} className="trash-icon" />
      </header>

      <div className="input-grid">
        <input type="text" value={education.name || ""} name="name" placeholder="Name" onChange={handleInput} />
        <input type="text" value={education.age || ""} name="age" placeholder="Age" onChange={handleInput} />
        <input
          type="text"
          value={education.address || ""}
          name="address"
          placeholder="Address"
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default Education;
