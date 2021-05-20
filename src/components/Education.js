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
          value={currentFormState.name || ""}
          name="name"
          placeholder="Name"
          onChange={inputCallback}
        />
        <input type="text" value={currentFormState.age || ""} name="age" placeholder="Age" onChange={inputCallback} />
        <input
          type="text"
          value={currentFormState.address || ""}
          name="address"
          placeholder="Address"
          onChange={inputCallback}
        />
      </div>
    </div>
  );
};

export default Education;
