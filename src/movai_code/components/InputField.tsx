import React, { useState, useEffect } from 'react';
import { useInput } from '../context/InputContext';
import { saveToFile, loadFromFile } from '../utils/fileUtils';

export default function InputField() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-700 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-300 text-white p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mise à jour de chaîne de caractères</h1>
        <input
          type="text"
          value={typedInput}
          onChange={handleChange}
          onBlur={handleValidation}
          placeholder="Type something..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-400 mb-4"
        />
        <button
          onClick={handleValidation}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Valider
        </button>
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Dernier text validé :</p>
          <p className="text-gray-900 font-semibold">{input}</p>
        </div>
      </div>
    </div>
  );
}
