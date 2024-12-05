// src/movai_code/context/InputContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput } from '../redux/inputSlice';
import { RootState } from '../redux/store';

interface InputContextProps {
  input: string;
  setInputValue: (value: string) => void;
}

interface InputProviderProps {
  children: ReactNode;
}

const InputContext = createContext<InputContextProps | undefined>(undefined);

export const InputProvider: React.FC<InputProviderProps> = ({ children }) => {
  const dispatch = useDispatch();
  const input = useSelector((state: RootState) => state.input.characters.join(''));  // On récupère le texte sous forme de chaîne

  const setInputValue = (value: string) => {
    dispatch(setInput(value));  // Mettre à jour l'état Redux
    localStorage.setItem('input', value);  // Enregistrer dans le localStorage
  };

  return (
    <InputContext.Provider value={{ input, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInput = (): InputContextProps => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error('useInput must be used within an InputProvider');
  }
  return context;
};
