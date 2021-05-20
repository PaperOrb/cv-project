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
          value={currentFormState.company || ""}
          name="company"
          placeholder="Company Name"
          onChange={inputCallback}
        />
        <input
          type="text"
          value={currentFormState.position || ""}
          name="position"
          placeholder="Position"
          onChange={inputCallback}
        />
        <input
          type="text"
          value={currentFormState.responsibilities || ""}
          name="responsibilities"
          placeholder="Responsibilities"
          onChange={inputCallback}
        />
        <label>
          <br />
          Start date:
        </label>
        <input type="date" value={currentFormState.from || ""} name="from" onChange={inputCallback} />
        <label>End date:</label>
        <input type="date" value={currentFormState.to || ""} name="to" onChange={inputCallback} />
      </div>
    </div>
  );
};

export default Experience;
