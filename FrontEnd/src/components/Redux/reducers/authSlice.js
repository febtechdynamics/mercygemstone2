import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  isAuth: false,
  user: {},
  errMessage: "",
};

// For Fetching the Loged In User
export const getUser = createAsyncThunk("getUser", async (token) => {
  return axios
    .get(`${import.meta.env.VITE_REACT_APP_base_url}/api/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      console.log(resp);
      return resp?.data?.me;
    })
    .catch((err) => {
      console.log(err);
      throw err?.response?.data?.message;
    });
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout(state) {
      state.user = {};
      state.isAuth = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.user = payload;
      state.isLoading = false;
    });

    builder.addCase(getUser.rejected, (state, action) => {
      state.user = {};
      state.errMessage = action.error;
      state.isLoading = false;
    });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
