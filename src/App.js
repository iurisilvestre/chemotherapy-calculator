import React, { useEffect, useState } from "react";

import { CoursesSchemes } from "./CoursesSchemes.js";
import { bSA, CrCl } from "./Formulas.js";

import PatientInfo from "./components/PatientInfo";
import SchemesSelection from "./components/SchemesSelection";
import Results from "./components/Results";

import "./App.css";

export default function App() {
  const [patientInfo, setPatientInfo] = useState({});
  const [selectedRegimen, setSelectedRegimen] = useState("");
  const [bsaValue, setBsaValue] = useState(0);
  const [crclValue, setCrclValue] = useState(0);

  const handleInputs = (event) => {
    const { name, value, type } = event.target;
    setPatientInfo((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "number" ? Number(value) : value,
      };
    });
  };

  const handleSelectRegiment = (regimenIndex) => {
    setSelectedRegimen(regimenIndex);
  };

  const getBsa = () => {
    setBsaValue(bSA(patientInfo));
  };
  const getCrCl = () => {
    setCrclValue(CrCl(patientInfo));
  };

  useEffect(() => {
    getBsa();
    getCrCl();
  }, [patientInfo]);

  const getDose = (patientData, coursesSchemes, selectedRegimen) => {};

  return (
    <div className="app">
      <h1>Chemotherapy Calculator</h1>
      <PatientInfo onChangeInputs={handleInputs} patientInfo={patientInfo} />
      <SchemesSelection
        drugsList={CoursesSchemes}
        onSelectRegiment={handleSelectRegiment}
      />
<<<<<<< HEAD
      <Results patientInfo={patientInfo} selectedRegimen={selectedRegimen} />
=======
      <Results bsaValue={bsaValue} crclValue={crclValue} />
>>>>>>> 57fe928 (crate formulas js file)
    </div>
  );
}
