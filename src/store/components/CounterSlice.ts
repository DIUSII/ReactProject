import { createSlice } from '@reduxjs/toolkit';

export interface ICounter {
  value: number;
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: (state: ICounter) => {
      state.value += 1;
    },
    decremented: (state: ICounter) => {
      state.value -= 1;
    }
  }
});

export const { incremented, decremented } = counterSlice.actions;

export default counterSlice.reducer;

