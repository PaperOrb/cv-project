import FormHeader from "./FormHeader";

const Education = ({ currentFormState, handleInput, formIndex }) => {
  let inputCallback = (event) => {
    handleInput(event, formIndex);
  };

  return (
    <div className="resume-card">
      <FormHeader formIndex={formIndex} sectionTitle="Education" />

      <div className="input-grid">
        <input
          type="text"
          value={currentFormState["School Name"] || ""}
          name="School Name"
          placeholder="School Name"
          onChange={inputCallback}
        />
        <input
          type="text"
          value={currentFormState["Degree"] || ""}
          name="Degree"
          placeholder="Degree"
          onChange={inputCallback}
        />
        <label>
          <br />
          Start date:
        </label>
        <input type="date" value={currentFormState["Start Date"] || ""} name="Start Date" onChange={inputCallback} />
        <label>End date:</label>
        <input type="date" value={currentFormState["End Date"] || ""} name="End Date" onChange={inputCallback} />
      </div>
    </div>
  );
};

export default Education;
