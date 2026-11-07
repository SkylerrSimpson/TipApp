function Bill({ bill, setBill }) {
  return (
    <div className="bill-box-container">
      <label className="bill" htmlFor="bill">
        Bill
      </label>
      <div className="bill-box">
        <div className="bill-image" aria-hidden="true" />
        <input
          id="bill"
          type="text"
          inputMode="decimal"
          placeholder="Enter amount here"
          value={bill}
          onChange={(event) => setBill(event.target.value)}
        />
      </div>
    </div>
  );
}
export default Bill;
