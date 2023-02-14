import React, { useState } from 'react';

const RegEx = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value.replace(/\d/g, '');
    setInputValue(value);
  };

  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <div></div>
        <button onClick={() => setInputValue('')}>Click Button</button>
      </div>
    </div>
  );
};

export default RegEx;
