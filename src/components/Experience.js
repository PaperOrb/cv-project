import FormHeader from "./FormHeader";

const Experience = ({ currentFormState, handleInput, formIndex }) => {
  let inputCallback = (event) => {
    handleInput(event, formIndex);
  };

  return (
    <div className="resume-card">
      <FormHeader formIndex={formIndex} sectionTitle="Experience" />

      <div className="input-grid">
        <input
          type="text"
          value={currentFormState["Company Name"] || ""}
          name="Company Name"
          placeholder="Company Name"
          onChange={inputCallback}
        />
        <input
          type="text"
          value={currentFormState["Position"] || ""}
          name="Position"
          placeholder="Position"
          onChange={inputCallback}
        />
        <input
          type="text"
          value={currentFormState["Responsibilities"] || ""}
          name="Responsibilities"
          placeholder="Responsibilities"
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

export default Experience;
