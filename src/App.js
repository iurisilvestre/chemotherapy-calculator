import { useState, useEffect } from "react";

import { CoursesSchemes } from "./utils/CoursesSchemes.js";
import { getBsa, getCrCl, getCarboplatin, getDose } from "./utils/functions.js";

import PatientInfo from "./layouts/PatientInfo";
import SchemesSelection from "./layouts/SchemesSelection";
import Results from "./layouts/Results";

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
  const [crclValue, setCrclValue] = useState(null);
  const [bsaValue, setBsaValue] = useState(null);
  const [carboplatinValue, setCarboplatinValue] = useState(null);
  const [doseValue, setDoseValue] = useState([]);

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

  useEffect(() => {
    setBsaValue(getBsa(patientInfo));
    setCrclValue(getCrCl(patientInfo));
    setDoseValue(
      getDose(patientInfo, CoursesSchemes, selectedScheme, bsaValue)
    );
  }, [patientInfo]);

  useEffect(() => {
    setDoseValue(
      getDose(patientInfo, CoursesSchemes, selectedScheme, bsaValue)
    );
    setCarboplatinValue(
      getCarboplatin(patientInfo, CoursesSchemes, selectedScheme, crclValue)
    );
  }, [selectedScheme, patientInfo.auc]);

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
        bsaValue={bsaValue}
        crclValue={crclValue}
        carboplatinValue={carboplatinValue}
        doseValue={doseValue}
      />
    </div>
  );
}
