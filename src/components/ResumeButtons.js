import React from "react";

function ResumeButtons(props) {
  return (
    <div>
      <div className="button-container">
        <button className="btn add-new-btn">
          Add New {props.sections[0].replace(/\b\w/g, (l) => l.toUpperCase())}
        </button>
      </div>
      <div className="button-container">
        <button className="btn" name="Previous" onClick={props.handleChange}>
          Previous
        </button>
        <button className="btn" name="Next" onClick={props.handleChange}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ResumeButtons;
