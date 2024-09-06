import './App.css';
import Bill from './components/Bill';
import People from './components/People';
import Tip from './components/Tip';
import PerPerson from './components/PerPerson';
import Reset from './components/Reset';
import { useState } from 'react';

function TipApp() {

  const [bill, setBill] = useState(0); // Track bill amount
  const [tipPercentage, setTipPercentage] = useState(0); // Track tip percentage
  const [people, setPeople] = useState(1); // Track number of people

  // Calculate the total tip and the tip per person
  const totalTip = bill * (tipPercentage / 100);
  const totalPerPerson = (bill + totalTip) / people;
  const tipPerPerson = totalTip / people;

  return (
    <div className='overview'>
      <div className='tips'>
        <div className='tips-left'>
          <Bill bill={bill} setBill={setBill} />
          <Tip tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} />
          <People people={people} setPeople={setPeople} />
        </div>
       
        <div className='tips-right'>
          <PerPerson tipAmount={tipPerPerson} totalAmount={totalPerPerson} />
          <Reset setBill={setBill} setTipPercentage={setTipPercentage} setPeople={setPeople} />
        </div>
      </div>
    </div>
  );
}

export default TipApp;