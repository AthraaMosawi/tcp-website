import React from "react";
import { Typography, Box } from "@mui/material";
import Button from "@mui/joy/Button";
import line from "../Assets/images/line.svg";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ChooseCourse = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box
      sx={{
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      }}
    >
      <Typography
        className="book-section-des"
        sx={{
          fontFamily: "Gilroy-SemiBold",
          fontSize: "24px",
          margin: "0 auto",
          width: "450px",
          [theme.breakpoints.down("sm")]: {
            width: "80%",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Gilroy-SemiBold",
            [theme.breakpoints.down("sm")]: {
              fontSize: "25px",
            },
          }}
        >
          Don’t know how to choose course?
        </Typography>
      </Typography>
      <Button
        id="CoursesButton"
        variant="contained"
        sx={{
          width: "150px",
          background:
            "linear-gradient(90deg, rgb(23, 200, 190) 0%, rgb(249, 213, 62) 100%)",
          borderRadius: "4px",
          position: "relative",
          left: "670px",
          top: "230px",
          zIndex: 2,
          [theme.breakpoints.down("sm")]: {
            left: "35%",
            top: "230px",
            width: "30%",
          },
        }}
      >
        <Link
          to="/contact-us"
          style={{ textDecoration: "none" }}
          onClick={scrollToTop}
        >
          <Typography
            sx={{
              fontFamily: "Gilroy-Medium",
              fontSize: "15px",
              color: "#01011E",
              [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
              },
            }}
          >
            Contact Us
          </Typography>
        </Link>
      </Button>

      <div className="layer">
        <div className="overlap-group">
          <img className="vector" alt="Vector" src={line} />
          <img
            className="vector-2"
            alt="Vector"
            src="https://file.rendit.io/n/RBBHTQVJ28YO7K3LrmN1.svg"
          />
          <img
            className="vector-3"
            alt="Vector"
            src="https://file.rendit.io/n/0OrFLQIQN934Dq1u6PXy.svg"
          />
        </div>
      </div>
    </Box>
  );
};
export default ChooseCourse;
