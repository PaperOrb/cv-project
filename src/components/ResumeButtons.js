import React from "react";

function ResumeButtons({ sectionTitle, navigateSections, newComponentData }) {
  let AddNewBtn = () => {
    if (sectionTitle === "Personal") {
      return "";
    } else {
      return (
        <button onClick={newComponentData} className="btn add-new-btn">
          Add New {sectionTitle}
        </button>
      );
    }
  };

  let NavBtns = () => {
    switch (sectionTitle) {
      case "Personal":
        return (
          <div className="button-container">
            <button className="btn btn-big" name="Next" onClick={navigateSections}>
              Next
            </button>
          </div>
        );
      case "Education":
        return (
          <div className="button-container">
            <button className="btn" name="Previous" onClick={navigateSections}>
              Previous
            </button>
            <button className="btn" name="Next" onClick={navigateSections}>
              Next
            </button>
          </div>
        );
      case "Experience":
        return (
          <div className="button-container">
            <button className="btn" name="Previous" onClick={navigateSections}>
              Previous
            </button>
            <button className="btn submit" name="Submit" onClick={navigateSections}>
              Submit
            </button>
          </div>
        );
      default:
        break;
    }
  };
  return (
    <div>
      <div className="button-container">
        <AddNewBtn />
      </div>
      <NavBtns />
    </div>
  );
}

export default ResumeButtons;
