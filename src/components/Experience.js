import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Experience(props) {
  const [experience, setExperience] = useState({
    name: "",
    age: "",
    address: "",
  });

  let handleChange = (event) => {
    event.preventDefault();
    let { name, value, type } = event.target;
    if (type === "text") {
      setExperience((prevExperience) => ({
        ...prevExperience,
        [name]: value,
      }));
      console.log(experience);
    }
  };

  return (
    <div className="resume-card">
      <header className="resume-card__header">
        <h3 className="resume-card__h3">Experience</h3>
        <FontAwesomeIcon icon={["fas", "trash"]} className="trash-icon" />
      </header>

      <div className="input-grid">
        <input type="text" value={experience.name} name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" value={experience.age} name="age" placeholder="Age" onChange={handleChange} />
        <input type="text" value={experience.address} name="address" placeholder="Address" onChange={handleChange} />
      </div>
    </div>
  );
}

export default Experience;
