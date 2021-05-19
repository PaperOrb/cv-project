import React from "react";

function ResumeButtons({ sectionTitle, navigateSections, newComponentData }) {
  return (
    <div>
      <div className="button-container">
        <button onClick={newComponentData} className="btn add-new-btn">
          Add New {sectionTitle}
        </button>
      </div>
      <div className="button-container">
        <button className="btn" name="Previous" onClick={navigateSections}>
          Previous
        </button>
        <button className="btn" name="Next" onClick={navigateSections}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ResumeButtons;
