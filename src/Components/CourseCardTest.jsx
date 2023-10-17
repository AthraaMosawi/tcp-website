import { useContext } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Context from "../Store/filteredData";

import courses from "../Store/courses";
import { useTheme } from "@mui/material/styles";

const CourseCardTest = ({ customStyles }) => {
  const { filteredCourses, notFound, searchValue } = useContext(Context);
  console.log(filteredCourses, searchValue);

  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return Object.keys(courses).length > 0 ? (
    <>
      <Box
        sx={{
          ...(customStyles || {
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: "10px",
            gap: "30px",
            fontFamily: "Gilroy-Regular",
          }),
          [theme.breakpoints.down("sm")]: {
            gap: "12px",
          },
        }}
      >
        <p style={{ fontSize: "30px" }}>{notFound}</p>

        {(searchValue ? filteredCourses : courses).map((course, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: "20px",
              border: "0.1px solid white",
              boxShadow: "0px 0px 22px 8px rgba(0, 0, 0, 0.25)",
              backgroundColor: "#1c2034",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={course.image}
              alt="JavaScript"
              sx={{
                borderRadius: "3px",
                width: "90px",
                marginLeft: "16px",
                height: "auto",
                marginTop: "20px",
                fontFamily: "Gilroy-Regular",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "320px",
                marginLeft: "20px",
                marginBottom: "6px",
                marginTop: "30px",
                [theme.breakpoints.down("sm")]: {
                  width: "260px",
                },
              }}
            >
              <img
                src="https://file.rendit.io/n/hDqUn6d7NgYyOuV4AmFz.svg"
                alt="in-person"
              />
              <Typography
                variant="body1"
                color="white"
                marginLeft="10px"
                width="50%"
                fontFamily="Gilroy-Regular"
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "12px",
                  },
                }}
              >
                In-person Lessons
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "70px",
                  marginLeft: "45px",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Gilroy-Regular",
                      fontWeight: "Regular",
                      lineHeight: "12.5px",
                      color: "#1c2034",
                      marginTop: "2px",
                      backgroundColor: "white",
                      padding: "8px",
                      borderRadius: "6px",
                      width: "75px",
                      textAlign: "center",
                    }}
                  >
                    {course.status}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <CardHeader
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginBottom: "8px",
              }}
              title={
                <Typography
                  variant="h5"
                  color="white"
                  fontFamily="Gilroy-Regular"
                >
                  {course.name}
                </Typography>
              }
            />

            {/* horizontal line */}
            <Box
              sx={{
                width: "90%",
                height: "1px",
                margin: "5px auto",
                borderTop: "1px solid white",
                borderBottom: "0px",
                borderLeft: "0px",
                borderRight: "0px",
              }}
            />
            <CardContent sx={{ paddingTop: "0px" }}>
              {/* trainer and students number */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* trainer image and bio */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={
                      course.name === "JavaScript Bootcamp"
                        ? "https://avatars.githubusercontent.com/u/79381866?v=4"
                        : "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-goog/avatars/zahraa_m_a_baharaluloom_yzEvX99.JPG"
                    }
                    alt="Ellipse"
                    style={{
                      width: "35px",
                      borderRadius: "50px",
                      marginRight: "15px",
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{
                      marginLeft: "5px",
                      fontFamily: "Gilroy-Regular",
                    }}
                  >
                    {/* Zahraa M. Ali */}
                    {course.name === "JavaScript Bootcamp"
                      ? "Alhasan Ali"
                      : "Zahraa M. Ali"}
                    <br />{" "}
                    <span style={{ fontSize: "10px" }}>
                      Full Stack Developer
                    </span>
                  </Typography>
                </Box>
                {/* vertical line */}
                <Box
                  sx={{
                    width: "1px",
                    height: "80px",
                    borderRight: "1px solid white",
                    borderLeft: "0px",
                    borderTop: "0px",
                    borderBottom: "0px",
                  }}
                />
                <Box>
                  <Typography
                    variant="body1"
                    color="white"
                    fontFamily="Gilroy-Regular"
                  >
                    10 Student
                  </Typography>
                </Box>
              </Box>
              {/* horizontal line */}
              <Box
                sx={{
                  width: "90%",
                  height: "1px",
                  margin: "5px auto",
                  borderTop: "1px solid white",
                  borderBottom: "0px",
                  borderLeft: "0px",
                  borderRight: "0px",
                }}
              />
              {/* rating and enroll buttons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    marginTop: "5px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {/* <img
                    src="https://file.rendit.io/n/v6kDFLtyjfBIw8d474vX.svg"
                    alt="rating"
                  /> */}
                  {course.level}
                </Box>
                <Link
                  to={`/courses/course-details/${course.id}`}
                  state={{ course: course }}
                  style={{ textDecoration: "none" }}
                  onClick={scrollToTop}
                >
                  <Typography
                    variant="body1"
                    color="#17c8be"
                    borderBottom="1px solid #17c8be"
                    fontFamily="Gilroy-Regular"
                    cursor="pointer"
                  >
                    Enroll Now
                  </Typography>
                </Link>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default CourseCardTest;
