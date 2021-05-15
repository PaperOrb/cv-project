import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Education() {
  return (
    <div className="grid-wrapper">
      <header className="resume-card__header">
        <h3 className="resume-card__h3">Education 1</h3>
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

export default Education;
