
function Reset({ setBill, setTipPercentage, setPeople }) {
  const handleReset = () => {
    setBill(0);
    setTipPercentage(0);
    setPeople(1);
  };

  return (
    <div className="reset">
      <button className='reset-button' type="button" onClick={handleReset}><b>RESET</b></button>
    </div>
  );
}

export default Reset;