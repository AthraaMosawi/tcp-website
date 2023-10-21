// import React from "react";
// import { Formik, Form, Field, FieldArray } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

// const validationSchema = Yup.object().shape({
//   courseName: Yup.string().required("Course name is required"),
//   // Add validation rules for other fields if needed
// });

// const YourFormComponent = () => {
//   const handleSubmit = async (values) => {
//     try {
//       const formData = new FormData();
//       formData.append("image", values.image);
//       formData.append("courseName", values.courseName);
//       formData.append("instructors", JSON.stringify(values.instructors));
//       formData.append("outlines", JSON.stringify(values.outlines));
//       console.log(formData);

//       const response = await axios.post("your_api_endpoint", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       console.log("API response:", response.data);
//     } catch (error) {
//       console.error("API request error:", error);
//     }
//   };

//   return (
//     <Formik
//       initialValues={{
//         image: null,
//         courseName: "",
//         instructors: [],
//         outlines: [],
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(values, { resetForm }) => {
//         console.log("Form values:", values);
//         handleSubmit(values);
//         resetForm();
//       }}
//     >
//       {({ isSubmitting, values, setFieldValue }) => (
//         <Form>
//           <div>
//             <label htmlFor="courseName">Course Name</label>
//             <Field type="text" id="courseName" name="courseName" />
//           </div>

//           <div style={{ border: "1px solid red", marginBottom: "40px" }}>
//             <label>Image</label>
//             <input
//               type="file"
//               name="image"
//               onChange={(event) =>
//                 setFieldValue("image", event.currentTarget.files[0])
//               }
//             />
//           </div>

//           <label>Instructors</label>
//           <FieldArray
//             name="instructors"
//             style={{ background: "red" }}
//             render={({ arrayHelpers }) => (
//               <div>
//                 {values.instructors.map((instructor, index) => (
//                   <div key={index} style={{ border: "1px solid red" }}>
//                     <Field name={`instructors[${index}]`} />
//                   </div>
//                 ))}
//                 <button type="button" onClick={() => arrayHelpers.push("")}>
//                   Add Instructor
//                 </button>
//               </div>
//             )}
//           ></FieldArray>

//           <div style={{ border: "1px solid red" }}>
//             <label>Outlines</label>
//             <FieldArray name="outlines">
//               {({ push }) => (
//                 <div>
//                   {values.outlines.map((_, index) => (
//                     <div key={index}>
//                       <Field name={`outlines[${index}]`} />
//                     </div>
//                   ))}
//                   <button type="button" onClick={() => push("")}>
//                     Add Outline
//                   </button>
//                 </div>
//               )}
//             </FieldArray>
//           </div>

//           <FieldArray name="friends">
//             {({ push }) => (
//               <div>
//                 {values.outlines.length > 0 &&
//                   values.outlines.map((outline, index) => (
//                     <div className="row" key={index}>
//                       <div className="col">
//                         <label htmlFor={`outlines[${index}]`}>Name</label>
//                         <Field
//                           name={`outlines[${index}]`}
//                           placeholder="Jane Doe"
//                           type="text"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 <button
//                   type="button"
//                   className="secondary"
//                   onClick={() => push("")}
//                 >
//                   Add Friend
//                 </button>
//               </div>
//             )}
//           </FieldArray>

//           <div>
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default YourFormComponent;

// // import React from "react";
// // import { Formik, Form, Field, FieldArray } from "formik";

// // // Here is an example of a form with an editable list.
// // // Next to each input are buttons for insert and remove.
// // // If the list is empty, there is a button to add an item.
// // const Admin = () => (
// //   <div>
// //     <h1>Friend List</h1>
// //     <Formik
// //       initialValues={{ friends: ["jared"] }}
// //       onSubmit={(values) =>
// //         setTimeout(() => {
// //           alert(JSON.stringify(values, null, 2));
// //         }, 500)
// //       }
// //       render={({ values }) => (
// //         <Form>
// //           <FieldArray
// //             name="friends"
// //             render={(arrayHelpers) => (
// //               <div>
// //                 {values.friends && values.friends.length > 0 ? (
// //                   values.friends.map((friend, index) => (
// //                     <div key={index}>
// //                       <Field name={`friends.${index}`} />
// //                       <button
// //                         type="button"
// //                         onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
// //                       >
// //                         -
// //                       </button>
// //                       <button
// //                         type="button"
// //                         onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
// //                       >
// //                         +
// //                       </button>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <button type="button" onClick={() => arrayHelpers.push("")}>
// //                     {/* show this when user has removed all friends from the list */}
// //                     Add a friend
// //                   </button>
// //                 )}
// //                 <div>
// //                   <button type="submit">Submit</button>
// //                 </div>
// //               </div>
// //             )}
// //           />
// //         </Form>
// //       )}
// //     />
// //   </div>
// // );
// // export default Admin;
import React from "react";
import { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import axios from "axios";
import { useContext } from "react";
import EmployeesContext from "../Store/employees";
import "../Style/admin.css";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const initialValues = {
  image: null,
  courseDetailImg: null,
  courseName: "",
  maxSeats: "",
  description: "",
  numberOfLessons: "",
  instructors: [""],
  fees: "",
  status: "",
  level: "",
  startingDate: "",
  endingDate: "",
  duration: "",
  eligibilityCriteria: [""],
  outlines: [""],
  courseBenefits: [""],
};

const Admin = () => {
  const theme = useTheme();
  const { employees } = useContext(EmployeesContext);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  //   const handleSubmit = async (values) => {
  //     try {
  //       const formData = new FormData();
  //       formData.append("image", values.image);
  //       formData.append("courseDetailImg", values.courseDetailImg);
  //       formData.append("courseName", values.courseName);
  //       formData.append("description", values.description);
  //       formData.append("status", values.status);
  //       formData.append("startingDate", values.startingDate);
  //       formData.append("endingDate", values.endingDate);
  //       formData.append("duration", values.duration);
  //       formData.append("fees", values.fees);
  //       formData.append("level", values.level);
  //       formData.append("maxSeats", values.maxSeats);
  //       formData.append("numberOfLessons", values.numberOfLessons);
  //       formData.append("instructors", values.instructors);
  //       formData.append("outlines", JSON.stringify(values.outlines));
  //       formData.append(
  //         "eligibilityCriteria",
  //         JSON.stringify(values.eligibilityCriteria)
  //       );
  //       formData.append("courseBenefits", JSON.stringify(values.courseBenefits));

  //       console.log(formData);

  //       const response = await axios.post(
  //           "https://tcp-server-66641451cde5.herokuapp.com/courses",
  //           formData,
  //           {
  //             headers: {
  //               "Content-Type": "multipart/form-data",
  //             },
  //           }
  //       );

  //       console.log("API response:", response.data);
  //     } catch (error) {
  //       console.error("API request error:", error.response.data);
  //     }
  //   };

  const signOut = () => {
    console.log(localStorage.removeItem("userToken"));
    localStorage.removeItem("userToken");
    axios.defaults.headers.common["Authorization"] = undefined;
    navigate("/admin-sign-in");
  };

  return (
    <div className="admin-container">
      <Box
        id="Component"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingTop: "8px",
          paddingLeft: "20px",
          backgroundColor: "#1C2034",
          width: "20%",
          mt: "20px",
          height: "662px",
          [theme.breakpoints.down("sm")]: {
            width: "90%",
            paddingLeft: "0px",
            paddingTop: "0px",
            alignItems: "flex-start",
            height: "auto",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            alignItems: "space-between",
            justifyContent: "space-around",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          {/* //admin img and name */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "2",
              width: "100%",
              alignItems: "center",
              //   border: "1px solid red",
            }}
          >
            <img
              src="https://file.rendit.io/n/iA3RwHoCxQWcJzenTgWi.svg"
              id="UnsplashRmoWqDCqNE"
              style={{
                position: "relative",
                width: "20px",
              }}
              alt=""
            />
            <Typography
              id="Company"
              sx={{ color: "#f9d53e", ml: 2.5, fontSize: "18px" }}
            >
              TCP Admin
            </Typography>
          </Box>

          {/* //tabs section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              [theme.breakpoints.down("sm")]: {
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: "4px",
                gap: "10px",
                width: "auto",
                alignItems: "center",
              }}
            >
              <img
                src="https://file.rendit.io/n/VDpHDiKJmSHhH45EdkcP.svg"
                id="House"
                sx={{ width: "6px" }}
                alt=""
              />
              <Typography id="Text1">Dashboard</Typography>
            </Box>
            <Box
              id="Sidebartabs1"
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: "4px",
                gap: "10px",
                width: "auto",
                alignItems: "center",
              }}
            >
              <img
                src="https://file.rendit.io/n/272NyXlfkccrIofsH7LJ.svg"
                id="Courses"
                sx={{ width: "6px" }}
                alt=""
              />
              <Typography id="Text2">Courses</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: "4px",
                gap: "10px",
                width: "auto",
                alignItems: "flex-start",
              }}
            >
              <img
                src="https://file.rendit.io/n/47fITzYmsHst8qZJgWRo.svg"
                id="Users1"
                sx={{ width: "6px" }}
                alt=""
              />
              <Typography id="Text4">Testimonials</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                width: "auto",
                alignItems: "center",
              }}
            >
              <img
                src="https://file.rendit.io/n/rPCcgYCcuVATs4VlsfFR.svg"
                id="CreditCard"
                sx={{ width: "6px" }}
                alt=""
              />
              <Typography id="Text4">Admins</Typography>
            </Box>
          </Box>
        </Box>
        {/* //sign out section */}
        <Box
          onClick={signOut}
          sx={{
            cursor: "pointer",
            display: "flex",
            mt: "20px",
            mb: "18px",
            ml: "4px",
            gap: "10px",
            width: "auto",
            alignItems: "center",
          }}
        >
          <img
            src="https://file.rendit.io/n/rjNHYQ4dAaEukWtF3dpY.svg"
            id="SignOut"
            sx={{ width: "6px" }}
            alt=""
          />
          <Typography id="Text5">Sign out</Typography>
        </Box>
      </Box>

      <div className="dashboardContainer">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            mb: "25px",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              mb: "15px",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "18px",
              },
            }}
          >
            Courses and Bootcamps
          </Typography>
          <Link
            to="/courses"
            style={{ textDecoration: "none" }}
            onClick={scrollToTop}
          >
            <Button
              style={{ top: "0px", right: "0px", left: "0px" }}
              sx={{
                marginTop: "0",
                backgroundImage:
                  "linear-gradient(90deg, #17c8be 0%, #f9d53e 100%)",
                color: "#222222",
                padding: "3px",
                borderRadius: "5px",
                [theme.breakpoints.down("sm")]: {
                  width: "24%",
                  fontSize: "10px",
                },
              }}
            >
              All Courses
            </Button>
          </Link>
        </Box>
        <div className="line"></div>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            try {
              const submitForm = document.getElementById("submitForm");
              const formData = new FormData(submitForm);
              //   for (const key in values) {
              //     formData.append(key, values[key]);
              //   }
              const response = await axios.post(
                "https://tcp-server-66641451cde5.herokuapp.com/courses",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              );
              console.log("API response:", response.data);
            } catch (error) {
              console.error("API request error:", error.response.data);
            }
          }}
        >
          {({ values, touched, errors, setFieldValue }) => (
            <Form id="submitForm">
              <div className="coursesDashboard">
                {/* left side */}
                <div className="coursesLeftSide">
                  <div className="inputfile">
                    <label>Icon Course Image</label>
                    <input
                      type="file"
                      name="image"
                      onChange={(event) =>
                        setFieldValue("image", event.currentTarget.files[0])
                      }
                    />
                  </div>
                  <div className="inputfile">
                    <label>Course Image</label>
                    <input
                      type="file"
                      name="courseDetailImg"
                      onChange={(event) =>
                        setFieldValue(
                          "courseDetailImg",
                          event.currentTarget.files[0]
                        )
                      }
                    />
                  </div>
                  <div className="optionsStyle">
                    <label>Course Instructor</label>
                    {/* <Field
                      as="select"
                      name="instructors"
                      className="selectOptions"
                    >
                      <option value="" disabled>
                        Select an instructor
                      </option>
                      {employees?.map(
                        (employee) => console.log(employee.roles[0].roleName)
                        // employee.roles[0].roleName === "Instructor" ? (
                        //   <option key={employee.id} value={employee.id}>
                        //     {employee.fullName}
                        //   </option>
                        // ) : (
                        //   "Loading..."
                        // )
                      )}
                    </Field> */}
                    <Field
                      as="select"
                      name="instructors[0]"
                      className="selectOptions"
                    >
                      <option value="test">Select an instructor</option>
                      {/* {employees?.map((employee) => {
                        if (
                          employee.roles.some(
                            (role) => role.roleName === "Instructor"
                          )
                        ) {
                          return (
                            <option key={employee.id} value={employee.id}>
                              {employee.fullName}
                            </option>
                          );
                        } else {
                          return null;
                        }
                      })} */}
                    </Field>
                  </div>
                  <div className="optionsStyle">
                    <label>Course Status</label>
                    <Field as="select" name="status" className="selectOptions">
                      <option value="" disabled>
                        Select a status
                      </option>
                      <option value="Closed">Closed</option>
                      <option value="Open">Open</option>
                      <option value="Upcoming">Upcoming</option>
                    </Field>
                  </div>
                  <div className="optionsStyle">
                    <label>Course Levels</label>
                    <Field as="select" name="level" className="selectOptions">
                      <option value="" disabled>
                        Select a level
                      </option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advance">Advance</option>
                    </Field>
                  </div>

                  <div className="optionsStyle">
                    <label htmlFor="description">Description</label>
                    <Field type="text" id="description" name="description" />
                  </div>
                </div>
                {/* end left side */}

                {/* right side */}
                <div className="coursesRightSide">
                  <div>
                    <label htmlFor="maxSeats">Max Seats</label>
                    <Field type="text" id="maxSeats" name="maxSeats" />
                  </div>
                  <div>
                    <label htmlFor="numberOfLessons">Number Of Lessons</label>
                    <Field
                      type="text"
                      id="numberOfLessons"
                      name="numberOfLessons"
                    />
                  </div>
                  <div>
                    <label htmlFor="fees">Fees</label>
                    <Field type="text" id="fees" name="fees" />
                  </div>
                  <div>
                    <label htmlFor="startingDate">Starting Date</label>
                    <Field type="text" id="startingDate" name="startingDate" />
                  </div>
                  <div>
                    <label htmlFor="endingDate">Ending Date</label>
                    <Field type="text" id="endingDate" name="endingDate" />
                  </div>
                  <div>
                    <label htmlFor="duration">Duration</label>
                    <Field type="text" id="duration" name="duration" />
                  </div>

                  <div>
                    <label htmlFor="courseName">Course Name</label>
                    <Field type="text" id="courseName" name="courseName[0]" />
                  </div>
                </div>
                {/* end right side */}
              </div>
              <div className="fieldArrayStyle">
                <FieldArray name="courseBenefits">
                  {({ push }) => (
                    <>
                      {values.courseBenefits.length > 0 &&
                        values.courseBenefits.map((benefit, index) => (
                          <div className="fieldArrayInput">
                            <Field
                              name={`courseBenefits[${index}]`}
                              placeholder="Course Benefits"
                              type="text"
                              className="arrayField"
                            />
                            <ErrorMessage
                              name={`courseBenefits[${index}]`}
                              component="div"
                              className="field-error"
                            />
                            <button
                              type="button"
                              onClick={() => push("")}
                              className="addBtn"
                            >
                              + Add Benefits
                            </button>
                          </div>
                        ))}
                    </>
                  )}
                </FieldArray>
                <FieldArray name="outlines" className="fieldArrayInput">
                  {({ push }) => (
                    <>
                      {values.outlines.length > 0 &&
                        values.outlines.map((outline, index) => (
                          <div className="fieldArrayInput">
                            <Field
                              name={`outlines[${index}]`}
                              placeholder="Outlines"
                              type="text"
                              className="arrayField"
                            />
                            <ErrorMessage
                              name={`outlines[${index}]`}
                              component="div"
                              className="field-error"
                            />
                            <button
                              type="button"
                              onClick={() => push("")}
                              className="addBtn"
                            >
                              + Add Outline
                            </button>
                          </div>
                        ))}
                    </>
                  )}
                </FieldArray>
                <FieldArray name="eligibilityCriteria">
                  {({ push }) => (
                    <>
                      {values.eligibilityCriteria.length > 0 &&
                        values.eligibilityCriteria.map((criteria, index) => (
                          <div className="fieldArrayInput">
                            <Field
                              name={`eligibilityCriteria[${index}]`}
                              placeholder="Eligibility Criteria"
                              type="text"
                              className="arrayField"
                            />
                            <ErrorMessage
                              name={`eligibilityCriteria[${index}]`}
                              component="div"
                              className="field-error"
                            />
                            <button
                              type="button"
                              onClick={() => push("")}
                              className="addBtn"
                            >
                              + Add Criteria
                            </button>
                          </div>
                        ))}
                    </>
                  )}
                </FieldArray>

                {/* <FieldArray name="instructors">
                  {({ push }) => (
                    <>
                      {console.log(values.instructors)}
                      {values.instructors.length > 0 &&
                        values.instructors?.map((instructor, index) => (
                          <div className="fieldArrayInput">
                            <Field
                              as="select"
                              name="instructors"
                              className="selectOptions"
                            > */}
                {/* {employees?.map((employee) => {
                                if (
                                  employee.roles.some(
                                    (role) => role.roleName === "Instructor"
                                  )
                                ) {
                                  return (
                                    <option
                                      key={employee.id}
                                      value={employee.id}
                                    >
                                      {employee.fullName}
                                    </option>
                                  );
                                } else {
                                  return null;
                                }
                              })} */}
                {/* </Field>

                            <ErrorMessage
                              name={`instructors[${index}]`}
                              component="div"
                              className="field-error"
                            />
                            <button
                              type="button"
                              onClick={() => push("")}
                              className="addBtn"
                            >
                              + Add Benefits
                            </button>
                          </div>
                        ))}
                    </>
                  )}
                </FieldArray> */}

                <button type="submit" className="submitBtn">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Admin;
