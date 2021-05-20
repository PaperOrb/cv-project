import React from "react";

function ResumeNav({ sectionTitle }) {
  let ResumeNav = () => {
    switch (sectionTitle) {
      case "Final Resume":
        return (
          <nav className="resume-nav">
            <h1 className={"resume-nav__header " + (sectionTitle === "Personal" ? "resume-nav__header-underline" : "")}>
              Final Resume
            </h1>
          </nav>
        );
      default:
        return (
          <nav className="resume-nav">
            <h1 className={"resume-nav__header " + (sectionTitle === "Personal" ? "resume-nav__header-underline" : "")}>
              Personal
            </h1>
            <h1
              className={"resume-nav__header " + (sectionTitle === "Education" ? "resume-nav__header-underline" : "")}
            >
              Education
            </h1>
            <h1
              className={"resume-nav__header " + (sectionTitle === "Experience" ? "resume-nav__header-underline" : "")}
            >
              Experience
            </h1>
          </nav>
        );
    }
  };

  return <ResumeNav />;
}

export default ResumeNav;
