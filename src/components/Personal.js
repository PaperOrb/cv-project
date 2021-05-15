import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Personal(props) {
  const [personal, setPersonal] = useState({
    name: "",
    age: "",
    address: "",
  });

  let handleChange = (event) => {
    event.preventDefault();
    let { name, value, type } = event.target;
    if (type === "text") {
      setPersonal({
        ...personal,
        [name]: value,
      });
      console.log(props.key);
    }
  };

  return (
    <div className="grid-wrapper">
      <header className="resume-card__header">
        <h3 className="resume-card__h3">Personal</h3>
        <FontAwesomeIcon icon={["fas", "trash"]} className="trash-icon" />
      </header>

      <div className="input-grid">
        <input type="text" value={personal.name} name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" value={personal.age} name="age" placeholder="Age" onChange={handleChange} />
        <input type="text" value={personal.address} name="address" placeholder="Address" onChange={handleChange} />
      </div>
    </div>
  );
}

export default Personal;
