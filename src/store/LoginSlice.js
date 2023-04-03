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
export const getUsers = createAsyncThunk("getUsers", async () => {
  try {
    const { data } = await axios.get("https://reqres.in/api/users?page=2");
    return data;
  } catch (err) {
    throw err;
  }
});
export const getUser = createAsyncThunk("getUser", async ({ id }) => {
  try {
    const { data } = await axios.get(`https://reqres.in/api/users/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
});
const LoginSlice = createSlice({
  name: "login",
  initialState: { loading: false, users: [], user: {} },
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
    //////////////////////
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload.data;
      state.loading = false;
    },
    [getUsers.rejected]: (state) => {
      state.loading = false;
    },
    //////////////////////
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.loading = false;
    },
    [getUser.rejected]: (state) => {
      state.loading = false;
    },
    //////////////////////
  },
});

export default LoginSlice.reducer;
export const actions = LoginSlice.actions;
