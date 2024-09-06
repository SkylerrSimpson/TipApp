function People({ people, setPeople }) {


  const handleChanges = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value.trim() !== '') {
      setPeople(parseFloat(value));
    } else {
      setPeople(0); // Default value if input is invalid
    }
  };

  return (
    <div className="people-box-container">
      <span className="bill">Number of people</span>
      <div className="people-image"></div>
      <div className="people-box">
        <input
          type='text'
          placeholder="How many people?"
          value={people || ''} // Ensure it's an empty string if null
          onChange={handleChanges}
        />
      </div>
    </div>

  );
}

export default People;