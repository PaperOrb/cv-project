import React, { useState } from "react";
import FormHeader from "./FormHeader";

const Experience = ({ componentsData, currentCompIndex, handleInput }) => {
  const [experience, setExperience] = useState(componentsData);

  let inputCallback = (event) => {
    handleInput(event, currentCompIndex, experience, setExperience);
  };

  return (
    <div className="resume-card">
      <FormHeader formIndex={currentCompIndex} sectionTitle="Experience" />

      <div className="input-grid">
        <input type="text" value={experience.name || ""} name="name" placeholder="Name" onChange={inputCallback} />
        <input type="text" value={experience.age || ""} name="age" placeholder="Age" onChange={inputCallback} />
        <input
          type="text"
          value={experience.address || ""}
          name="address"
          placeholder="Address"
          onChange={inputCallback}
        />
      </div>
    </div>
  );
};

export default Experience;
