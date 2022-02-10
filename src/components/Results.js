import React, { useState, useEffect } from "react";

export default function Results(props) {
  const [crclValue, setCrclValue] = useState();
  const [bsaValue, setBsaValue] = useState();
  const [carboplatinValue, setCarboplatinValue] = useState(null);
  const [doseValue, setDoseValue] = useState([]);

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

  const getDose = (patientData, coursesSchemes, selectedScheme) => {
    // Check if we have a selected scheme
    if (Object.keys(selectedScheme).length > 0) {
      const result = [];
      let calc;
      const scheme = coursesSchemes[selectedScheme.cancer].find(
        (scheme) => scheme.id == selectedScheme.id
      );
      // Carboplatin calc if it is

      if (scheme.carboplatinCalc && patientData.auc > 0) {
        let crCl = crclValue;
        if (crCl > 125) {
          crCl = 125;
        }
        props.isAucRequired();
        setCarboplatinValue(Math.round(patientData.auc * (crCl + 25)));
      } else if (scheme.carboplatinCalc) {
        props.isAucRequired();
      }

      // Check if the selected scheme needs bsa
      if (scheme.bsaCalc) {
        calc = bsaValue;
      } else {
        calc = patientData.weight;
      }

      // Iterate throught drugdoses and make the calcs
      for (let i = 0; i < scheme.drugDoses.length; i++) {
        result.push({
          drug: scheme.drugDoses[i].drug,
          dose: Math.round(scheme.drugDoses[i].dose * calc),
        });
      }
      return result;
    }
  };

  useEffect(() => {
    setBsaValue(getBsa(props.patientInfo));
    setCrclValue(getCrCl(props.patientInfo));
    setDoseValue(
      getDose(props.patientInfo, props.coursesSchemes, props.selectedScheme)
    );
  }, [props.patientInfo]);

  useEffect(() => {
    setDoseValue(
      getDose(props.patientInfo, props.coursesSchemes, props.selectedScheme)
    );
  }, [props.selectedScheme]);

  return (
    <div className="results">
      <h2>Results</h2>
      {carboplatinValue && <p>Carboplatin: {carboplatinValue}</p>}
      {doseValue &&
        doseValue.map((item, index) => (
          <p key={index}>{`${item.drug} ${item.dose}`}</p>
        ))}
      <h3>BSA</h3>
      <p>{bsaValue || 0} m²</p>
      <h3>CrCL</h3>
      <p>{crclValue || 0} mL/min</p>
    </div>
  );
}
