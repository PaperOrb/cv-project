import React from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";
import "./styles/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

function App() {
  return (
    <div>
      <nav class="navbar">
        <h1>CV Builder</h1>
      </nav>

      <main>
        <nav class="resume-nav">
          <h1 class="resume-nav__header">Personal</h1>
          <h1 class="resume-nav__header">Education</h1>
          <h1 class="resume-nav__header">Experience</h1>
        </nav>

        <form className="resume-form">
          <div>
            <Education />
            <Education />
          </div>
          <div className="button-container">
            <button className="btn add-new-btn">Add New Education</button>
          </div>

          <div className="button-container">
            <button className="btn">Previous</button>
            <button className="btn">Next</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
