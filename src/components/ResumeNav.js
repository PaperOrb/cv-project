import React from "react";

function ResumeNav({ sectionTitle }) {
  return (
    <nav className="resume-nav">
      <h1 className={"resume-nav__header " + (sectionTitle === "Personal" ? "resume-nav__header-underline" : "")}>
        Personal
      </h1>
      <h1 className={"resume-nav__header " + (sectionTitle === "Education" ? "resume-nav__header-underline" : "")}>
        Education
      </h1>
      <h1 className={"resume-nav__header " + (sectionTitle === "Experience" ? "resume-nav__header-underline" : "")}>
        Experience
      </h1>
    </nav>
  );
}

export default ResumeNav;
