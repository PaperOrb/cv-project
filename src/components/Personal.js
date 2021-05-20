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
          value={currentFormState.name || ""}
          name="name"
          placeholder="Name"
          onChange={inputCallback}
        />
        <input
          type="text"
          value={currentFormState.email || ""}
          name="email"
          placeholder="Email"
          onChange={inputCallback}
        />
        <input
          type="text"
          value={currentFormState.phone || ""}
          name="phone"
          placeholder="Phone"
          onChange={inputCallback}
        />
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

export default Personal;
