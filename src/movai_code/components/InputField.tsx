// src/movai_code/components/InputField.tsx
import React, { useState, useEffect } from 'react';
import Character from './Character';
import { useInput } from '../context/InputContext';  // On garde l'import du contexte
import { saveToFile, loadFromFile } from '../utils/fileUtils';  // Utilisé pour la sauvegarde et la lecture du localStorage

export const InputField: React.FC = () => {
  const { input, setInputValue } = useInput();  // Le hook personnalisé pour le contexte
  const [typedInput, setTypedInput] = useState(input);  // Nous utilisons un état local pour la gestion du champ de texte

  // Utiliser loadFromFile pour initialiser l'input avec ce qui est dans le localStorage au démarrage
  useEffect(() => {
    const savedInput = loadFromFile();
    if (savedInput) {
      setInputValue(savedInput);  // Charger la valeur dans Redux et dans l'état local
    }
  }, [setInputValue]);

  // Synchroniser le champ de texte avec la valeur actuelle de Redux (via `input`)
  useEffect(() => {
    setTypedInput(input);  // Dès que l'input change dans Redux, on met à jour le texte local
  }, [input]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTypedInput(newValue);  // On met à jour le texte local
    localStorage.setItem('input', newValue);  // Enregistrer immédiatement dans le localStorage
  };

  const handleValidation = () => {
    setInputValue(typedInput);  // Enregistrer la valeur dans Redux
    saveToFile(typedInput);  // Sauvegarder également dans localStorage
  };

  return (
    <div>
      <input
        type="text"
        value={typedInput}  // Affiche le texte actuel (local ou du Redux)
        onChange={handleChange}  // Lors de la saisie, on met à jour le texte
        onBlur={handleValidation}  // Enregistrer quand l'utilisateur perd le focus
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
