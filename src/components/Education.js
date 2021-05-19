import React, { useState } from "react";
import FormHeader from "./FormHeader";

const Education = ({ componentsData, saveData, currentCompIndex }) => {
  const [education, setEducation] = useState(componentsData);

  let handleInput = (event) => {
    let { name, value, type } = event.target;
    const educationCopy = { ...education };
    educationCopy[name] = value;
    if (type === "text") setEducation(educationCopy);
    saveData(educationCopy, currentCompIndex);
  };

  return (
    <div className="resume-card">
      <FormHeader formIndex={currentCompIndex} sectionTitle="Education" />

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
