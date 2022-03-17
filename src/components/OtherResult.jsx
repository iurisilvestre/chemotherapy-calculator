import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  resultBox: {
    width: "90%",
    height: "3.5rem",
    display: "grid",
    placeItems: "center",
    border: "1px solid lightgrey",
    borderRadius: "0.2rem",
  },
});

export default function OtherResult(props) {
  const classes = useStyles();
  return (
    <div className={classes.resultBox}>
      <h3>{props.name}</h3>
      {props.name === "CrCl" ? (
        <p>{props.displayValue || 0} mL/min</p>
      ) : (
        <p>{props.displayValue || 0} m²</p>
      )}
    </div>
  );
}
