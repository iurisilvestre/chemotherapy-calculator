import React, { useState } from "react";

export default function PatientInfo(props) {
  // RESET FORM DATA OBJECT
  const handleReset = () => {};

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
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={props.patientInfo.age}
          min="0"
          onChange={props.onChangeInputs}
        />
      </div>
      {/* INPUTS HEIGHT */}
      <div>
        <label htmlFor="height">Height</label>
        <input
          type="number"
          name="height"
          value={props.patientInfo.height}
          min="0"
          onChange={props.onChangeInputs}
        />
      </div>
      {/* INPUTS WEIGHT */}
      <div>
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          name="weight"
          value={props.patientInfo.weight}
          min="0"
          onChange={props.onChangeInputs}
        />
      </div>
      {/* INPUTS CREATININE */}
      <div>
        <label htmlFor="creatinine">Creatinine</label>
        <input
          type="number"
          name="creatinine"
          value={props.patientInfo.creatinine}
          min="0"
          onChange={props.onChangeInputs}
        />
      </div>
      {/* INPUTS AUC */}
      <div>
        <label htmlFor="auc">AUC</label>
        <input
          type="number"
          name="auc"
          value={props.patientInfo.auc}
          min="0"
          onChange={props.onChangeInputs}
        />
      </div>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
