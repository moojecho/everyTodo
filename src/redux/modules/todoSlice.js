import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __getTodosThunk = createAsyncThunk("GET_TODO", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get("http://localhost:3001/todos");
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodosThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodosThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getTodosThunk.pending]: (state) => {
      state.isLoading = true;
    },
  },
});
export default todoSlice.reducer;
