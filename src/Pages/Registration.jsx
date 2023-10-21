import React from "react";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import jwtDecode from "jwt-decode";

const Registration = () => {
  const theme = useTheme();

  const [navigate, setNavigate] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const userCredential = { email, password };
  const submit = async () => {
    try {
      const userToken = await axios.post(
        "https://tcp-server-66641451cde5.herokuapp.com/auth/signin",
        userCredential
      );
      var token = userToken.data.token;
      var decoded = jwtDecode(token);
      document.localStorage = "userToken=" + decoded + "; expires=7; path=/";
      axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;

      setNavigate(true);
    } catch (error) {
      console.log("🚀 ~ file: auth.vue:31 ~ singIn ~ error:", error);
    }
  };

  if (navigate) {
    return <Navigate to="/admin" />;
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setPass(e.target.value);
  // };
  return (
    <>
      {/* <div>
        <input type="email" onChange={(e) => handleEmail(e)} />
        <input type="password" onChange={(e) => handlePassword(e)} />
        <button onClick={() => submit()}>submit</button>
      </div> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
        mt={6}
        mb={10}
      >
        <Box
          sx={{
            width: "60%",
            height: "80vh",
            overflow: "hidden",
            [theme.breakpoints.down("sm")]: {
              height: "85vh",
              width: "100%",
            },
          }}
        >
          <img
            alt="code-img"
            src={require("../Assets/images/code.jpeg")}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box
          Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <Box
            sx={{
              width: "70%",
              [theme.breakpoints.down("sm")]: {
                position: "absolute",
                top: "25%",
                left: "10%",
                backgroundColor: "#01011E",
                width: "60%",
                padding: "10%",
              },
            }}
          >
            <Box sx={{ mb: "70px" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontFamily: "Gilroy-Medium" }}
              >
                Admin Sign In
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontFamily: "Gilroy-Regular", color: "#F9D53E" }}
              >
                Let’s get started
              </Typography>
            </Box>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={async (values, { resetForm }) => {
                try {
                  const userToken = await axios.post(
                    "https://tcp-server-66641451cde5.herokuapp.com/auth/signin",
                    values
                  );
                  const token = userToken.data.token;
                  const decoded = jwtDecode(token);
                  localStorage.setItem("userToken", decoded);
                  axios.defaults.headers.common[
                    "Authorization"
                  ] = `Bearer ${token}`;

                  setNavigate(true);
                } catch (error) {
                  console.log(
                    "🚀 ~ file: auth.vue:31 ~ singIn ~ error:",
                    error
                  );
                }
                // resetForm();
              }}
              validationSchema={validationSchema}
            >
              {({ values, touched, errors, handleChange }) => (
                <Form className="form">
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
                    label="Password"
                    name="password"
                    variant="filled"
                    margin="dense"
                    type="password"
                    rows={4}
                    value={values.password}
                    onChange={handleChange}
                    error={errors.password && touched.password}
                    required
                    helperText={errors.password}
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
                    Sign In
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Registration;
