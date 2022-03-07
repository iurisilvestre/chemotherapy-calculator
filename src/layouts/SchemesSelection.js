import { checkPatientData } from "../utils/functions";
import SelectBox from "../components/SelectBox";

export default function SchemesSelection(props) {
  const handleSelectCancer = (event) => {
    props.onSelectCancer(event.target.value);
  };

  const handleSelectScheme = (event) => {
    const schemeId = event.target.value;
    props.onSelectScheme(props.selectedCancer, schemeId);
  };

  return (
    <div className="course-schemes">
      <h2>2. Select Course Scheme</h2>
      <SelectBox
        label={"Select Cancer"}
        onSelect={handleSelectCancer}
        disabled={!checkPatientData(props.patientInfo)}
        renderCondition={checkPatientData(props.patientInfo)}
        optionsList={Object.keys(props.drugsList)}
      />
      <SelectBox
        label={"Select Scheme"}
        disabled={!props.selectedCancer}
        onSelect={handleSelectScheme}
        renderCondition={props.selectedCancer}
        optionsList={props.drugsList[props.selectedCancer]}
      />
    </div>
  );
}
