import { checkPatientData } from "../utils/functions";

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
      <select
        onChange={handleSelectCancer}
        disabled={!checkPatientData(props.patientInfo)}
      >
        <option hidden>Select Cancer</option>
        {checkPatientData(props.patientInfo) &&
          Object.keys(props.drugsList).map((cancer, cancerIndex) => (
            <option key={cancerIndex} value={cancer}>
              {cancer}
            </option>
          ))}
      </select>

      <select disabled={!props.selectedCancer} onChange={handleSelectScheme}>
        <option hidden>Select Scheme</option>
        {props.selectedCancer &&
          props.drugsList[props.selectedCancer].map((drug) => (
            <option key={drug.id} value={drug.id}>
              {drug.scheme}
            </option>
          ))}
      </select>
    </div>
  );
}
