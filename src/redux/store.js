import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";
export const store = configureStore({
  reducer: {
    //this reducer is what we created in todoSlice
    todo: todoReducer,
  },
});
