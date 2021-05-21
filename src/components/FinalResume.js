const FinalResume = ({ formObj }) => {
  let RenderFormObj = () => {
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
    return fieldsArr;
  };

  return RenderFormObj();
};

export default FinalResume;
