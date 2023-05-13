import OtherResult from "../../components/OtherResult";
import useStyles from "./styles";
//MUI
import Typography from "@mui/material/Typography";

export default function Results(props) {
  const classes = useStyles();

  return (
    <div className="results">
      <Typography variant="h6" className={classes.typography}>
        Results
      </Typography>
      <div className={classes.resultBox}>
        {props.carboplatinValue && <p>Carboplatin: {props.carboplatinValue}</p>}
        {props.doseValue &&
          props.doseValue.map((item, index) => (
            <p key={index}>{`${item.drug}: ${item.dose} mg`}</p>
          ))}
      </div>
      <div className={classes.otherResultsContainer}>
        <OtherResult displayValue={props.bsaValue} name={"BSA"} />
        <OtherResult displayValue={props.crclValue} name={"CrCl"} />
      </div>
    </div>
  );
}
