import React from "react";
import "../Style/mission.css";
import { Typography, Box } from "@mui/material";
import image1 from "../Assets/images/img1.png";
import image2 from "../Assets/images/img2.png";
import image3 from "../Assets/images/img3.png";
import image4 from "../Assets/images/img4.png";
import image5 from "../Assets/images/img5.png";
import line from "../Assets/images/line.svg";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, ThemeProvider, createTheme } from "@mui/material";

const Mission = () => {
  const theme = useTheme();
  // const createTheme = createTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Box
        sx={{
          marginTop: "600px",
          [theme.breakpoints.down("sm")]: { marginTop: "100px" },
        }}
      ></Box>
      <Typography
        variant="h6"
        className="mission-section-des"
        sx={{
          fontFamily: "Gilroy-SemiBold",
          margin: "0 auto",
          //   border: "1px solid red",
        }}
      >
        <Typography
          variant="h4"
          className="mission-section-title"
          sx={{
            fontFamily: "Gilroy-SemiBold",
          }}
        >
          Our Mission
        </Typography>
        <br />
        Empowering underrepresented and underserved women and youth in Iraq
        through high-quality technology education and job opportunities.
      </Typography>
      <div className="layer">
        <div className="overlap-group">
          <img className="lineVector" alt="Vector" src={line} />
          <img
            className="mainVector"
            alt="Vector"
            src="https://file.rendit.io/n/VnorPRCZ5BoPJEvuPnW6.svg"
          />
          <img
            className="vector-2-yellow"
            alt="Vector"
            src="https://file.rendit.io/n/RBBHTQVJ28YO7K3LrmN1.svg"
          />
          <img
            className="vector-3"
            alt="Vector"
            src="https://file.rendit.io/n/0OrFLQIQN934Dq1u6PXy.svg"
          />
          <div className="group">
            <img
              className="clip-path-group"
              alt="Clip path group"
              src={image1}
            />
          </div>
          <div className="clip-path-group-wrapper">
            <img
              className="clip-path-group"
              alt="Clip path group"
              src={image2}
            />
          </div>
          <div className="img-wrapper">
            <img
              className="clip-path-group"
              alt="Clip path group"
              src={image3}
            />
          </div>
          <div className="div">
            <img
              className="clip-path-group"
              alt="Clip path group"
              src={image4}
            />
          </div>
          <div className="group-2">
            <img
              className="clip-path-group"
              alt="Clip path group"
              src={image5}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Mission;
