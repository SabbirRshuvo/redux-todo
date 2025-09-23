import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
