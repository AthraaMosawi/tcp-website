import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useTheme } from "@mui/material/styles";

const Registration = () => {
  const theme = useTheme();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
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
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                handleSubmit(values);
                resetForm();
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
