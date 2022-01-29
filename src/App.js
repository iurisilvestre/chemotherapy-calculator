import React, { useState } from "react";

import { CoursesSchemes } from "./CoursesSchemes.js";

import PatientInfo from "./components/PatientInfo";
import SchemesSelection from "./components/SchemesSelection";
import Results from "./components/Results";

import "./App.css";

export default function App() {
  const [selectedRegimen, setSelectedRegimen] = useState("");

  const handleSelectRegiment = (regimenIndex) => {
    setSelectedRegimen(regimenIndex);
  };

  return (
    <div className="app">
      <h1>Chemotherapy Calculator</h1>
      <PatientInfo />
      <SchemesSelection
        drugsList={CoursesSchemes}
        onSelectRegiment={handleSelectRegiment}
      />
      <Results />
    </div>
  );
}
