import { createSlice } from "@reduxjs/toolkit";

const intial = {
  splitTip: 0,
  splitTotal: 0,
  resetTrigger: 0,
};

const slice = createSlice({
  name: "bill",
  initialState: intial,
  reducers: {
    calculateTip(state, action) {
      const { bill, people, tip } = action.payload;
      state.splitTotal = bill * (tip / 100) + bill / people;
      state.splitTip = (bill * (tip / 100)) / people;
    },

    reset(state, action) {
      state.splitTip = 0;
      state.splitTotal = 0;
      state.resetTrigger++;
    },
  },
});

export const { calculateTip, reset } = slice.actions;

export default slice.reducer;
