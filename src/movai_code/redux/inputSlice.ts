// src/movai_code/redux/inputSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputState {
  characters: string[];  // Utiliser un tableau pour stocker les caractères
}

const initialState: InputState = {
  characters: [],
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.characters = action.payload.split('');  // Convertir la chaîne en tableau de caractères
    },
  },
});

export const { setInput } = inputSlice.actions;

export default inputSlice.reducer;
