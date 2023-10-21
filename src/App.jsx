import { Route, Routes, Switch, Redirect, Navigate } from "react-router-dom";
import { useState } from "react";
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
import { FilteredDataProvider } from "./Store/filteredData";
import { CoursesData } from "./Store/coursesData";
import { EmployeesData } from "./Store/employees";
import Admin from "./Pages/Admin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <CoursesData>
              <FilteredDataProvider>
                <Home />
              </FilteredDataProvider>
            </CoursesData>
          }
        />
        <Route
          path="/courses"
          element={
            <CoursesData>
              <FilteredDataProvider>
                <Courses />
              </FilteredDataProvider>
            </CoursesData>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/courses/course-details/:id" element={<CourseDetails />} />
        <Route path="/admin-sign-in" element={<Registration />} />
        <Route
          path="/admin"
          element={
            <EmployeesData>
              <Admin />
            </EmployeesData>
          }
        />
        {/* <ProtectedRoute
          path="/admin"
          element={
            <EmployeesData>
              <Admin />
            </EmployeesData>
          }
        /> */}
        {/* <Route path="/admin" element={<ProtectedRoute />}>
          <EmployeesData>
            <Admin />
          </EmployeesData>
        </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

const isAuthenticated = !!document.cookie.includes("sessionId=");

// Usage in your ProtectedRoute component:
const ProtectedRoute = ({ path, element }) => {
  if (isAuthenticated) {
    return <Route path={path} element={element} />;
  } else {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/admin-sign-in" />;
  }
};
// import React, { useEffect, useState } from "react";

// function App() {
//   const [courseData, setCourseData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           "https://tcp-server-66641451cde5.herokuapp.com/courses"
//         );

//         if (res.ok) {
//           const response = await res.json();
//           setCourseData(response);
//         } else {
//           console.error("Failed to fetch data");
//         }
//       } catch (error) {
//         console.error("Error while fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="App" style={{ backgroundColor: "white", color: "black" }}>
//       <header className="App-header">
//         {courseData.map((course, index) => (
//           <div key={index}>
//             <h2>{course.courseName}</h2>
//             <p>{course.description}</p>
//             <img
//               // src="https://firebasestorage.googleapis.com/v0/b/tcp-api-38206.appspot.com/o/course-img%2Fcourses-icons-04.svg?alt=media&token=f86a08aa-01c8-4174-801e-be59ff61a595"
//               src={`${course.image}`}
//               alt={course.courseName}
//               width="100px"
//             />
//             <img src={course.courseDetailImg} alt="" width="200px" />
//           </div>
//         ))}
//       </header>
//     </div>
//   );
// }

// export default App;
