import React, { useState } from 'react';
import "./Dropdown.css"

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Diario', 'Semanal', 'Mensual'];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <label className="dropdown-label" htmlFor="dropdown">Aportar:</label>
      <select className="dropdown-select" id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Seleccione...</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/*
      <p>{selectedOption}</p>
        */}
    </div>
  );
};

export default Dropdown;
