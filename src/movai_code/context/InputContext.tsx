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
  const input = useSelector((state: RootState) => state.input.characters.join('')); 

  const setInputValue = (value: string) => {
    dispatch(setInput(value)); 
    localStorage.setItem('input', value); 
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
    throw new Error('Oh non un bug.');
  }
  return context;
};
