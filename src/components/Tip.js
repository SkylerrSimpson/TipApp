import { useState } from "react";
function Tip({ tipPercentage, setTipPercentage }) {
  const [isCustomInputVisible, setIsCustomInputVisible] = useState(false);
  const [customTip, setCustomTip] = useState("");
  const [error, setError] = useState("");
  const handleTipClick = (percentage) => {
    setTipPercentage(percentage);
    setIsCustomInputVisible(false);
    setError("");
  };
  const commit = (event) => {
    if (event.key !== "Enter") return;
    const value = Number(customTip);
    if (!customTip.trim() || !Number.isFinite(value) || value < 0) {
      setError("Enter a nonnegative tip percentage.");
      return;
    }
    handleTipClick(value);
    setCustomTip("");
  };
  return (
    <div className="tip-buttons-container">
      <span className="bill" id="tip-label">
        Select Tip %
      </span>
      <div className="tip-buttons" role="group" aria-labelledby="tip-label">
        {[5, 10, 15, 25, 50].map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={value === tipPercentage}
            onClick={() => handleTipClick(value)}
          >
            {value}%
          </button>
        ))}
        {isCustomInputVisible ? (
          <input
            className="custom-tip-input"
            aria-label="Custom tip percentage; press Enter to apply"
            inputMode="decimal"
            autoFocus
            value={customTip}
            onChange={(event) => setCustomTip(event.target.value)}
            onKeyDown={commit}
            placeholder="Enter %"
          />
        ) : (
          <button
            type="button"
            className="custom-button"
            onClick={() => setIsCustomInputVisible(true)}
          >
            Custom
          </button>
        )}
      </div>
      {error && (
        <p role="alert" style={{ fontSize: 12 }}>
          {error}
        </p>
      )}
    </div>
  );
}
export default Tip;
