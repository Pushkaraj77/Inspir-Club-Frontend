import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export interface AuthState {
  user: any;
  isLoggedIn: boolean;
  role: String;
}

// initial state of the auth slice
const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogin: (state: any, action: any) => {
      const user = {
        email: action.payload?.user?.email,
        phoneNumber: action.payload?.user?.phoneNumber,
        address: action.payload?.user?.address,
        location: action.payload?.user?.location,
        _id: action.payload?.user?._id,
        fullName: action.payload?.user?.fullName,
        firstName: action.payload?.user?.firstName,
        lastName: action.payload?.user?.lastName,
      };
      const expiryTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      Cookies.set("token", action.payload?.token, { expires: expiryTime });
      Cookies.set("user", JSON.stringify(action.payload?.user));

      state.user = action.payload.user;
      state.isLoggedIn = true;
      if (state.user?.role) {
        state.role = state.user.role;
      } else {
        state.role = "influencer";
      }
    },
    onReload: (state: any) => {
      const data = Cookies.get("user");
      if (data) {
        try {
          state.user = JSON.parse(data);
        } catch (error) {
          console.error("Error parsing user data from cookies", error);
        }
        state.isLoggedIn = true;
        if (state.user?.role) {
          state.role = state.user.role;
        } else {
          state.role = "influencer";
        }
      }
    },
    onLogout: (state: any) => {
      Cookies.remove("token");
      Cookies.remove("user");
      // update the state
      state.user = null;
      state.isLoggedIn = false;
      state.role = "";
    },
    onUpdateUser: (state: any, action: any) => {
      // update the user in the local storage
      document.cookie = `user=${action.payload?.user};max-age=31536000;path=/`;
      // update the state
      state.user = action.payload;
    },
  },
});

export const { onLogin, onLogout, onUpdateUser, onReload } = authSlice.actions;

export default authSlice.reducer;
