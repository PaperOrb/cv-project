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
          value={currentFormState.schoolName || ""}
          name="schoolName"
          placeholder="School Name"
          onChange={inputCallback}
        />
        <input
          type="text"
          value={currentFormState.degree || ""}
          name="degree"
          placeholder="Degree"
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

export default Education;
