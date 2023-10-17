import React from "react";
import "../Style/bookSession.css";
import { Typography, Box } from "@mui/material";
import Button from "@mui/joy/Button";
import line from "../Assets/images/line.svg";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const BookSession = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h6"
        className="book-section-des"
        sx={{
          fontFamily: "Gilroy-SemiBold",
          margin: "0 auto",
          width: "30%",
          textAlign: "center",
          [theme.breakpoints.down("sm")]: {
            width: "80%",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Gilroy-SemiBold",
            width: "400px",
            margin: "0 auto",
            textAlign: "center",
            [theme.breakpoints.down("sm")]: {
              fontSize: "30px",
              width: "80%",
            },
          }}
        >
          Book One to One Session
        </Typography>
        <br />
        Meet our team, ask your questions and suggest courses to learn
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
            width: "28%",
          },
        }}
      >
        <Link
          to="https://calendly.com/tcp-nle/30min"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Gilroy-Medium",
              fontSize: "15px",
              color: "#01011E",
            }}
          >
            Book Now!
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
        </div>
      </div>
    </Box>
  );
};
export default BookSession;
