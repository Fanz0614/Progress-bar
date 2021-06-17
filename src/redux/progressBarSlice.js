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

const url = 'http://pb-api.herokuapp.com/bars';

export const getData = createAsyncThunk(
  'barsdata/getData',
  async (thunkAPI) => {
    const { data } = await axios.get(url);
    return data;
  }
);

export const dataSlice = createSlice({
  name: 'barsdata',
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
