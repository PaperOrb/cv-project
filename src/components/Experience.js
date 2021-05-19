import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = ({ componentsData, saveComponentsData, currentSectionIndex, currentCompIndex }) => {
  const [experience, setPersonal] = useState(componentsData);
  saveComponentsData((prevComponentArr) => {
    let copy = [...prevComponentArr];
    copy[currentSectionIndex][currentCompIndex] = experience;
    return copy;
  });
  let saveData = () => {};

  let handleInput = (event) => {
    let { name, value, type } = event.target;
    const personalCopy = { ...experience };
    personalCopy[name] = value;
    if (type === "text") setPersonal(personalCopy);
    // saveData();
  };

  return (
    <div className="resume-card">
      <header className="resume-card__header">
        <h3 className="resume-card__h3">Experience</h3>
        <FontAwesomeIcon icon={["fas", "trash"]} className="trash-icon" />
      </header>

      <div className="input-grid">
        <input type="text" value={experience.name || ""} name="name" placeholder="Name" onChange={handleInput} />
        <input type="text" value={experience.age || ""} name="age" placeholder="Age" onChange={handleInput} />
        <input
          type="text"
          value={experience.address || ""}
          name="address"
          placeholder="Address"
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default Experience;
