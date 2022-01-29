import React, { useState } from "react";

export default function SchemesSelection(props) {
  const [selectedCancer, setSelectedCancer] = useState(null);
  const [isSelectCancerDisabled, setIsSelectCancerDisabled] = useState(false);
  const [isSelectRegimenDisabled, setIsSelectRegimenDisabled] = useState(false);

  const handleSelectCancer = (event) => {
    setSelectedCancer(event.target.value);
    setIsSelectCancerDisabled(true);
  };

  const handleSelectRegimen = (event) => {
    setIsSelectRegimenDisabled(true);
    props.onSelectRegiment(event.target.value);
  };

  return (
    <div className="course-schemes">
      <h2>2. Select Course Scheme</h2>
      <select onChange={handleSelectCancer}>
        <option disabled={selectedCancer}>Select Cancer</option>
        {props.drugsList.map((drug, cancerIndex) => (
          <option key={cancerIndex} value={cancerIndex}>
            {drug.type}
          </option>
        ))}
      </select>

      <select
        disabled={!selectedCancer}
        name="select-regimen"
        onChange={handleSelectRegimen}
      >
        <option disabled={isSelectRegimenDisabled}>Select Regimen</option>
        {selectedCancer &&
          props.drugsList[selectedCancer].regimens.map((item, regimenIndex) => (
            <option key={regimenIndex} value={regimenIndex}>
              {item.courseScheme}
            </option>
          ))}
      </select>
    </div>
  );
}
