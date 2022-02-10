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
  const [selectedCancer, setSelectedCancer] = useState(null);
  const [aucRequired, setAucRequired] = useState(false);

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
    setSelectedCancer(null);
    setAucRequired(false);
  };

  const handleSelectCancer = (cancer) => {
    setSelectedCancer(cancer);
  };

  const handleSelectScheme = (cancerName, schemeID) => {
    setSelectedScheme({
      cancer: cancerName,
      id: schemeID,
    });
  };

  const isAucRequired = () => {
    setAucRequired((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>Chemotherapy Calculator</h1>
      <PatientInfo
        onChangeInputs={handleInputs}
        onReset={handleReset}
        patientInfo={patientInfo}
        aucRequired={aucRequired}
      />
      <SchemesSelection
        patientInfo={patientInfo}
        drugsList={CoursesSchemes}
        onSelectScheme={handleSelectScheme}
        onSelectCancer={handleSelectCancer}
        selectedCancer={selectedCancer}
      />
      <Results
        patientInfo={patientInfo}
        selectedScheme={selectedScheme}
        coursesSchemes={CoursesSchemes}
        isAucRequired={isAucRequired}
      />
    </div>
  );
}
