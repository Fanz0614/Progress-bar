import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dataSlice } from './progressBarSlice';

const rootReducer = combineReducers({
  details: dataSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
