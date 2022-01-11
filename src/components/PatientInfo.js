import React from "react";

const PatientInfo = () => {
  return (
    <div className="patient-info">
      <h2>1. Insert Patient Info</h2>
      <div>
        <input type="radio" name="genre" value="male" />
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input type="radio" name="genre" value="female" />
        <label htmlFor="female">Female</label>
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" />
      </div>
      <div>
        <label htmlFor="height">Height</label>
        <input type="number" name="height" />
      </div>
      <div>
        <label htmlFor="creatinine">reatinine</label>
        <input type="number" name="creatinine" />
      </div>
      <div>
        <label htmlFor="auc">AUC</label>
        <input type="number" name="auc" />
      </div>
      <button type="button">Reset</button>
    </div>
  );
};

export default PatientInfo;
