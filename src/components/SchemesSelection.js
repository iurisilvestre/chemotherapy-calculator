import React, { useState } from "react";

export default function SchemesSelection(props) {
  const [isSelectSchemeDisabled, setIsSelectSchemeDisabled] = useState(false);

  const checkPatientData = (patientData) => {
    if (
      patientData.genre != "" &&
      patientData.age > 0 &&
      patientData.height > 0 &&
      patientData.weight > 0 &&
      patientData.creatinine > 0
    ) {
      return true;
    }
    return false;
  };

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
        <option disabled={props.selectedCancer}>Select Cancer</option>
        {Object.keys(props.drugsList).map((cancer, cancerIndex) => (
          <option key={cancerIndex} value={cancer}>
            {cancer}
          </option>
        ))}
      </select>

      <select
        disabled={!props.selectedCancer}
        name="select-scheme"
        onChange={handleSelectScheme}
      >
        <option>Select Scheme</option>
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
