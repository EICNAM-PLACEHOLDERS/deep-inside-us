// src/movai_code/components/InputField.tsx
import React, { useState, useEffect } from 'react';
import Character from './Character';
import { useInput } from '../context/InputContext';
import { saveToFile, loadFromFile } from '../utils/fileUtils'; 

export const InputField: React.FC = () => {
  const { input, setInputValue } = useInput(); 
  const [typedInput, setTypedInput] = useState(input);  

  useEffect(() => {
    const savedInput = loadFromFile();
    if (savedInput) {
      setInputValue(savedInput);
    }
  }, [setInputValue]);

  useEffect(() => {
    setTypedInput(input);  
  }, [input]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTypedInput(newValue);  
    localStorage.setItem('input', newValue);  
  };

  const handleValidation = () => {
    setInputValue(typedInput); 
    saveToFile(typedInput); 
  };

  return (
    <div>
      <input
        type="text"
        value={typedInput} 
        onChange={handleChange} 
        onBlur={handleValidation} 
      />
      <button onClick={handleValidation}>Validate</button>
      <div>
        {input.split('').map((char, index) => (
          <Character key={index} char={char} />
        ))}
      </div>
    </div>
  );
};
