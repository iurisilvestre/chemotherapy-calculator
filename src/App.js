import React, { useState } from "react";

import { CoursesSchemes } from "./CoursesSchemes.js";

import PatientInfo from "./components/PatientInfo";
import SchemesSelection from "./components/SchemesSelection";
import Results from "./components/Results";

import "./App.css";

export default function App() {
  const patientCleanData = {
    genre: "",
    age: "",
    height: "",
    weight: "",
    creatinine: "",
    auc: "",
  };

  const [patientInfo, setPatientInfo] = useState(patientCleanData);
  const [selectedScheme, setSelectedScheme] = useState({});

  const handleInputs = (event) => {
    const { name, value, type } = event.target;
    setPatientInfo((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "number" ? Number(value) : value,
      };
    });
  };

  const handleReset = () => {
    setPatientInfo(patientCleanData);
    setSelectedScheme({});
  };

  const handleSelectRegiment = (cancerIndex, regimenIndex) => {
    setSelectedScheme({
      cancer: Number(cancerIndex),
      regimen: Number(regimenIndex),
    });
  };

  return (
    <div className="app">
      <h1>Chemotherapy Calculator</h1>
      <PatientInfo
        onChangeInputs={handleInputs}
        onReset={handleReset}
        patientInfo={patientInfo}
      />
      <SchemesSelection
        drugsList={CoursesSchemes}
        onSelectRegiment={handleSelectRegiment}
      />
      <Results
        patientInfo={patientInfo}
        selectedScheme={selectedScheme}
        coursesSchemes={CoursesSchemes}
      />
    </div>
  );
}
