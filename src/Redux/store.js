import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducer from "./Slices/AuthSlice";
import CourseSliceReducer from "./Slices/CourseSlice";
import RazorpaySlice from "./Slices/RazorpaySlice";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    course: CourseSliceReducer,
    Razorpay: RazorpaySlice,
  },
  devTools: true,
});

export default store;
