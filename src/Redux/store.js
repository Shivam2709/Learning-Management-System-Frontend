import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducer from "./Slices/AuthSlice";
import CourseSliceReducer from "./Slices/CourseSlice";
import LectureSliceReducer from "./Slices/LectureSlice";
import RazorpaySliceReducer from "./Slices/RazorpaySlice";
import statSliceReducer from "./Slices/StatSlice";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    course: CourseSliceReducer,
    Razorpay: RazorpaySliceReducer,
    lecture: LectureSliceReducer,
    stat: statSliceReducer,
  },
  devTools: true,
});

export default store;
