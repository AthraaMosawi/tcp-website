import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box
      id="FooterRoot"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "90px",
        width: "100%",
        position: "relative",
        marginBottom: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "174px",
          alignItems: "center",
          width: "80%",
          margin: "0 auto",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            width: "70%",
            gap: "70px",
            alignItems: "flex-start",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-start",
            width: "500px",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <img
            src="https://file.rendit.io/n/VsvtuFzMuc2DCiDItUuN.png"
            id="Whitetext"
            alt="text-logo"
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              fontFamily: "Gilroy-Light",
              lineHeight: "28px",
              color: "#f2f2f2",
              ml: "1px",
              width: "100%",
            }}
          >
            We are an organization that provides the necessary resources to
            overcome barriers and increase personal, social, and economic
            empowerment for underrepresented people in Iraq.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontSize: "1.5rem",
              fontFamily: "Gilroy-Medium",
              color: "white",
            }}
          >
            Quick Links
          </Typography>
          <Link
            to="/about-us"
            style={{ textDecoration: "none" }}
            onClick={scrollToTop}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontFamily: "Gilroy-Regular",
                color: "#f2f2f2",
                lineHeight: "38px",
              }}
            >
              About
            </Typography>
          </Link>
          <Link
            to="/courses"
            style={{ textDecoration: "none" }}
            onClick={scrollToTop}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontFamily: "Gilroy-Regular",
                color: "#f2f2f2",
                lineHeight: "38px",
              }}
            >
              Courses
            </Typography>
          </Link>
          <Link
            to="/contact-us"
            style={{ textDecoration: "none" }}
            onClick={scrollToTop}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontFamily: "Gilroy-Regular",
                color: "#f2f2f2",
                lineHeight: "38px",
              }}
            >
              Contact
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: 2,
            gap: 3,
            alignItems: "flex-start",
          }}
        >
          <Typography
            id="ContactUs"
            variant="h5"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "Gilroy-Medium",
              color: "white",
              mb: 2,
            }}
          >
            Contact us
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 3,
            }}
          >
            <img
              src="https://file.rendit.io/n/up19pmzA2SdnnmXBVFL4.svg"
              id="Phoneicon"
              alt="Phone Icon"
            />
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontFamily: "Gilroy-Regular",
              }}
            >
              <a
                href="tel:00964 785 516 9389"
                style={{ textDecoration: "none", color: "white" }}
              >
                00964 785 516 9389
              </a>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
              alignItems: "center",
            }}
          >
            <img
              src="https://file.rendit.io/n/yEDjuFHbHmQ2znoiSgQf.svg"
              alt="Email Icon"
            />
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontFamily: "Gilroy-Regular",
              }}
            >
              <a
                href="mailto: info@thecodepeople.io"
                style={{ textDecoration: "none", color: "white" }}
              >
                info@thecodepeople.io
              </a>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
              alignItems: "center",
            }}
          >
            <img
              src="https://file.rendit.io/n/THNzNziEZojhz8W4nGLj.svg"
              alt="Location Icon"
            />
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontFamily: "Gilroy-Regular",
              }}
            >
              Najaf, Iraq
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box
          id="Line"
          sx={{
            borderStyle: "solid",
            borderColor: "white",
            borderWidth: "1px 0",
            borderBottom: "0",
            borderLeft: "0",
            borderRight: "0",
            width: "80%",
            margin: "0 auto",
          }}
        />
        <Box
          sx={{
            display: "flex",
            width: "80%",
            margin: "0 auto",
            justifyContent: "space-between",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              width: "70%",
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.875rem",
              color: "#f2f2f2",
              fontFamily: "Gilroy-Regular",
            }}
          >
            Copyright 2023 | All Rights Reserved
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "flex-end",
              [theme.breakpoints.down("sm")]: {
                alignItems: "center",
                margin: "20px auto",
              },
            }}
          >
            <Link
              to="https://www.facebook.com/thecodepeople.io"
              target="_blank"
            >
              <img
                src="https://file.rendit.io/n/sSakfIGQf83KZqiyTrVQ.svg"
                id="IconsFacebookLine"
                alt="Facebook Icon"
                style={{ width: "25px" }}
              />
            </Link>
            <Link
              to="https://www.tiktok.com/@thecodepeople.io?_t=8evDFFgK8dl&_r=1"
              target="_blank"
            >
              <img
                src="https://file.rendit.io/n/1tIdNScQXVNZgN9i4GUj.svg"
                id="IconsTiktokLine"
                alt="Tiktok Icon"
                style={{ width: "22px" }}
              />
            </Link>
            <Link
              to="https://instagram.com/thecodepeople.io?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
              target="_blank"
            >
              <img
                src="https://file.rendit.io/n/oW5fxocfZNn5zzAUrULc.svg"
                id="IconsInstagramLine"
                alt="Instagram Icon"
                style={{ width: "25px" }}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/company/thecodepeople/"
              target="_blank"
            >
              <img
                src="https://file.rendit.io/n/4kXvmDdv5OTo2icrnthx.svg"
                id="IconsLINKEDINLine"
                alt="Linkedin Icon"
                style={{ width: "25px" }}
              />
            </Link>
            <Link to="https://github.com/TheCodePeople" target="_blank">
              <img
                src="https://file.rendit.io/n/1RUWByhBmSKjx5pUAdP0.svg"
                id="IconsGithubLine"
                alt="Github Icon"
                style={{ width: "25px" }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
