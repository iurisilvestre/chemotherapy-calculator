export default function Results(props) {
  return (
    <div className="results">
      <h2>Results</h2>
      {props.carboplatinValue && <p>Carboplatin: {props.carboplatinValue}</p>}
      {props.doseValue &&
        props.doseValue.map((item, index) => (
          <p key={index}>{`${item.drug} ${item.dose}`}</p>
        ))}
      <h3>BSA</h3>
      <p>{props.bsaValue || 0} m²</p>
      <h3>CrCL</h3>
      <p>{props.crclValue || 0} mL/min</p>
    </div>
  );
}
