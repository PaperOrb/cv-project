import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormContext } from "../App";
import { useContext } from "react";

function FormHeader({ sectionTitle, formIndex }) {
  const deleteForm = useContext(FormContext);

  let handleClick = () => {
    deleteForm(formIndex);
  };

  let DeleteButton = () => {
    if (sectionTitle === "Personal") {
      return "";
    } else {
      return (
        <button className="trash-button" onClick={handleClick}>
          <FontAwesomeIcon icon={["fas", "trash"]} className="trash-icon" />
        </button>
      );
    }
  };

  return (
    <header className="resume-card__header">
      <h3 className="resume-card__h3">
        {sectionTitle} {sectionTitle === "Personal" ? "" : formIndex + 1}
      </h3>
      {<DeleteButton />}
    </header>
  );
}

export default FormHeader;
