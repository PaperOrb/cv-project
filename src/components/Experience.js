import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/index.css";

function Experience() {
  return (
    <div>
      <header className="resume-card__header">
        <h3 className="resume-card__h3">Experience 1</h3>
        <FontAwesomeIcon icon={["fas", "trash"]} className="trash-icon" />
      </header>

      <div className="input-grid">
        <input type="text" placeholder="School" />
        <input type="text" placeholder="Major" />
        <input type="text" placeholder="Graduation date" />
      </div>
    </div>
  );
}

export default Experience;
