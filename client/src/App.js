import React, { useState } from "react";
import "./app.scss";
import axios from "axios";
import {
  Form,
  FormGroup,
  Select,
  SelectItem,
  Button,
  Loading,
} from "carbon-components-react";
import { years, months, costCentres, accounts } from "./utils";
import BarChart from "./components/dataviz/BarChart";

function App() {
  const [year, setYear] = useState(2019);
  const [month, setMonth] = useState("Jan");
  const [costCentre, setCostCentre] = useState("CC101");
  const [account, setAccount] = useState(1000000);
  const [prediction, setPrediction] = useState();
  const [scores, setScores] = useState([]);

  const runPred = async (year, month, costCentre, account) => {
    setPrediction("Scoring");
    const res = await axios.post("/api/wml/score", {
      year,
      month,
      costCentre,
      account,
    });
    setPrediction(res.data.values[0]);
    setScores([
      ...scores,
      {
        group: year + month + costCentre + account,
        value: res.data.values[0][0],
      },
    ]);
    console.log(prediction, scores);
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <Form>
          <FormGroup>
            <Select
              id="select-0"
              labelText="Select Year"
              onChange={(e) => setYear(e.target.value)}
            >
              {years.map((yearVal) => (
                <SelectItem text={yearVal} value={yearVal} />
              ))}
            </Select>
          </FormGroup>
          <FormGroup>
            <Select
              id="select-1"
              labelText="Select Month"
              onChange={(e) => setMonth(e.target.value)}
            >
              {months.map((monthVal) => (
                <SelectItem text={monthVal} value={monthVal} />
              ))}
            </Select>
          </FormGroup>
          <FormGroup>
            <Select
              id="select-2"
              labelText="Select Cost Centre"
              onChange={(e) => setCostCentre(e.target.value)}
            >
              {costCentres.map((ccVal) => (
                <SelectItem text={ccVal} value={ccVal} />
              ))}
            </Select>
          </FormGroup>
          <FormGroup>
            <Select
              id="select-3"
              labelText="Select Account"
              onChange={(e) => setAccount(e.target.value)}
            >
              {accounts.map((accVal) => (
                <SelectItem text={accVal} value={accVal} />
              ))}
            </Select>
          </FormGroup>
          <Button onClick={(e) => runPred(year, month, costCentre, account)}>
            Predict
          </Button>
        </Form>
        <div className="predictionContainer">
          {prediction !== "Scoring" && prediction ? "The model predicted" : ""}
          <div className="predictionResult">
            {prediction == "Scoring" ? (
              <Loading description="Loading..." />
            ) : !prediction ? (
              ""
            ) : (
              parseInt(prediction)
            )}
          </div>
        </div>
        <div className="chartContainer">
          {scores.length === 0 ? "" : <BarChart data={scores} />}
        </div>
      </div>
    </div>
  );
}

export default App;
