import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Personal = () => {
  const [personal, setPersonal] = useState(() => {
    return {
      name: "",
      age: "",
      address: "",
    };
  });

  let handleChange = (event) => {
    event.preventDefault();
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
        {console.log(personal)}
        <input type="text" value={personal.name} name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" value={personal.age} name="age" placeholder="Age" onChange={handleChange} />
        <input type="text" value={personal.address} name="address" placeholder="Address" onChange={handleChange} />
      </div>
    </div>
  );
};

export default Personal;
