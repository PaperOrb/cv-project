import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

function ResumeCard(props) {
  const Components = {
    education: Education,
    personal: Personal,
    experience: Experience,
  };
  const CurrentSection = Components[props.section];

  return (
    <div className="resume-card">
      <CurrentSection handleChange={props.handleChange} />
    </div>
  );
}

export default ResumeCard;
