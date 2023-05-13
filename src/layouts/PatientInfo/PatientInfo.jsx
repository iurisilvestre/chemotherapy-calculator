import Input from "../../components/Input";
import useStyles from "./styles";

//MUI
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import IconButton from "@mui/material/IconButton";
import RestartAlt from "@mui/icons-material/RestartAlt";

export default function PatientInfo(props) {
  const classes = useStyles();
  return (
    <div className={classes.patientInfo}>
      <Typography variant="h6">1. Insert Patient Info</Typography>
      {/* INPUTS GENRE */}
      <ToggleButtonGroup
        classes={{ root: classes.toggleButtonGroup }}
        onChange={props.onChangeInputs}
      >
        <ToggleButton
          value="male"
          name="genre"
          selected={props.patientInfo.genre === "male"}
          className={classes.toggleButton}
        >
          Male
        </ToggleButton>
        <ToggleButton
          value="female"
          name="genre"
          selected={props.patientInfo.genre === "female"}
          className={classes.toggleButton}
        >
          female
        </ToggleButton>
      </ToggleButtonGroup>
      {/* INPUTS AGE */}
      <Input
        label="Age"
        name="age"
        adornment="years"
        onChange={props.onChangeInputs}
        value={props.patientInfo.age}
      />
      {/* INPUTS HEIGHT */}
      <Input
        label="Height"
        name="height"
        adornment="cm"
        onChange={props.onChangeInputs}
        value={props.patientInfo.height}
      />
      {/* INPUTS WEIGHT */}
      <Input
        label="Weight"
        name="weight"
        adornment="kg"
        onChange={props.onChangeInputs}
        value={props.patientInfo.weight}
      />
      {/* INPUTS CREATININE */}
      <Input
        label="Creatinine"
        ls
        name="creatinine"
        adornment="mg/dL"
        onChange={props.onChangeInputs}
        value={props.patientInfo.creatinine}
      />
      {/* INPUTS AUC */}
      <Input
        label="AUC"
        name="auc"
        adornment="mL*min/mL"
        onChange={props.onChangeInputs}
        value={props.patientInfo.auc}
      />
      <IconButton
        onClick={props.onReset}
        fontSize="large"
        className={classes.icon}
      >
        <RestartAlt />
      </IconButton>
    </div>
  );
}
