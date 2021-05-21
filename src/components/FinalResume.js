const FinalResume = ({ formObj }) => {
  let RenderResume = () => {
    let formObjKeys = Object.keys(formObj);
    let formObjVals = Object.values(formObj);
    let fieldsArr = formObjKeys.map((key, index) => {
      return (
        <div key={index}>
          <label>{key}: </label>
          <span>{formObjVals[index]}</span>
        </div>
      );
    });
    return <div className="resume-card">{fieldsArr}</div>;
  };

  return RenderResume();
};

export default FinalResume;
