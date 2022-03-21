import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  resultBox: {
    width: "48.5%",
    height: "3.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid lightgrey",
    borderRadius: "0.2rem",
  },
  title: {
    color: "grey",
    fontSize: "1rem",
  },
  resultText: {},
});

export default function OtherResult(props) {
  const classes = useStyles();
  return (
    <div className={classes.resultBox}>
      <h3 className={classes.title}>{props.name}</h3>
      {props.name === "CrCl" ? (
        <p className={classes.resultText}>{props.displayValue || 0} mL/min</p>
      ) : (
        <p className={classes.resultText}>{props.displayValue || 0} m²</p>
      )}
    </div>
  );
}
