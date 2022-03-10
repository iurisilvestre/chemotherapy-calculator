import { checkPatientData } from "../utils/functions";

//MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  selectBox: {
    width: "100%",
    marginTop: "1rem",
  },
  selectBackground: {
    backgroundColor: "#fafafa",
  },
});
export default function SelectBox(props) {
  const classes = useStyles();
  return (
    <FormControl variant="filled" className={classes.selectBox}>
      <InputLabel id="selectLabel">{props.label}</InputLabel>
      <Select
        labelId="selectLabel"
        onChange={props.onSelect}
        disabled={props.disabled}
        style={{ backgroundColor: "#fafafa", border: "none" }}
      >
        {props.label === "Select Cancer" &&
          props.renderCondition &&
          props.optionsList.map((item, itemIndex) => (
            <MenuItem key={itemIndex} value={item}>
              {item}
            </MenuItem>
          ))}
        {props.label === "Select Scheme" &&
          props.renderCondition &&
          props.optionsList.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.scheme}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
