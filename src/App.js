import { CoursesSchemes } from "./coursesScheme";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Chemotherapy Calculator</h1>
      <div className="insert-patient-input">
        <h2>1. Insert Patient Info</h2>
        <div>
          <input type="radio" name="genre" value="male" />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input type="radio" name="genre" value="female" />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" name="age" />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input type="number" name="height" />
        </div>
        <div>
          <label htmlFor="creatinine">reatinine</label>
          <input type="number" name="creatinine" />
        </div>
        <div>
          <label htmlFor="auc">AUC</label>
          <input type="number" name="auc" />
        </div>
        <button type="button">Reset</button>
      </div>

      <div className="select-course-cheme">
        <h2>2. Select Course Scheme</h2>
        <select name="select-cancer">
          <option>Select Cancer</option>
        </select>
        <select name="select-regimen">
          <option>Select Regimen</option>
        </select>
      </div>
      <div className="results">
        <h2>Results</h2>
        <p className="results-claculations">Results here</p>
        <h3>BSA</h3>
        <p>BSA value</p>
        <h3>CrCL</h3>
        <p>CrCl Value</p>
      </div>
    </div>
  );
}

export default App;
