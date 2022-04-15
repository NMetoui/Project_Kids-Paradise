import { createSlice } from "@reduxjs/toolkit";
const initialeditbookState = {
  iseditbook: false,
};

const editbookSlice = createSlice({
  name: "editbook",
  initialState: initialeditbookState,
  reducers: {
    login(state) {
      state.iseditbook = true;
    },
    logout(state) {
      state.iseditbook = false;
    },
  },
});

export const editbookActions = editbookSlice.actions;
export default editbookSlice.reducer;
