import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../Style/coursessection.css";
import CardsSlider from "./CardsSlider";

const CoursesSection = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Typography
        variant="h4"
        className="courses-section-title"
        sx={{
          fontFamily: "Gilroy-SemiBold",
        }}
      >
        Our Courses
      </Typography>
      <Box className="courses-section">
        <Box className="courses-container">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              alignItems: "start",
            }}
          >
            <Typography
              variant="h4"
              className="sub-title"
              sx={{
                fontFamily: "Gilroy-SemiBold",
              }}
            >
              Start Learning
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Gilroy-Regular",
                fontSize: "20px",
                lineHeight: "35px",
                color: "white",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              We provide affordable, high-quality technology education that
              sparks creativity and instils the knowledge to create real-world
              solutions and opportunities for lifelong success.
            </Typography>
          </Box>
          <Button
            id="CoursesButton"
            variant="contained"
            sx={{
              width: "150px",
              background:
                "linear-gradient(90deg, rgb(23, 200, 190) 0%, rgb(249, 213, 62) 100%)",
              borderRadius: "4px",
            }}
          >
            {" "}
            <Link
              to="/courses"
              style={{ textDecoration: "none" }}
              onClick={scrollToTop}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Gilroy-Medium",
                  fontSize: "15px",
                  color: "#01011E",
                }}
              >
                All Courses
              </Typography>
            </Link>
          </Button>
        </Box>

        <CardsSlider />
      </Box>
    </>
  );
};
export default CoursesSection;
