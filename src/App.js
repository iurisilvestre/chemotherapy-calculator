import { CoursesSchemes } from "./coursesScheme";

import PatientInfo from "./components/PatientInfo";
import CourseSchemes from "./components/CourseSchemes";
import Results from "./components/Results";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Chemotherapy Calculator</h1>
      <PatientInfo />
      <CourseSchemes coursesschemes={CourseSchemes} />
      <Results />
    </div>
  );
}

export default App;
