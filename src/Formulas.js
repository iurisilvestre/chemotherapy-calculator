const bSA = (patientData) => {
  const weight = Math.pow(patientData.weight, 0.425);
  const height = Math.pow(patientData.height, 0.725);
  let bsaValue = Math.round(0.007184 * weight * height * 100) / 100;
  return bsaValue;
};

const CrCl = (patientData) => {
  let crClValue;
  if (patientData.creatinine > 0) {
    let crClMale =
      ((140 - patientData.age) * patientData.weight) /
      (patientData.creatinine * 72);
    if (patientData.genre === "female") {
      crClValue = Math.round((crClMale * 0.85 * 10) / 10);
    } else if (patientData.genre === "male") {
      crClValue = Math.round(crClMale * 10) / 10;
    }
    if (isNaN(crClValue)) {
      crClValue = 0;
    }
    return crClValue;
  }
};

export { bSA, CrCl };
