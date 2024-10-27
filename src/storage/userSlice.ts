import { createSlice } from "@reduxjs/toolkit";

// Initial state with empty user data
const initialState = {
  name: "",
  email: "",
  isLoggedIn: false,
};

// Create user slice with actions
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
