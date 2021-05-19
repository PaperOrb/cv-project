import React, { useState } from "react";
import FormHeader from "./FormHeader";

const Experience = ({ componentsData, saveData, currentCompIndex }) => {
  const [experience, setExperience] = useState(componentsData);

  let handleInput = (event) => {
    let { name, value, type } = event.target;
    const experienceCopy = { ...experience };
    experienceCopy[name] = value;
    if (type === "text") setExperience(experienceCopy);
    saveData(experienceCopy, currentCompIndex);
  };

  return (
    <div className="resume-card">
      <FormHeader formIndex={currentCompIndex} sectionTitle="Experience" />

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
