import { useEffect, useState } from "react";
import useStyles from "./styles";
import { CoursesSchemes } from "./utils/CoursesSchemes";
import { getBsa, getCarboplatin, getCrCl, getDose } from "./utils/functions";

// COMPONENTS
import PatientInfo from "./layouts/PatientInfo/PatientInfo";
import Results from "./layouts/Results/Results";
import SchemesSelection from "./layouts/SchemesSelection/SchemesSelection";

// MUI
import { Box, Container, Typography } from "@mui/material";

const patientCleanData = {
  genre: "",
  age: "",
  height: "",
  weight: "",
  creatinine: "",
  auc: "",
};

export default function App() {
  const classes = useStyles();
  const [patientInfo, setPatientInfo] = useState({});
  const [selectedScheme, setSelectedScheme] = useState({});
  const [selectedCancer, setSelectedCancer] = useState(null);
  const [crclValue, setCrclValue] = useState(null);
  const [bsaValue, setBsaValue] = useState(null);
  const [carboplatinValue, setCarboplatinValue] = useState(null);
  const [doseValue, setDoseValue] = useState([]);
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
    <Container>
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: "white",
          fontWeight: "500",
          margin: "2rem 0",
          marginTop: "20px 0",
        }}
      >
        Chemotherapy Calculator
      </Typography>
      <Box className={classes.container}>
        <PatientInfo
          onChangeInputs={handleInputs}
          onReset={handleReset}
          patientInfo={patientInfo}
          aucRequired={aucRequired}
        />
        <div style={{ width: "65%" }}>
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
      </Box>
    </Container>
  );
}
