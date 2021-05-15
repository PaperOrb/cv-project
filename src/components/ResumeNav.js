import React from "react";

function ResumeNav(props) {
  return (
    <nav className="resume-nav">
      <h1 className={"resume-nav__header " + (props.sections[0] === "personal" ? "resume-nav__header-underline" : "")}>
        Personal
      </h1>
      <h1 className={"resume-nav__header " + (props.sections[0] === "education" ? "resume-nav__header-underline" : "")}>
        Education
      </h1>
      <h1 className={"resume-nav__header " + (props.sections[0] === "experience" ? "resume-nav__header-underline" : "")}>
        Experience
      </h1>
    </nav>
  );
}

export default ResumeNav;
