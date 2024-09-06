import { useState } from 'react';

function Tip({ tipPercentage, setTipPercentage }) {
  const [isCustomInputVisible, setIsCustomInputVisible] = useState(false);
  const [customTip, setCustomTip] = useState('');

  const handleTipClick = (percentage) => {
    setTipPercentage(percentage);
    setIsCustomInputVisible(false); // Hide custom input when a preset percentage is selected
  };

  const handleCustomInputChange = (event) => {
    setCustomTip(event.target.value);
  };

  const handleCustomInputKeyDown = (event) => {
    if (event.key === 'Enter' && !isNaN(customTip) && customTip.trim() !== '') {
      setTipPercentage(parseFloat(customTip));
      setIsCustomInputVisible(false); // Hide custom input after setting the tip
      setCustomTip(''); // Clear the input
    }
  };

  const handleCustomButtonClick = () => {
    setIsCustomInputVisible(true);
  };

  return (
    <div className='tip-buttons-container'>
      <span className='bill'>Select Tip %</span>
      <div className="tip-buttons">
          <button onClick={() => handleTipClick(5)}>5%</button>
          <button onClick={() => handleTipClick(10)}>10%</button>
          <button onClick={() => handleTipClick(15)}>15%</button>
          <button onClick={() => handleTipClick(25)}>25%</button>
          <button onClick={() => handleTipClick(50)}>50%</button>
          <button className='custom-button' onClick={handleCustomButtonClick}>
            {isCustomInputVisible ? (
              <input
                type="text"
                value={customTip}
                onChange={handleCustomInputChange}
                onKeyDown={handleCustomInputKeyDown}
                placeholder="Enter %"
              />
            ) : (
              'Custom'
            )}
          </button>
        </div>
    </div>
 
  );
}

export default Tip;