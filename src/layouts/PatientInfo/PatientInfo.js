import Input from "../../components/Input";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";

export default function PatientInfo(props) {
  return (
    <div style={{ width: "200px" }}>
      <Typography variant="h6">1. Insert Patient Info</Typography>
      {/* INPUTS GENRE */}
      <div>
        <input
          type="radio"
          name="genre"
          value="male"
          checked={props.patientInfo.genre === "male"}
          onChange={props.onChangeInputs}
        />
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input
          type="radio"
          name="genre"
          value="female"
          checked={props.patientInfo.genre === "female"}
          onChange={props.onChangeInputs}
        />
        <label htmlFor="female">Female</label>
      </div>
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
        aucRequired={props.aucRequired}
      />
      <button type="button" onClick={props.onReset}>
        Reset
      </button>
    </div>
  );
}
