import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Curriculum({ course }) {
  const theme = useTheme();
  const [isHidden, setIsHidden] = useState(true);
  const [vector, setVector] = useState(
    "https://file.rendit.io/n/PYyrjcgNi09goHO6kkyB.svg"
  );

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
    if (vector === "https://file.rendit.io/n/PYyrjcgNi09goHO6kkyB.svg") {
      setVector("https://file.rendit.io/n/SfZPi17VT1WfClx9Pdep.svg");
    } else {
      setVector("https://file.rendit.io/n/PYyrjcgNi09goHO6kkyB.svg");
    }
  };

  return (
    <Box
      sx={{
        width: "85%",
        margin: "20px auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 30px",
          padding: "20px",
          borderRadius: "12px",
          backgroundColor: "#1C2034",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontFamily: "Gilroy-Medium",
            alignItems: "center",
            justifyContent: "center",
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.3rem",
            },
          }}
        >
          Topics Covered in this Bootcamp
        </Typography>
        <Button
          onClick={toggleVisibility}
          style={{
            position: "relative",
            backgroundColor: "transparent",
            color: "white",
            width: "auto",
            margin: "0px",
            padding: "0px 0px",
            top: "0px",
          }}
        >
          <img src={vector} alt="open-close-vector" style={{ width: "17px" }} />
        </Button>
      </Box>

      {isHidden ? null : (
        <Box
          sx={{
            color: "white",
            width: "95%",
            margin: "0 auto",
            fontSize: "1.3rem",
            [theme.breakpoints.down("sm")]: {
              width: "85%",
            },
          }}
        >
          {course.outlines.map((outline) => (
            <Typography
              sx={{
                fontSize: "1.3rem",
                fontFamily: "Gilroy-Regular",
                padding: "20px",
                borderBottom: ".6px solid #464663",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1.1rem",
                },
              }}
            >
              {/* Introduction to Computer Basics */}
              {outline}
            </Typography>
          ))}
          {/* <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "20px",
              borderBottom: ".6px solid #464663",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            Introduction to Git and GitHub.
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "20px",
              borderBottom: ".6px solid #464663",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            Variables, Data Types & Operators.
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "20px",
              borderBottom: ".6px solid #464663",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            Control Structures
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "20px",
              borderBottom: ".6px solid #464663",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            Functions and Scope
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "20px",
              borderBottom: ".6px solid #464663",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            Arrays and Objects
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "20px",
              borderBottom: ".6px solid #464663",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            DOM Manipulation
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "20px",
              borderBottom: ".6px solid #464663",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            Error Handling
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "20px",
              borderBottom: ".6px solid #464663",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            Testing and Debugging
          </Typography> */}
        </Box>
      )}
    </Box>
  );
}

export default Curriculum;
