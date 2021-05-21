import FormHeader from "./FormHeader";

const Personal = ({ currentFormState, handleInput, formIndex }) => {
  let inputCallback = (event) => {
    handleInput(event, formIndex);
  };

  return (
    <div className="resume-card">
      <FormHeader formIndex={formIndex} sectionTitle="Personal" />

      <div className="input-grid">
        <input
          type="text"
          value={currentFormState["Name"] || ""}
          name="Name"
          placeholder="Name"
          onChange={inputCallback}
        />
        <input
          type="text"
          value={currentFormState["Email"] || ""}
          name="Email"
          placeholder="Email"
          onChange={inputCallback}
          required
        />
        <input
          type="text"
          value={currentFormState["Phone"] || ""}
          name="Phone"
          placeholder="Phone"
          onChange={inputCallback}
        />
        <input
          type="text"
          value={currentFormState["Address"] || ""}
          name="Address"
          placeholder="Address"
          onChange={inputCallback}
        />
      </div>
    </div>
  );
};

export default Personal;
