function Reset({ setBill, setTipPercentage, setPeople, onReset }) {
  const handleReset = () => {
    setBill("");
    setTipPercentage(0);
    setPeople("1");
    onReset();
  };

  return (
    <div className="reset">
      <button className="reset-button" type="button" onClick={handleReset}>
        <b>RESET</b>
      </button>
    </div>
  );
}

export default Reset;
