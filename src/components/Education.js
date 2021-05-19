import React, { useState } from "react";
import FormHeader from "./FormHeader";

const Education = ({ componentsData, currentCompIndex, handleInput }) => {
  const [education, setEducation] = useState(componentsData);

  let inputCallback = (event) => {
    handleInput(event, currentCompIndex, education, setEducation);
  };

  return (
    <div className="resume-card">
      <FormHeader formIndex={currentCompIndex} sectionTitle="Education" />

      <div className="input-grid">
        <input type="text" value={education.name || ""} name="name" placeholder="Name" onChange={inputCallback} />
        <input type="text" value={education.age || ""} name="age" placeholder="Age" onChange={inputCallback} />
        <input
          type="text"
          value={education.address || ""}
          name="address"
          placeholder="Address"
          onChange={inputCallback}
        />
      </div>
    </div>
  );
};

export default Education;
