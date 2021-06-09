import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: null,
  data: {
    buttons: [],
    bars: [],
    limit: 0,
  },
  error: null,
};

export const getData = createAsyncThunk('data/getData', async (thunkAPI) => {
  const { data } = await axios.get('http://pb-api.herokuapp.com/bars');
  return data;
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
