import Input from "../components/Input";

export default function PatientInfo(props) {
  return (
    <div className="patient-info">
      <h2>1. Insert Patient Info</h2>
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
        htmlFor="age"
        type="number"
        name="age"
        min="0"
        onChange={props.onChangeInputs}
        value={props.patientInfo.age}
      />
      {/* INPUTS HEIGHT */}
      <Input
        label="Height"
        htmlFor="height"
        type="number"
        name="height"
        min="0"
        onChange={props.onChangeInputs}
        value={props.patientInfo.height}
      />
      {/* INPUTS WEIGHT */}
      <Input
        label="Weight"
        htmlFor="weight"
        type="number"
        name="weight"
        min="0"
        onChange={props.onChangeInputs}
        value={props.patientInfo.weight}
      />
      {/* INPUTS CREATININE */}
      <Input
        label="Creatinine"
        htmlFor="creatinine"
        type="number"
        name="creatinine"
        min="-10"
        onChange={props.onChangeInputs}
        value={props.patientInfo.creatinine}
      />
      {/* INPUTS AUC */}
      <Input
        label="AUC"
        htmlFor="auc"
        type="number"
        name="auc"
        min="0"
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
