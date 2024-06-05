import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState('');

  const handleButtonClick = (value) => {
    if (['+', '-', '*', '/'].includes(value)) {
      setOperator(value);
      setPreviousValue(currentValue);
      setCurrentValue('');
    } else if (value === '=') {
      if (operator && previousValue) {
        const result = eval(`${previousValue} ${operator} ${currentValue}`);
        setCurrentValue(result.toString());
        setOperator(null);
        setPreviousValue('');
      }
    } else if (value === 'C') {
      setCurrentValue('');
      setOperator(null);
      setPreviousValue('');
    } else if (value === 'Del') {
      setCurrentValue(currentValue.slice(0, -1));
    } else {
      setCurrentValue(currentValue + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={currentValue || previousValue || '0'} />
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', 'Del', '=', '+'].map((btn) => (
          <Button key={btn} value={btn} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
