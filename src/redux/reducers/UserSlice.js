import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.currentUser = action.payload.user;
            console.log("action.payload.user",action.payload.user);
            document.cookie = `fittone-app-token=${action.payload.token}; path=/;`;
            localStorage.setItem("fittone-app-token", action.payload.token);
        },
        logout: (state) => {
            state.currentUser = null;
            localStorage.removeItem("fittone-app-token");
            document.cookie = "fittone-app-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        },
    },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;