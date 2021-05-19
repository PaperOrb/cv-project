import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FormHeader({ sectionTitle, formIndex }) {
  return (
    <header className="resume-card__header">
      <h3 className="resume-card__h3">
        {sectionTitle} {formIndex + 1}
      </h3>
      <FontAwesomeIcon icon={["fas", "trash"]} className="trash-icon" />
    </header>
  );
}

export default FormHeader;
