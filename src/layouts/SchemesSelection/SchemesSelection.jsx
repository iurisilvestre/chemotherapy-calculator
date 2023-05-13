import { checkPatientData } from "../../utils/functions";
import SelectBox from "../../components/SelectBox";
import useStyles from "./styles";

//MUI
import Typography from "@mui/material/Typography";

export default function SchemesSelection(props) {
  const classes = useStyles();
  const handleSelectCancer = (event) => {
    props.onSelectCancer(event.target.value);
  };

  const handleSelectScheme = (event) => {
    const schemeId = event.target.value;
    props.onSelectScheme(props.selectedCancer, schemeId);
  };
  return (
    <div>
      <Typography variant="h6">2. Select Course Scheme</Typography>
      <SelectBox
        label={"Select Cancer"}
        onSelect={handleSelectCancer}
        disabled={!checkPatientData(props.patientInfo)}
        renderCondition={checkPatientData(props.patientInfo)}
        optionsList={Object.keys(props.drugsList)}
        selectedCancer={props.selectedCancer}
      />
      <SelectBox
        label={"Select Scheme"}
        disabled={!props.selectedCancer}
        onSelect={handleSelectScheme}
        renderCondition={props.selectedCancer}
        optionsList={props.drugsList[props.selectedCancer]}
      />
    </div>
  );
}
