//MUI
import Typography from "@mui/material/Typography";

export default function Results(props) {
  return (
    <div className="results">
      <Typography variant="h6">Results</Typography>
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
