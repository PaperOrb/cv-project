import React, { useState } from "react";
import FormHeader from "./FormHeader";

const Personal = ({ componentsData, currentCompIndex, handleInput }) => {
  const [personal, setPersonal] = useState(componentsData);

  let inputCallback = (event) => {
    handleInput(event, currentCompIndex, personal, setPersonal);
  };

  return (
    <div className="resume-card">
      <FormHeader formIndex={currentCompIndex} sectionTitle="Personal" />

      <div className="input-grid">
        <input type="text" value={personal.name || ""} name="name" placeholder="Name" onChange={inputCallback} />
        <input type="text" value={personal.age || ""} name="age" placeholder="Age" onChange={inputCallback} />
        <input
          type="text"
          value={personal.address || ""}
          name="address"
          placeholder="Address"
          onChange={inputCallback}
        />
      </div>
    </div>
  );
};

export default Personal;
