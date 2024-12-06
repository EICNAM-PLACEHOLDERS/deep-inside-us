import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputState {
  characters: string[];
}

const initialState: InputState = {
  characters: [],
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.characters = action.payload.split('');
    },
  },
});

export const { setInput } = inputSlice.actions;

export default inputSlice.reducer;
