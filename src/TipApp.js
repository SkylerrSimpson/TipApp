import "./App.css";
import Bill from "./components/Bill";
import People from "./components/People";
import Tip from "./components/Tip";
import PerPerson from "./components/PerPerson";
import Reset from "./components/Reset";
import { useState } from "react";
function TipApp() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState("1");
  const [resetKey, setResetKey] = useState(0);
  const amount = Number(bill || 0),
    count = Number(people);
  const validBill = Number.isFinite(amount) && amount >= 0;
  const validPeople = Number.isSafeInteger(count) && count > 0;
  const invalidTotal = !Number.isFinite(amount * (1 + tipPercentage / 100));
  const error = invalidTotal
    ? "Amounts are too large."
    : !validBill
      ? "Enter a nonnegative bill amount."
      : !validPeople
        ? "Enter at least one whole person."
        : "";
  const totalTip = amount * (tipPercentage / 100);
  const tipPerPerson = error ? 0 : totalTip / count;
  const totalPerPerson = error ? 0 : (amount + totalTip) / count;
  return (
    <div className="overview">
      <div className="tips">
        <div className="tips-left">
          <Bill bill={bill} setBill={setBill} />
          <Tip
            key={resetKey}
            tipPercentage={tipPercentage}
            setTipPercentage={setTipPercentage}
          />
          <People people={people} setPeople={setPeople} />
          {error && (
            <p role="alert" style={{ margin: 0, fontSize: 12 }}>
              {error}
            </p>
          )}
        </div>
        <div className="tips-right">
          <PerPerson tipAmount={tipPerPerson} totalAmount={totalPerPerson} />
          <Reset
            setBill={setBill}
            setTipPercentage={setTipPercentage}
            setPeople={setPeople}
            onReset={() => setResetKey((key) => key + 1)}
          />
        </div>
      </div>
    </div>
  );
}
export default TipApp;
