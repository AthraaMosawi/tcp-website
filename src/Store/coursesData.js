import { useEffect, useState, createContext } from "react";
import axios from "axios";
const Context = createContext();

export function CoursesData({ children }) {
  const coursesUrl = "https://tcp-server-66641451cde5.herokuapp.com/courses";
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCourses = async () => {
      await axios
        .get(coursesUrl)
        .then((response) => {
          console.log(response.data);
          setCourses(response.data);
        })
        .catch((err) => {
          setError(err.message);
        });
    };
    getCourses();
  }, []);

  return (
    <>
      <Context.Provider value={{ courses, error, setCourses, setError }}>
        {children}
      </Context.Provider>
    </>
  );
}

export default Context;
