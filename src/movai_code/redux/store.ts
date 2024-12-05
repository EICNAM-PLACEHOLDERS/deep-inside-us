// src/movai_code/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './inputSlice';
import { enableMapSet } from 'immer';

enableMapSet();  // Assurer que les Set peuvent être utilisés dans le state

const store = configureStore({
  reducer: {
    input: inputReducer,  // Le reducer du state
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
