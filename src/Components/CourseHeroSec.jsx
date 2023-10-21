import React from "react";
import { Box, Button, Typography, Paper, Container } from "@mui/material";
import jsDeveloper from "../Assets/images/js-developer.jpg";
import "../Style/jsCourse.css";
import { useTheme } from "@mui/material/styles";

function CourseHeroSec({ course }) {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          marginTop: "130px",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "50%",
            gap: "2rem",
            alignItems: "flex-start",
            height: "auto",
            [theme.breakpoints.down("sm")]: {
              maxWidth: "90%",
              margin: "0px auto",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "250%",
              fontFamily: "Gilroy-SemiBold",
              color: "white",
              width: "100%",
            }}
          >
            Launch your career with our <br />
            <span style={{ color: "#f9d53e" }}>{course.courseName}</span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "70%",
              [theme.breakpoints.down("sm")]: {
                width: "80%",
              },
            }}
          >
            <Paper
              sx={{
                background: "#1c2034",
                padding: "0.5rem 1rem",
                borderRadius: "18.999998092651367px",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Gilroy-Regular",
                  color: "#b7b7b7",
                }}
              >
                {course.duration}
              </Typography>
            </Paper>

            <Paper
              sx={{
                background: "#1c2034",
                padding: "0.5rem 1rem",
                borderRadius: "18.999998092651367px",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Gilroy-Regular",
                  color: "#b7b7b7",
                }}
              >
                Najaf
              </Typography>
            </Paper>
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "Gilroy-Regular",
              color: "#f2f2f2",
              width: "80%",
              lineHeight: "40px",
              [theme.breakpoints.down("sm")]: {
                maxWidth: "100%",
              },
            }}
          >
            {course.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #17c8be 0%, #f9d53e 100%)",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                width: "auto",
                [theme.breakpoints.down("sm")]: {
                  marginBottom: "20px",
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Gilroy-SemiBold",
                  textAlign: "center",
                  color: "#01011E",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: ".8rem",
                  },
                }}
              >
                Apply Now!
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: "1px solid #f2f2f2",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                width: "auto",
                [theme.breakpoints.down("sm")]: {
                  marginBottom: "20px",
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Gilroy-Medium",
                  color: "#f2f2f2",
                  textAlign: "center",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: ".8rem",
                  },
                }}
              >
                Download Syllabus
              </Typography>
            </Button>
          </Box>
        </Box>
        {/* second one */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            maxWidth: "50%",
            [theme.breakpoints.down("sm")]: {
              maxWidth: "90%",
              margin: "30px auto",
            },
          }}
        >
          <img
            src={course.courseDetailImg}
            alt="Software Developer"
            className="imgStyle"
          />
          <Paper
            elevation={3}
            sx={{
              background: "#1c2034",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "1rem",
              borderRadius: "1rem",
              position: "relative",
              bottom: "70px",
              left: "16%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              height: "auto",
              [theme.breakpoints.down("sm")]: {
                width: "20%",
                left: "18%",
              },
            }}
          >
            <img
              src="https://file.rendit.io/n/gLeJwH4V3RzSe70ARh3P.svg"
              alt="JavaScript Logo"
              sx={{ width: "64px" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
                alignItems: "center",
                width: "90%",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Gilroy-Bold",
                  color: "white",
                  textAlign: "center",
                  width: "150px",
                  margin: "0 auto",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.8rem",
                    position: "relative",
                    width: "auto",
                  },
                }}
              >
                {course.courseName}
              </Typography>
              <div
                sx={{
                  borderBottom: "1px solid #d9d9d9",
                  alignSelf: "center",
                  marginBottom: "1px",
                  marginLeft: "1rem",
                  border: "0",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                  width: "auto",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    fontFamily: "Gilroy-Regular",
                    fontWeight: "500",
                    color: "white",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "0.6rem",
                      position: "relative",
                      width: "auto",
                    },
                  }}
                >
                  {course.maxSeats} Students
                </Typography>
                <img
                  src="https://file.rendit.io/n/aEYtIzuoPfan9LYyHN4C.svg"
                  alt="rating"
                  sx={{ width: "3rem" }}
                />
              </Box>
            </Box>
          </Paper>
          <Paper
            elevation={4}
            sx={{
              background: "#1c2034",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              position: "relative",
              bottom: "455px",
              right: "40%",
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              borderRadius: "1rem",
              [theme.breakpoints.down("sm")]: {
                right: "33%",
                bottom: "390px",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "1rem",
                fontFamily: "Fira_Code",
                fontWeight: "500",
                color: "white",
                width: "100%",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.6rem",
                  position: "relative",
                  width: "auto",
                },
              }}
            >
              1 // Print greeting
              <br />2 let greeting = "Hello World!";
              <br />3 console.log(greeting);
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}

export default CourseHeroSec;
