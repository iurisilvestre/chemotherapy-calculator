import React, { useState, useEffect } from "react";

export default function Results(props) {
<<<<<<< HEAD
  const [crclValue, setCrclValue] = useState();
  const [bsaValue, setBsaValue] = useState();

  const getBsa = (patientData) => {
    const weight = Math.pow(patientData.weight, 0.425);
    const height = Math.pow(patientData.height, 0.725);
    let bsaValue = Math.round(0.007184 * weight * height * 100) / 100;
    return bsaValue;
  };

  const getCrCl = (patientData) => {
    let crClValue;
    if (patientData.creatinine > 0) {
      let crClMale =
        ((140 - patientData.age) * patientData.weight) /
        (patientData.creatinine * 72);
      if (patientData.genre === "female") {
        crClValue = Math.round((crClMale * 0.85 * 10) / 10);
      } else if (patientData.genre === "male") {
        crClValue = Math.round(crClMale * 10) / 10;
      }
      if (isNaN(crClValue)) {
        crClValue = 0;
      }
      return crClValue;
    }
  };

  const getDose = (patientData, coursesSchemes, selectedRegimen) => {};

  useEffect(() => {
    setBsaValue(getBsa(props.patientInfo));
    setCrclValue(getCrCl(props.patientInfo));
  }, [props.patientInfo]);

=======
>>>>>>> 57fe928 (crate formulas js file)
  return (
    <div className="results">
      <h2>Results</h2>
      <p className="results-claculations">Results here</p>
      <h3>BSA</h3>
<<<<<<< HEAD
      <p>{bsaValue} m²</p>
      <h3>CrCL</h3>
      <p>{crclValue} mL/min</p>
=======
      <p>{props.bsaValue} m²</p>
      <h3>CrCL</h3>
      <p>{props.crclValue} mL/min</p>
>>>>>>> 57fe928 (crate formulas js file)
    </div>
  );
}
