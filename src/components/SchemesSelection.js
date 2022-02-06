import React, { useState } from "react";

export default function SchemesSelection(props) {
  const [selectedCancer, setSelectedCancer] = useState(null);
  const [isSelectRegimenDisabled, setIsSelectRegimenDisabled] = useState(false);

  const handleSelectCancer = (event) => {
    setSelectedCancer(event.target.value);
  };

  const handleSelectRegimen = (event) => {
    setIsSelectRegimenDisabled(true);
    const regimenIndex = event.target.value;
    props.onSelectRegiment(selectedCancer, regimenIndex);
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
          props.drugsList[selectedCancer].regimens.map((item, index) => (
            <option key={item.id} value={index}>
              {item.courseScheme}
            </option>
          ))}
      </select>
    </div>
  );
}
