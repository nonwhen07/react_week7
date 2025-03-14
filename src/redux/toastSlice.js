import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //測試資料
  messages: [
    {
      id: Date.now(),
      text: "hello",
      status: "success",
    },
  ],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    pushMessage(state, action) {
      const { text, status } = action.payload;
      const id = Date.now();
      state.messages.push({
        id,
        text,
        status,
      });
    },
  },
});

export const { pushMessage } = toastSlice.actions;

export default toastSlice.reducer;
