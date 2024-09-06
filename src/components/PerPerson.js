function PerPerson({ tipAmount, totalAmount }) {
  return (
    <>
      <div className="tip-percent-box">
        <div className="tip-amount-text">Tip Amount</div>
        <div className="tip-amount-text-per-person">/person</div>
        <div className="tip-perperson-box">${tipAmount.toFixed(2)}</div>
      </div>

      <div className="total-box">
        <div className="tip-amount-text">Total</div>
        <div className="tip-amount-text-per-person">/person</div>
        <div className='tip-total-box'>${totalAmount.toFixed(2)}</div>
      </div>
    </>
  );
}

export default PerPerson;