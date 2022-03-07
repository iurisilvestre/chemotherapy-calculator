import { TextField, InputAdornment } from "@mui/material";

export default function Input(props) {
  return (
    <TextField
      name={props.name}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      fullWidth
      variant="outlined"
      margin="dense"
      size="small"
      className={`${props.aucRequired ? "auc-required" : ""}`}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{props.adornment}</InputAdornment>
        ),
      }}
    ></TextField>
  );
}
