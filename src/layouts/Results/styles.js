import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  typography: {
    margin: "1rem 0",
  },
  resultBox: {
    width: "100%",
    height: "8rem",
    backgroundColor: "#fafafa",
    borderRadius: "0.2rem",
    border: "1px solid lightgrey",
    padding: "0.8rem",
  },
  otherResultsContainer: {
    display: "flex",
    marginTop: "0.8rem",
    justifyContent: "space-between",
  },
});

export default useStyles;
