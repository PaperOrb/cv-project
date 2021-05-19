import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = ({ componentsData, saveComponentsData, currentSectionIndex, currentCompIndex }) => {
  const [experience, setExperience] = useState(componentsData);

  let saveData = (data) => {
    saveComponentsData((prevComponentArr) => {
      let copy = [...prevComponentArr];
      copy[currentSectionIndex][currentCompIndex] = data;
      return copy;
    });
  };

  let handleInput = (event) => {
    let { name, value, type } = event.target;
    const experienceCopy = { ...experience };
    experienceCopy[name] = value;
    if (type === "text") setExperience(experienceCopy);
    saveData(experienceCopy);
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
