import { useContext } from "react";
import "../Style/herosection.css";
import sloganImg from "../Assets/images/slogan2.svg";
import React from "react";
import { TextField, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import Context from "../Store/filteredData";
import courses from "../Store/courses";

const validationSchema = Yup.object().shape({
  search: Yup.string().required("Your name is required"),
});

const HeroSectionTest = () => {
  const { setFilteredCourses, setNotFound, setSearchValue } =
    useContext(Context);

  const navigate = useNavigate();
  const theme = useTheme();

  const searchForCourse = (searchValue) => {
    if (searchValue) {
      const filteredCourse = courses
        ? courses.filter((course) =>
            course.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : [];

      if (filteredCourse.length > 0) {
        setNotFound("");
      } else {
        setNotFound("Opps! No Course Found.");
      }
      setFilteredCourses(filteredCourse);
    } else {
      setFilteredCourses([]);
      setNotFound("");
    }
    setSearchValue(searchValue);
    navigate("/courses");
  };
  return (
    <>
      <Box className="hero-section">
        <Box className="hero-section-wrapper">
          <Box className="div">
            <Typography className="text-wrapper">
              Learn technical skills and pursue job opportunities in Iraq and
              the region.
            </Typography>
            <Formik
              initialValues={{
                search: "",
              }}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                searchForCourse(values.search);
                console.log("done");
                resetForm();
              }}
              validationSchema={validationSchema}
            >
              {({ values, touched, errors, handleChange }) => (
                <Box
                  className="search"
                  style={{ background: "#F0F0F0", borderRadius: "10px" }}
                >
                  <Form
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <TextField
                      name="search"
                      variant="filled"
                      value={values.search}
                      onChange={handleChange}
                      error={errors.search && touched.search}
                      placeholder="Want to learn?"
                      required
                      helperText={errors.search}
                      sx={{
                        backgroundColor: "white",
                        width: "70%",
                        marginTop: "0",
                        background: "white",
                      }}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        color: "#01011E",
                        background: "rgb(249, 213, 62)",
                        "&:hover": {
                          backgroundColor: "#01011E",
                          color: "#F9D53E",
                        },
                        [theme.breakpoints.down("sm")]: {
                          width: "20%",
                          fontSize: "12px",
                        },
                      }}
                    >
                      Explore
                    </Button>
                  </Form>
                </Box>
              )}
            </Formik>

            <img className="asset" alt="Asset" src={sloganImg} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default HeroSectionTest;
