function People({ people, setPeople }) {
  return (
    <div className="people-box-container">
      <label className="bill" htmlFor="people">
        Number of people
      </label>
      <div className="people-image" aria-hidden="true" />
      <div className="people-box">
        <input
          id="people"
          type="text"
          inputMode="numeric"
          placeholder="How many people?"
          value={people}
          onChange={(event) => setPeople(event.target.value)}
        />
      </div>
    </div>
  );
}
export default People;
