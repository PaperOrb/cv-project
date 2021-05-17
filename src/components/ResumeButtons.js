import React from "react";

function ResumeButtons({ sectionTitle, handleClick }) {
  return (
    <div>
      <div className="button-container">
        <button className="btn add-new-btn">Add New {sectionTitle.replace(/\b\w/g, (l) => l.toUpperCase())}</button>
      </div>
      <div className="button-container">
        <button className="btn" name="Previous" onClick={handleClick}>
          Previous
        </button>
        <button className="btn" name="Next" onClick={handleClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ResumeButtons;
