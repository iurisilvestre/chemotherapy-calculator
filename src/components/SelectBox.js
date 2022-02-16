export default function SelectBox(props) {
  return (
    <select
      onChange={handleSelectCancer}
      disabled={!checkPatientData(props.patientInfo)}
    >
      <option hidden>Select Cancer</option>
      {checkPatientData(props.patientInfo) &&
        Object.keys(props.drugsList).map((cancer, cancerIndex) => (
          <option key={cancerIndex} value={cancer}>
            {cancer}
          </option>
        ))}
    </select>
  );
}
