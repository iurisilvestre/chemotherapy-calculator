import { checkPatientData } from "../utils/functions";

export default function SelectBox(props) {
  return (
    <select onChange={props.onSelect} disabled={props.disabled}>
      <option hidden>{props.label}</option>
      {/* IF IT IS SELECT CANCER BOX */}
      {props.label === "Select Cancer" &&
        props.renderCondition &&
        props.optionsList.map((item, itemIndex) => (
          <option key={itemIndex} value={item}>
            {item}
          </option>
        ))}
      {/* IF IT IS SELECT SCHEME BOX */}
      {props.label === "Select Scheme" &&
        props.renderCondition &&
        props.optionsList.map((item) => (
          <option key={item.id} value={item.id}>
            {item.scheme}
          </option>
        ))}
    </select>
  );
}
