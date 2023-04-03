import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginHandler = createAsyncThunk(
  "loginHandler",
  async ({ username, password }) => {
    try {
      const { data } = await axios.post("https://reqres.in/api/login", {
        email: username,
        password,
      });

      return data;
    } catch (err) {
      throw err;
    }
  }
);
const LoginSlice = createSlice({
  name: "login",
  initialState: { loading: false },
  extraReducers: {
    [loginHandler.pending]: (state) => {
      state.loading = true;
    },
    [loginHandler.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [loginHandler.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default LoginSlice.reducer;
export const actions = LoginSlice.actions;
