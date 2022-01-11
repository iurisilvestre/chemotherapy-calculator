import React, { useState } from "react";

export default function SchemesSelection(props) {
  console.log(props.drugsList);

  const [selectedCancer, setSelectedCancer] = useState(null);
  const [isSelectCancerDisabled, setIsSelectCancerDisabled] = useState(false);
  const [isSelectRegimenDisabled, setIsSelectRegimenDisabled] = useState(false);
  const [selectedRegimen, setSelectedRegimen] = useState("");

  const handleSelectCancer = (event) => {
    setSelectedCancer(event.target.value);
    setIsSelectCancerDisabled(true);
  };

  const handleSelectRegimen = (event) => {
    setIsSelectRegimenDisabled(true);
  };

  return (
    <div className="course-schemes">
      <h2>2. Select Course Scheme</h2>
      <select onChange={handleSelectCancer}>
        <option disabled={isSelectCancerDisabled}>Select Cancer</option>
        {props.drugsList.map((drug, cancerIndex) => (
          <option key={cancerIndex} value={cancerIndex}>
            {drug.type}
          </option>
        ))}
      </select>

      <select
        disabled={selectedCancer ? false : true}
        name="select-regimen"
        onChange={handleSelectRegimen}
      >
        <option disabled={isSelectRegimenDisabled}>Select Regimen</option>
        {selectedCancer &&
          props.drugsList[selectedCancer].regimen.map((item, i) => (
            <option key={i} value={i}>
              {item.courseScheme}
            </option>
          ))}
      </select>
    </div>
  );
}
