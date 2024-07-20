import "./App.css";

import { Route, Routes } from "react-router-dom";

import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import CourseDescription from './Pages/Course/CourseDescription';
import CourseList from "./Pages/Course/CourseList";
import Denied from "./Pages/Denied";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/denied" element={<Denied />} />
        <Route path= "/course/description" element={<CourseDescription />} />

        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
