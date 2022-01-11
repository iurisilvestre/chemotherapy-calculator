import { CoursesSchemes } from "./CoursesSchemes.js";

import PatientInfo from "./components/PatientInfo";
import SchemesSelection from "./components/SchemesSelection";
import Results from "./components/Results";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Chemotherapy Calculator</h1>
      <PatientInfo />
      <SchemesSelection drugsList={CoursesSchemes} />
      <Results />
    </div>
  );
}

export default App;
