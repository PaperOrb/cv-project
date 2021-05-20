const FinalResume = ({ currentFormState, handleSubmit, formIndex }) => {
  let inputCallback = (event) => {
    handleSubmit(event, formIndex);
  };

  return <div className="resume-card">blarg</div>;
};

export default FinalResume;
