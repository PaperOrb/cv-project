import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Personal() {
  return (
    <div className="grid-wrapper">
      <header className="resume-card__header">
        <h3 className="resume-card__h3">Personal</h3>
        <FontAwesomeIcon icon={["fas", "trash"]} className="trash-icon" />
      </header>

      <div className="input-grid">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Age" />
        <input type="text" placeholder="Address" />
      </div>
    </div>
  );
}

export default Personal;
