// import React from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import "../Style/form.css";

// import { Formik, Form } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().min(3, "Too short").required("Your name is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Your email is required"),
//   message: Yup.string()
//     .min(30, "Must be at least 30 characters")
//     .max(255, "Too long..")
//     .required("Write your message!"),
// });

// export default function ContactForm() {
//   const [successMsg, setSuccessMsg] = React.useState("");
//   return (
//     <>
//       <Formik
//         initialValues={{
//           name: "",
//           email: "",
//           message: "",
//         }}
//         onSubmit={(values, { resetForm }) => {
//           console.log(values);
//           resetForm();
//           setSuccessMsg("Submitted Successfully!");
//         }}
//         validationSchema={validationSchema}
//       >
//         {({ values, touched, errors, handleChange, setFieldValue }) => (
//           <Form className="form">
//             <TextField
//               className="inputsStyle"
//               label="Full Name"
//               name="name"
//               variant="filled"
//               margin="dense"
//               value={values.name}
//               onChange={handleChange}
//               error={errors.name && touched.name}
//               required
//               helperText={errors.name}
//             />
//             <TextField
//               className="inputsStyle"
//               label="Email"
//               name="email"
//               variant="filled"
//               margin="dense"
//               value={values.email}
//               onChange={handleChange}
//               error={errors.email && touched.email}
//               required
//               helperText={errors.email}
//             />
//             <TextField
//               className="inputsStyle"
//               label="Message"
//               name="message"
//               multiline
//               variant="filled"
//               margin="dense"
//               rows={4}
//               value={values.message}
//               onChange={handleChange}
//               error={errors.message && touched.message}
//               required
//               helperText={errors.message}
//               min="40"
//               max="255"
//             />
//             <Button
//               variant="contained"
//               type="submit"
//               color="primary"
//               style={{
//                 marginTop: "30px",
//                 color: "#01011E",
//                 background:
//                   "linear-gradient(90deg, rgb(23, 200, 190) 0%, rgb(249, 213, 62) 100%)",
//               }}
//             >
//               Submit
//             </Button>
//             <p style={{ color: "green" }}>{successMsg}</p>
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// }
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com"; // Import Email.js library

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short").required("Your name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Your email is required"),
  message: Yup.string()
    .min(30, "Must be at least 30 characters")
    .max(255, "Too long..")
    .required("Write your message!"),
});

export default function ContactForm() {
  const [successMsg, setSuccessMsg] = React.useState("");

  const sendEmail = (formData) => {
    emailjs
      .send(
        "service_ykglzi9", // Email.js service ID
        "template_7n5gwdx", // Email.js template ID
        formData,
        "vSQsmSOsIryuskIcT" // Email.js user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSuccessMsg("Sent Successfully!");
        },
        (error) => {
          console.error("Email could not be sent:", error);
        }
      );
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          sendEmail(values); // Send email with form data
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ values, touched, errors, handleChange, setFieldValue }) => (
          <Form className="form">
            <TextField
              className="inputsStyle"
              label="Full Name"
              name="name"
              variant="filled"
              margin="dense"
              value={values.name}
              onChange={handleChange}
              error={errors.name && touched.name}
              required
              helperText={errors.name}
            />
            <TextField
              className="inputsStyle"
              label="Email"
              name="email"
              variant="filled"
              margin="dense"
              value={values.email}
              onChange={handleChange}
              error={errors.email && touched.email}
              required
              helperText={errors.email}
            />
            <TextField
              className="inputsStyle"
              label="Message"
              name="message"
              multiline
              variant="filled"
              margin="dense"
              rows={4}
              value={values.message}
              onChange={handleChange}
              error={errors.message && touched.message}
              required
              helperText={errors.message}
              min="40"
              max="255"
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              style={{
                marginTop: "30px",
                color: "#01011E",
                background:
                  "linear-gradient(90deg, rgb(23, 200, 190) 0%, rgb(249, 213, 62) 100%)",
              }}
            >
              Submit
            </Button>
            <p style={{ color: "green" }}>{successMsg}</p>
          </Form>
        )}
      </Formik>
    </>
  );
}
