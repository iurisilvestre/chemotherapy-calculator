export function checkPatientData(patientData) {
  if (
    patientData.genre !== "" &&
    patientData.age > 0 &&
    patientData.height > 0 &&
    patientData.weight > 0 &&
    patientData.creatinine > 0
  ) {
    return true;
  }
  return false;
}

export function getBsa(patientData) {
  const weight = Math.pow(patientData.weight, 0.425);
  const height = Math.pow(patientData.height, 0.725);
  let bsaValue = Math.round(0.007184 * weight * height * 100) / 100;
  return bsaValue;
}

export function getCrCl(patientData) {
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
}

export function getDose(patientData, coursesSchemes, selectedScheme, bsaValue) {
  // Check if we have a selected scheme
  if (Object.keys(selectedScheme).length > 0) {
    const result = [];
    let calc;
    const scheme = coursesSchemes[selectedScheme.cancer].find(
      (scheme) => scheme.id === selectedScheme.id
    );
    // Check if the selected scheme needs bsa
    if (scheme.bsaCalc) {
      calc = bsaValue;
    } else {
      calc = patientData.weight;
    }

    // Iterate throught drugdoses and make the calcs
    for (let i = 0; i < scheme.drugDoses.length; i++) {
      result.push({
        drug: scheme.drugDoses[i].drug,
        dose: Math.round(scheme.drugDoses[i].dose * calc),
      });
    }
    return result;
  }
}

export function getCarboplatin(
  patientData,
  coursesSchemes,
  selectedScheme,
  crclValue
) {
  if (patientData.auc > 0) {
    const scheme = coursesSchemes[selectedScheme.cancer].find(
      (scheme) => scheme.id === selectedScheme.id
    );
    if (scheme.carboplatinCalc) {
      let crCl = crclValue;
      if (crCl > 125) {
        crCl = 125;
      }
      return Math.round(patientData.auc * (crCl + 25));
    }
  }
}
