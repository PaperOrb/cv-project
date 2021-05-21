const FinalResume = ({ formObj }) => {
  var sectionTitle;

  let RenderFormObj = () => {
    let formObjKeys = Object.keys(formObj);
    let formObjVals = Object.values(formObj);
    let fieldsArr = formObjKeys.map((key, index) => {
      if (key === "section") {
        return "";
      }
      return (
        <div key={index}>
          <label className="resume-key">{key}: </label>
          <span>{formObjVals[index]}</span>
        </div>
      );
    });
    return fieldsArr;
  };

  return (
    <div className="resume-section">
      <div className="section-title">{formObj.section}</div>
      {RenderFormObj()}
    </div>
  );
};

export default FinalResume;
