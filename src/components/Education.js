import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Education(props) {
  const [education, setEducation] = useState({
    name: "",
    age: "",
    address: "",
  });

  let handleChange = (event) => {
    event.preventDefault();
    let { name, value, type } = event.target;
    if (type === "text") {
      setEducation((prevEducation) => ({
        ...prevEducation,
        [name]: value,
      }));
      console.log(education);
    }
  };

  return (
    <div className="resume-card">
      <header className="resume-card__header">
        <h3 className="resume-card__h3">Education</h3>
        <FontAwesomeIcon icon={["fas", "trash"]} className="trash-icon" />
      </header>

      <div className="input-grid">
        <input type="text" value={education.name} name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" value={education.age} name="age" placeholder="Age" onChange={handleChange} />
        <input type="text" value={education.address} name="address" placeholder="Address" onChange={handleChange} />
      </div>
    </div>
  );
}

export default Education;
