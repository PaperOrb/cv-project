import React, { useState } from "react";
import FormHeader from "./FormHeader";

const Personal = ({ componentsData, saveData, currentCompIndex }) => {
  const [personal, setPersonal] = useState(componentsData);

  let handleInput = (event) => {
    let { name, value, type } = event.target;
    const personalCopy = { ...personal };
    personalCopy[name] = value;
    if (type === "text") setPersonal(personalCopy);
    saveData(personalCopy, currentCompIndex);
  };

  return (
    <div className="resume-card">
      <FormHeader formIndex={currentCompIndex} sectionTitle="Personal" />

      <div className="input-grid">
        <input type="text" value={personal.name || ""} name="name" placeholder="Name" onChange={handleInput} />
        <input type="text" value={personal.age || ""} name="age" placeholder="Age" onChange={handleInput} />
        <input type="text" value={personal.address || ""} name="address" placeholder="Address" onChange={handleInput} />
      </div>
    </div>
  );
};

export default Personal;
