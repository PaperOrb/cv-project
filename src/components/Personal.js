import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Personal = ({ componentsData, saveComponentsData, currentSectionIndex, currentCompIndex }) => {
  const [personal, setPersonal] = useState(componentsData);

  let saveData = (data) => {
    saveComponentsData((prevComponentArr) => {
      let copy = [...prevComponentArr];
      copy[currentSectionIndex][currentCompIndex] = data;
      return copy;
    });
  };

  let handleInput = (event) => {
    let { name, value, type } = event.target;
    const personalCopy = { ...personal };
    personalCopy[name] = value;
    if (type === "text") setPersonal(personalCopy);
    saveData(personalCopy);
  };

  return (
    <div className="resume-card">
      <header className="resume-card__header">
        <h3 className="resume-card__h3">Personal</h3>
        <FontAwesomeIcon icon={["fas", "trash"]} className="trash-icon" />
      </header>

      <div className="input-grid">
        <input type="text" value={personal.name || ""} name="name" placeholder="Name" onChange={handleInput} />
        <input type="text" value={personal.age || ""} name="age" placeholder="Age" onChange={handleInput} />
        <input type="text" value={personal.address || ""} name="address" placeholder="Address" onChange={handleInput} />
      </div>
    </div>
  );
};

export default Personal;
