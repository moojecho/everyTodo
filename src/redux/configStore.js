import { configureStore } from "@reduxjs/toolkit";
import todos from "../redux/modules/todoSlice";

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;
