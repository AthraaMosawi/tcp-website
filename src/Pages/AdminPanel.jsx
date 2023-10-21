import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { Select, MenuItem } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import { useTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import axios from "axios";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Course Name is required"),
  description: Yup.string().required("Description is required"),
  courseImage: Yup.mixed()
    .required("Please upload an image")
    .test(
      "fileSize",
      "File is too large",
      (value) => value && value.size <= 5242880
    ) // 5 MB
    .test(
      "fileType",
      "Unsupported file type",
      (value) =>
        value &&
        ["image/jpeg", "image/jpg", "image/png", "image/svg"].includes(
          value.type
        )
    ),
});

const IconUploadField = ({ field }) => {
  const formik = useFormik();
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/jpg, image/png, image/svg",
    onDrop: (acceptedFiles) => {
      formik.setFieldValue(field.name, acceptedFiles[0]);
    },
  });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "1px dashed #B7B7B7",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          gap: "10px",
          cursor: "pointer",
          backgroundColor: "#fff",
          width: "50%",
        }}
      >
        <input {...getInputProps()} />
        <img
          src="https://file.rendit.io/n/XtjSxmhCJ8EFyYPZTTlG.svg"
          style={{ width: "10%" }}
          alt=""
        />
        <p
          style={{
            width: "80%",
            textAlign: "center",
            margin: 0,
            color: "#B7B7B7",
          }}
        >
          Drag and drop the course icon here, or click to select one
        </p>
      </div>
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};

//course Image
const ImageUploadField = ({ field }) => {
  const formik = useFormik();
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/jpg, image/png, image/svg",
    onDrop: (acceptedFiles) => {
      formik.setFieldValue(field.name, acceptedFiles[0]);
    },
  });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "1px dashed #B7B7B7",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          gap: "10px",
          cursor: "pointer",
          backgroundColor: "#fff",
        }}
      >
        <input {...getInputProps()} />
        <img
          src="https://file.rendit.io/n/XtjSxmhCJ8EFyYPZTTlG.svg"
          style={{ width: "10%" }}
          alt=""
        />
        <p
          style={{
            width: "80%",
            textAlign: "center",
            margin: 0,
            color: "#B7B7B7",
          }}
        >
          Drag and drop the course image here, or click to select one
        </p>
      </div>
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};

const AdminPanel = () => {
  const theme = useTheme();

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    //for (const key in courses) {
    //   formData.append(key, course[key]);
    // }
    const formData = new FormData();
    formData.append("courseName", values.courseName);
    formData.append("description", values.description);
    formData.append("courseDetailImg", values.courseDetailImg);
    formData.append("image", values.image);
    formData.append("status", values.status);
    formData.append("startingDate", values.startingDate);
    formData.append("duration", values.duration);
    formData.append("fees", values.fees);
    formData.append("level", values.level);
    formData.append("maxSeats", values.maxSeats);
    formData.append("outlines", values.outlines);
    formData.append("eligibilityCriteria", values.eligibilityCriteria);
    formData.append("courseBenefits", values.courseBenefits);
    formData.append("numberOfLessons", values.numberOfLessons);
    // for (const key in Courses) formData.append(key, newCourse[key]);
    // const res = await axios.post(`/courses`, formData);
    // this.courses.push(res.data);

    try {
      const response = await fetch(
        "https://tcp-server-66641451cde5.herokuapp.com/courses",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        console.log("Done", response);
        resetForm();
      } else {
        console.log("api error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    //main container
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        width: "80%",
        margin: "0 auto",
        alignItems: "flex-start",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
          width: "90%",
          flexDirection: "column",
          alignItems: "center",
          margin: "70px auto",
        },
      }}
    >
      {/* sidebar container */}
      <Box
        id="Component"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingTop: "8px",
          paddingLeft: "20px",
          backgroundColor: "#1C2034",
          width: "15%",
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
              alignItems: "flex-start",
            }}
          >
            <img
              src="https://file.rendit.io/n/iA3RwHoCxQWcJzenTgWi.svg"
              id="UnsplashRmoWqDCqNE"
              style={{ width: "20px" }}
              alt=""
            />
            <Typography id="Company" sx={{ color: "#f9d53e", mt: 2, ml: 2.5 }}>
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
          sx={{
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
      {/* end sidebar container */}

      {/* courses dashboard container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          mt: "20px",
          mb: "90px",
          gap: "12px",
          [theme.breakpoints.down("sm")]: {
            width: "90%",
          },
        }}
      >
        {/* Courses and Bootcamps */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            mb: "5px",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              mb: "5px",
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
        </Box>
        {/* Line */}
        <Box
          sx={{
            width: "100%",
            marginBottom: "10px",
            borderBottom: ".7px solid white",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              borderBottom: ".4px solid white",
            },
          }}
        />
        {/* end Line */}
        <>
          <Formik
            initialValues={{
              image: null,
              courseDetailImg: null,
              courseName: "",
              maxSeats: "",
              description: "",
              numberOfLessons: "",
              instructors: [],
              fees: "",
              status: "",
              level: "",
              startingDate: "",
              duration: "",
              eligibilityCriteria: [],
              courseBenefits: [],
              outlines: [],
            }}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              handleSubmit(values);
              resetForm();
            }}
            validationSchema={validationSchema}
          >
            {({ values, touched, errors, handleChange }) => (
              <Form
                // className="form"
                // onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    [theme.breakpoints.down("sm")]: {
                      flexDirection: "column",
                      width: "100%",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                      alignItems: "flex-start",
                      width: "48%",
                      mb: "3px",
                      justifyContent: "end",
                      [theme.breakpoints.down("sm")]: {
                        width: "100%",
                        pt: "20px",
                        mb: "0px",
                      },
                    }}
                  >
                    {/* <Field
                      name="courseDetailImg"
                      component={ImageUploadField}
                    /> */}
                    <TextField
                      required
                      onChange={handleChange}
                      name="image"
                      type="file"
                      className="form-control"
                    />

                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <TextField
                        className="inputsStyle"
                        label="Course Name"
                        name="courseName"
                        variant="filled"
                        margin="dense"
                        value={values.courseName}
                        onChange={handleChange}
                        error={errors.courseName && touched.courseName}
                        required
                        helperText={errors.courseName}
                      />
                      <TextField
                        className="inputsStyle"
                        label="Description"
                        name="description"
                        multiline
                        variant="filled"
                        margin="dense"
                        rows={5}
                        value={values.description}
                        onChange={handleChange}
                        error={errors.description && touched.description}
                        required
                        helperText={errors.description}
                        min="40"
                        max="255"
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        mt: "6px",
                        [theme.breakpoints.down("sm")]: {
                          pt: "10px",
                          mt: "0px",
                        },
                      }}
                    >
                      <Select
                        name="status"
                        variant="filled"
                        value={values.status}
                        onChange={handleChange}
                        error={errors.status && touched.status}
                        required
                        helperText={errors.status}
                        displayEmpty
                        style={{
                          backgroundColor: "#F4F3F5",
                          fontFamily: "Gilroy-Regular",
                          width: "48%",
                        }}
                      >
                        <MenuItem value="" disabled>
                          Select a status *
                        </MenuItem>
                        <MenuItem value="Closed">Closed</MenuItem>
                        <MenuItem value="Open">Open</MenuItem>
                        <MenuItem value="Coming Soon">Coming Soon</MenuItem>
                      </Select>
                      <Select
                        name="level"
                        variant="filled"
                        value={values.level}
                        onChange={handleChange}
                        error={errors.level && touched.level}
                        required
                        helperText={errors.level}
                        displayEmpty
                        style={{
                          backgroundColor: "#F4F3F5",
                          fontFamily: "Gilroy-Regular",
                          width: "48%",
                        }}
                      >
                        <MenuItem value="" disabled>
                          Select a level *
                        </MenuItem>
                        <MenuItem value="Beginner">Beginner</MenuItem>
                        <MenuItem value="Intermediate">Intermediate</MenuItem>
                        <MenuItem value="Advance">Advance</MenuItem>
                      </Select>
                    </Box>
                  </Box>

                  {/* second side of form */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                      alignItems: "flex-start",
                      width: "48%",
                      justifyContent: "end",
                      [theme.breakpoints.down("sm")]: {
                        width: "100%",
                        pt: "20px",
                      },
                    }}
                  >
                    <Field name="image" component={IconUploadField} />
                    <TextField type="file"></TextField>
                    {/* <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        [theme.breakpoints.down("sm")]: {
                          pt: "10px",
                        },
                      }}
                    >
                      <TextField
                        className="inputsStyle"
                        label="Course Instructor 1"
                        name="instructor1"
                        variant="filled"
                        margin="dense"
                        value={values.instructor1}
                        onChange={handleChange}
                        error={errors.instructor1 && touched.instructor1}
                        required
                        helperText={errors.instructor1}
                      />
                      <TextField
                        className="inputsStyle"
                        label="Course Instructor 2"
                        name="instructor2"
                        variant="filled"
                        margin="dense"
                        value={values.instructor2}
                        onChange={handleChange}
                        error={errors.instructor2 && touched.instructor2}
                        required
                        helperText={errors.instructor2}
                      />
                    </Box> */}
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        className="inputsStyle"
                        label="Course Fee"
                        name="fees"
                        variant="filled"
                        margin="dense"
                        value={values.fees}
                        onChange={handleChange}
                        error={errors.fees && touched.fees}
                        required
                        helperText={errors.fees}
                        sx={{ width: "48%" }}
                      />
                      <TextField
                        className="inputsStyle"
                        label="Student Number"
                        name="maxSeats"
                        variant="filled"
                        margin="dense"
                        value={values.maxSeats}
                        onChange={handleChange}
                        error={errors.maxSeats && touched.maxSeats}
                        required
                        helperText={errors.maxSeats}
                        sx={{ width: "48%" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        className="inputsStyle"
                        label="Starting Date"
                        name="startingDate"
                        variant="filled"
                        margin="dense"
                        value={values.startingDate}
                        onChange={handleChange}
                        error={errors.startingDate && touched.startingDate}
                        required
                        helperText={errors.startingDate}
                        sx={{ width: "48%" }}
                      />
                      <TextField
                        className="inputsStyle"
                        label="Duration"
                        name="duration"
                        variant="filled"
                        margin="dense"
                        value={values.duration}
                        onChange={handleChange}
                        error={errors.duration && touched.duration}
                        required
                        helperText={errors.duration}
                        sx={{ width: "48%" }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    [theme.breakpoints.down("sm")]: {
                      width: "100%",
                      pt: "10px",
                    },
                  }}
                >
                  <TextField
                    className="inputsStyle"
                    label="What you will gain?"
                    name="courseBenefits"
                    variant="filled"
                    margin="dense"
                    value={values.courseBenefits}
                    onChange={handleChange}
                    error={errors.courseBenefits && touched.courseBenefits}
                    required
                    helperText={errors.courseBenefits}
                    sx={{
                      width: "90%",
                      [theme.breakpoints.down("sm")]: {
                        width: "75%",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    style={{
                      top: 0,
                      color: "#01011E",
                      background: "rgb(23, 200, 190)",
                      width: "auto",
                      fontSize: "25px",
                    }}
                  >
                    +
                  </Button>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    [theme.breakpoints.down("sm")]: {
                      width: "100%",
                      pt: "10px",
                    },
                  }}
                >
                  <TextField
                    className="inputsStyle"
                    label="Eligibility Criteria"
                    name="eligibilityCriteria"
                    variant="filled"
                    margin="dense"
                    value={values.eligibilityCriteria}
                    onChange={handleChange}
                    error={
                      errors.eligibilityCriteria && touched.eligibilityCriteria
                    }
                    required
                    helperText={errors.eligibilityCriteria}
                    sx={{
                      width: "90%",
                      [theme.breakpoints.down("sm")]: {
                        width: "75%",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    style={{
                      top: 0,
                      color: "#01011E",
                      background: "rgb(23, 200, 190)",
                      width: "auto",
                      fontSize: "25px",
                    }}
                  >
                    +
                  </Button>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    [theme.breakpoints.down("sm")]: {
                      width: "100%",
                      pt: "10px",
                    },
                  }}
                >
                  <TextField
                    className="inputsStyle"
                    label="Course Outlines"
                    name="outlines"
                    variant="filled"
                    margin="dense"
                    value={values.outlines}
                    onChange={handleChange}
                    error={errors.outlines && touched.outlines}
                    required
                    helperText={errors.outlines}
                    sx={{
                      width: "90%",
                      [theme.breakpoints.down("sm")]: {
                        width: "75%",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    style={{
                      top: 0,
                      color: "#01011E",
                      background: "rgb(23, 200, 190)",
                      width: "auto",
                      fontSize: "25px",
                    }}
                  >
                    +
                  </Button>
                </Box>

                <Button
                  variant="contained"
                  type="submit"
                  style={{
                    top: 0,
                    marginTop: "30px",
                    color: "#01011E",
                    background:
                      "linear-gradient(90deg, rgb(23, 200, 190) 0%, rgb(249, 213, 62) 100%)",
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </>
      </Box>
      {/* End courses dashboard container */}
    </Box>
    //end main container
  );
};

export default AdminPanel;

// Input field
// <input
//                 required
//                 onChange={handleImage}
//                 name="image"
//                 type="file"
//                 className="form-control"
//               />
//             </div>
// handling inputFile

//     const handleImage = (event) =>
//     setBook({ ...book, image: event.target.files[0] });

// sendingData to BE
//   const handleSubmit = (event) => {
//       event.preventDefault();
//       bookStore(book(;
//       closeModal();
//     };

// Creating book
//  createBook = async (newBook) => {
//     try {
//       const formData = new FormData();
//       for (const key in newBook) formData.append(key, newBook[key]);
//       const res = await axios.post(`/books`, formData);
//       this.books.push(res.data);
//     } catch (error) {
//       console.log(error);
//     }

///////////////////////////////////////////////////////

// import React, { useState } from "react";
// import { Button, TextField } from "@mui/material";
// import Dropzone from "react-dropzone";

// const AdminPanel = () => {
//   const [course, setCourse] = useState({
//     name: "",
//     description: "",
//     image: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCourse({ ...course, [name]: value });
//   };

//   const handleImageUpload = (acceptedFiles) => {
//     const selectedImage = acceptedFiles[0];
//     setCourse({ ...course, image: selectedImage });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Form data to send to the API
//     const formData = new FormData();
//     formData.append("name", course.name);
//     formData.append("description", course.description);
//     formData.append("image", course.image);

//     // Send formData to your API using fetch or Axios
//     try {
//       const response = await fetch("your-api-endpoint", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         // Handle success, reset the form, show a success message, etc.
//       } else {
//         // Handle API errors
//       }
//     } catch (error) {
//       // Handle network errors
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Course Name"
//           name="name"
//           value={course.name}
//           onChange={handleInputChange}
//         />
//         <TextField
//           label="Description"
//           name="description"
//           value={course.description}
//           onChange={handleInputChange}
//         />
//         <Dropzone onDrop={handleImageUpload}>
//           {({ getRootProps, getInputProps }) => (
//             <div {...getRootProps()}>
//               <input {...getInputProps()} />
//               <p>Drag 'n' drop an image, or click to select one</p>
//             </div>
//           )}
//         </Dropzone>
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default AdminPanel;

//////////////////////////////////////////////////////////////////////

// import React from "react";
// import { useFormik } from "formik";

// const AdminPanel = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       number: "",
//       photo: "",
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
//       <div>
//         <label> Upload File</label>
//         <input
//           type="file"
//           name="photo"
//           accept="image/*"
//           onChange={(e) =>
//             formik.setFieldValue("photo", e.currentTarget.files[0])
//           }
//         />
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default AdminPanel;

////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useDropzone } from "react-dropzone";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Course Name is required"),
//   description: Yup.string().required("Description is required"),
//   courseImage: Yup.mixed()
//     .required("Please upload an image")
//     .test(
//       "fileSize",
//       "File is too large",
//       (value) => value && value.size <= 5242880
//     ) // 5 MB
//     .test(
//       "fileType",
//       "Unsupported file type",
//       (value) =>
//         value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
//     ),
// });

// const FileUploadField = ({ field, form }) => {
//   const { getRootProps, getInputProps } = useDropzone({
//     accept: "image/jpeg, image/jpg, image/png",
//     onDrop: (acceptedFiles) => {
//       form.setFieldValue(field.name, acceptedFiles[0]);
//     },
//   });

//   return (
//     <div>
//       <div {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop an image here, or click to select one</p>
//       </div>
//       <ErrorMessage name={field.name} component="div" className="error" />
//     </div>
//   );
// };

// const AdminPanel = () => {
//   const handleSubmit = async (values, { resetForm }) => {
//     console.log(values);
//     // Form data to send to the API
//     const formData = new FormData();
//     formData.append("name", values.name);
//     formData.append("description", values.description);
//     if (values.courseImage) {
//       formData.append("courseImage", values.courseImage);
//     }

//     // Send formData to your API using fetch or Axios
//     try {
//       const response = await fetch("your-api-endpoint", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         // Handle success, reset the form, show a success message, etc.
//         resetForm();
//       } else {
//         // Handle API errors
//       }
//     } catch (error) {
//       // Handle network errors
//     }
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={{
//           name: "",
//           description: "",
//           courseImage: null,
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values, { resetForm }) => {
//           handleSubmit(values, { resetForm });
//         }}
//       >
//         {({ touched, errors }) => (
//           <Form>
//             <div>
//               <label>Course Name:</label>
//               <Field type="text" name="name" />
//               <ErrorMessage name="name" component="div" className="error" />
//             </div>

//             <div>
//               <label>Description:</label>
//               <Field type="text" name="description" />
//               <ErrorMessage
//                 name="description"
//                 component="div"
//                 className="error"
//               />
//             </div>

//             <Field name="courseImage" component={FileUploadField} />

//             <button type="submit">Submit</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default AdminPanel;
