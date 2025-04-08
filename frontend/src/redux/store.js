import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./profileSlice";
export const store = configureStore({
	reducer: {
		Profile: profileSlice.reducer,
	},
});
