import { Route, Routes } from "react-router-dom";
import "./Style/registration.css";
import "./Style/home.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import CourseDetails from "./Pages/CourseDetails";
import Registration from "./Pages/Registration";
import AdminPanel from "./Pages/AdminPanel";
import { FilteredDataProvider } from "./Store/filteredData";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <FilteredDataProvider>
              <Home />
            </FilteredDataProvider>
          }
        />
        <Route
          path="/courses"
          element={
            <FilteredDataProvider>
              <Courses />
            </FilteredDataProvider>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/courses/course-details/:id" element={<CourseDetails />} />
        <Route path="/admin-sign-in" element={<Registration />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
