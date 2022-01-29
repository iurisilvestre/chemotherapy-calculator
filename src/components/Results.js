import React from "react";

export default function Results(props) {
  const getBsa = (patientData) => {
    const weight = Math.pow(patientData.weight, 0.425);
    const height = Math.pow(patientData.height, 0.725);
    let bsaValue = Math.round(0.007184 * weight * height * 100) / 100;
    if (isNaN(bsaValue)) {
      bsaValue = 0;
    }
    return bsaValue;
  };

  return (
    <div className="results">
      <h2>Results</h2>
      <p className="results-claculations">Results here</p>
      <h3>BSA</h3>
      <p>{getBsa(props.patientInfo)}</p>
      <h3>CrCL</h3>
      <p>CrCl Value</p>
    </div>
  );
}
