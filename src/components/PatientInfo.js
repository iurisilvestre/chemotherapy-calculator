import React, { useState } from "react";

const PatientInfo = (props) => {
  // Patient form data object
  const patientData = {
    genre: "",
    age: "",
    height: "",
    weight: "",
    creatinine: "",
    auc: "",
  };
  const [formData, setFormData] = useState(patientData);

  const handleChangeInputs = (event) => {
    const { name, value, type } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "number" ? Number(value) : value,
    }));
    props.onChangeInputs(formData);
  };

  const handleReset = () => {
    setFormData(patientData);
  };

  return (
    <div className="patient-info">
      <h2>1. Insert Patient Info</h2>
      {/* INPUTS GENRE */}
      <div>
        <input
          type="radio"
          name="genre"
          value="male"
          checked={formData.genre === "male"}
          onChange={handleChangeInputs}
        />
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input
          type="radio"
          name="genre"
          value="female"
          checked={formData.genre === "female"}
          onChange={handleChangeInputs}
        />
        <label htmlFor="female">Female</label>
      </div>
      {/* INPUTS AGE */}
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChangeInputs}
        />
      </div>
      {/* INPUTS HEIGHT */}
      <div>
        <label htmlFor="height">Height</label>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChangeInputs}
        />
      </div>
      {/* INPUTS WEIGHT */}
      <div>
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChangeInputs}
        />
      </div>
      {/* INPUTS CREATININE */}
      <div>
        <label htmlFor="creatinine">Creatinine</label>
        <input
          type="number"
          name="creatinine"
          value={formData.creatinine}
          onChange={handleChangeInputs}
        />
      </div>
      {/* INPUTS AUC */}
      <div>
        <label htmlFor="auc">AUC</label>
        <input
          type="number"
          name="auc"
          value={formData.auc}
          onChange={handleChangeInputs}
        />
      </div>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default PatientInfo;
