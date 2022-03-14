import { makeStyles } from "@mui/styles";

export default function OtherResult(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.bsaValue || 0} m²</p>
    </div>
  );
}
