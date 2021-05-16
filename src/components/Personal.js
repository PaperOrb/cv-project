import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Personal = ({ componentsArr, saveComponentsArr, currentComponentIndex }) => {
  const [personal, setPersonal] = useState(componentsArr[currentComponentIndex]);
  saveComponentsArr((prevComponentArr) => {
    prevComponentArr[currentComponentIndex] = personal;
    return prevComponentArr;
  });

  let handleInput = (event) => {
    let { name, value, type } = event.target;
    const personalCopy = { ...personal };
    personalCopy[name] = value;
    if (type === "text") setPersonal(personalCopy);
  };

  return (
    <div className="resume-card">
      <header className="resume-card__header">
        <h3 className="resume-card__h3">Personal</h3>
        <FontAwesomeIcon icon={["fas", "trash"]} className="trash-icon" />
      </header>

      <div className="input-grid">
        <input type="text" value={personal.name} name="name" placeholder="Name" onChange={handleInput} />
        <input type="text" value={personal.age} name="age" placeholder="Age" onChange={handleInput} />
        <input type="text" value={personal.address} name="address" placeholder="Address" onChange={handleInput} />
      </div>
    </div>
  );
};

export default Personal;
