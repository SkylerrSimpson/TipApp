function Bill({ bill, setBill }) {
  const handleChanges = (event) => {
   // Convert input value to a number and handle empty strings
   const value = event.target.value;
   if (!isNaN(value) && value.trim() !== '') {
     setBill(parseFloat(value));
   } else {
     setBill(0); // Default value if input is invalid
   }
  };

  return (
<div className="bill-box-container">
      <span className="bill">Bill</span>
      <div className="bill-box">
        <div className="bill-image"></div>
        <input 
          type='text' 
          placeholder="Enter amount here"
          value={bill || ''} // Ensure it's an empty string if null
          onChange={handleChanges}
        />
      </div>
    </div>

  );
}


export default Bill;