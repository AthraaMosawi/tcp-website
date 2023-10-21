import React from "react";
import "../Style/features.css";
import { Typography, Box } from "@mui/material";
import line from "../Assets/images/line.svg";
import { useTheme } from "@mui/material/styles";

export default function GainFeatures({ course }) {
  const theme = useTheme();

  return (
    <>
      <div className="container">
        <div className="overlap">
          <Typography
            sx={{
              fontSize: "1.9rem",
              fontFamily: "Gilroy-Medium",
              textAlign: "left",
              width: "80%",
              margin: "0px auto",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem",
                marginBottom: "40px",
                width: "90%",
              },
            }}
          >
            What <span style={{ color: "#17C8BE" }}>You’ll Gain</span>: Inside
            Our Curriculum
          </Typography>
          <img className="line-vector" alt="Vector" src={line} />
          {/* {course.courseGains.map((gain, index) => ( */}
          <>
            <Box className="red-vector">
              <img
                alt="Vector"
                src="https://file.rendit.io/n/9kjfYysaM4wLJnw9ENjh.svg"
              />
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Gilroy-Regular",
                  marginTop: "20px",
                }}
              >
                {/* Understand the fundamental concepts of programming languages and
              how they interact with computers. */}
                {course.courseBenefits[0]}
              </Typography>
            </Box>
            <Box className="turq-vector">
              <img
                alt="Vector"
                src="https://file.rendit.io/n/7GrHEEzejeFTxBlOdI1C.svg"
              />
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Gilroy-Regular",
                  marginTop: "20px",
                }}
              >
                {/* Gain a comprehensive understanding of JavaScript (JS) including
                its syntax and how to run JS code. */}
                {course.courseBenefits[1]}
              </Typography>
            </Box>
            <Box className="yellow-vector">
              <img
                alt="Vector"
                src="https://file.rendit.io/n/QTllvLp9sgrodkhpC2Zn.svg"
              />
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Gilroy-Regular",
                  marginTop: "20px",
                }}
              >
                {/* Develop the ability to troubleshoot common issues and errors
                that may arise when using JavaScript. */}
                {course.courseBenefits[2]}
              </Typography>
            </Box>
            <Box className="white-vector">
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Gilroy-Regular",
                  marginBottom: "20px",
                }}
              >
                {/* Master JS skills to create dynamic websites and adhere to best
                practices when coding. */}
                {course.courseBenefits[3]}
              </Typography>
              <img
                className="vector-place"
                alt="Vector"
                src="https://file.rendit.io/n/4yNotQKOtr72hmph1qD8.svg"
              />
            </Box>
          </>
          {/* ))} */}
          <img className="Sec-line-vector" alt="Vector" src={line} />
        </div>
      </div>
    </>
  );
}
