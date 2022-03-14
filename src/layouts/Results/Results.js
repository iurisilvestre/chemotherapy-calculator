import OtherResult from "../../components/OtherResult";

//MUI
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  typography: {
    margin: "1rem 0",
  },
  resultBox: {
    width: "100%",
    height: "7rem",
    backgroundColor: "#fafafa",
    borderRadius: "0.2rem",
    border: "1px solid lightgrey",
    padding: "0.8rem",
  },
});

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
      <OtherResult bsaValue={props.bsaValue} name={"BSA"} />
      <OtherResult bsaValue={props.crclValue} name={"CrCl"} />
    </div>
  );
}
