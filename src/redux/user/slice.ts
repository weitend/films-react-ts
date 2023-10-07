import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { changeId } from "./thunks";
import { initialUserStateInterface } from "./types";

const initialUserState: initialUserStateInterface = {
  email: "",
  token: Cookies.get("token"),
  id: Cookies.get("account_id"),
  isAuth: Cookies.get("token") ? true : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changeToken: (state, action) => {
      state.token = action.payload;
    },
    changeAuth: (state) => {
      state.isAuth = true;
    },
    resetUser: (state) => {
      state.email = "";
      state.token = "";
      state.isAuth = false;
      state.id = "";
      Cookies.remove("account_id");
      Cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeId.fulfilled, (state, action) => {
      state.id = action.payload;
    });
  },
});

export const { changeEmail, changeToken, changeAuth, resetUser } =
  userSlice.actions;
export default userSlice.reducer;
