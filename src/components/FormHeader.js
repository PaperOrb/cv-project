import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormContext } from "../App";
import { useContext } from "react";

function FormHeader({ sectionTitle, formIndex }) {
  const deleteForm = useContext(FormContext);

  let handleClick = () => {
    deleteForm(formIndex);
  };

  return (
    <header className="resume-card__header">
      <h3 className="resume-card__h3">
        {sectionTitle} {formIndex + 1}
      </h3>
      <button className="trash-button" onClick={handleClick}>
        <FontAwesomeIcon icon={["fas", "trash"]} className="trash-icon" />
      </button>
    </header>
  );
}

export default FormHeader;
