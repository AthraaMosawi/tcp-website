import { useEffect, useState, createContext } from "react";
import axios from "axios";
const Context = createContext();

export function CoursesData({ children }) {
  // courseFeild = {}
  const coursesUrl = "https://tcp-server-66641451cde5.herokuapp.com/courses";
  const [courses, setCourses] = useState([]);//{}
  const [error, setError] = useState("");

  useEffect(() => {//handleSubmit
    const getCourses = async () => {
      await axios
        .get(coursesUrl)//.get => .post(coursesUrl, courseFeild)
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




// import { useEffect, useState, createContext } from 'react';
// import axios from 'axios';

// const Context = createContext();

// export function CoursesData({ children }) {
//   const coursesUrl = 'https://tcp-server-66641451cde5.herokuapp.com/courses';
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const getCourses = async () => {
//       try {
//         const response = await axios.get(coursesUrl);
//         setCourses(response.data);
//         for (const course of response.data) {
//           // Assuming your API response contains a field 'image' with the image URL
//           await loadImageAndDisplay(course.image);
//         }
//       } catch (err) {
//         setError(err.message);
//       }
//     };
//     getCourses();
//   }, []);

//   async function loadImageAndDisplay(url) {
//     // ... The function as defined earlier ...
//     try {
//       const response = await axios.get(url, { responseType: 'blob' });
//       const blob = new Blob([response.data], { type: 'image/svg' }); // Change 'image/jpeg' to the appropriate MIME type
//       const imageUrl = URL.createObjectURL(blob);

//       const img = new Image();
//       img.src = imageUrl;
//       await img.decode();

//       document.body.append(img);

//       // Don't forget to revoke the blob URL when you're done
//       URL.revokeObjectURL(imageUrl);
//     } catch (error) {
//       console.error('Error loading image:', error);
//     }


//   }

//   return (
//     <Context.Provider value={{ courses, error, setCourses, setError }}>
//       {children}
//     </Context.Provider>
//   );
// }

// export default Context;
