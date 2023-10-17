import React from "react";
import { Typography, Box } from "@mui/material";
import line from "../Assets/images/line.svg";
import "../Style/teamStyle.css";
import { useTheme } from "@mui/material/styles";

const TheTeam = () => {
  const theme = useTheme();

  return (
    <>
      <div className="container">
        <div className="overlap">
          {/* ///////////////////////////////////////// */}

          <Typography
            sx={{
              fontSize: "1.9rem",
              fontFamily: "Gilroy-Medium",
              textAlign: "center",
              width: "80%",
              margin: "0px auto",
              color: "#17C8BE",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem",
                marginBottom: "40px",
                textAlign: "left",
              },
            }}
          >
            Meet the Team
          </Typography>

          {/* ///////////////////////////////////////// */}

          <img className="line-vector" alt="Vector" src={line} />

          {/* //////////////////////////////////// */}

          <Box className="red-vector">
            <img
              alt="Vector"
              src="https://file.rendit.io/n/9kjfYysaM4wLJnw9ENjh.svg"
              style={{ width: "100px" }}
            />
            <img
              src="https://file.rendit.io/n/bvfBxg63XcUu77fRLv22.svg"
              style={{ position: "relative", bottom: "90px", left: "20%" }}
              alt="hawra"
            />
            <Box
              sx={{
                position: "relative",
                bottom: "90px",
                left: "6%",
                width: "200px",
                [theme.breakpoints.down("sm")]: {
                  width: "140px",
                  left: "16%",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Gilroy-Regular",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "16px",
                    textAlign: "center",
                  },
                }}
              >
                Hawra Milani
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Gilroy-Regular",
                  color: "#17C8BE",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "12px",
                    textAlign: "center",
                  },
                }}
              >
                CEO and Co-Founder
              </Typography>
            </Box>
          </Box>

          {/* //////////////////////////////////// */}

          <Box
            className="turq-vector"
            sx={{
              position: "relative",
              bottom: "520px",
              [theme.breakpoints.down("sm")]: {
                bottom: "360px",
              },
            }}
          >
            <img
              alt="Vector"
              src="https://file.rendit.io/n/7GrHEEzejeFTxBlOdI1C.svg"
              style={{ width: "100px" }}
            />
            <img
              src="https://file.rendit.io/n/bklbDYnM3Mo36hbe9ZFF.svg"
              style={{ position: "relative", bottom: "90px", left: "20%" }}
              alt="soroor"
            />
            <Box
              sx={{
                position: "relative",
                bottom: "90px",
                left: "6%",
                width: "200px",
                [theme.breakpoints.down("sm")]: {
                  width: "140px",
                  left: "16%",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Gilroy-Regular",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "16px",
                    textAlign: "center",
                  },
                }}
              >
                Soroor Al-Mousawi
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Gilroy-Regular",
                  color: "#17C8BE",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "12px",
                    textAlign: "center",
                  },
                }}
              >
                COO and Co-Founder
              </Typography>
            </Box>
          </Box>

          {/* /////////////////////////////////////////////////// */}
          <Box
            className="yellow-vector"
            sx={{
              position: "relative",
              bottom: "780px",
              [theme.breakpoints.down("sm")]: {
                bottom: "360px",
              },
            }}
          >
            <img
              alt="Vector"
              src="https://file.rendit.io/n/4yNotQKOtr72hmph1qD8.svg"
              style={{ width: "100px" }}
            />
            <img
              src="https://file.rendit.io/n/YWpZ2eHVJe2vu2FgvkHa.svg"
              style={{ position: "relative", bottom: "90px", left: "20%" }}
              alt="zahraa"
            />
            <Box
              sx={{
                position: "relative",
                bottom: "80px",
                left: "1%",
                width: "210px",
                [theme.breakpoints.down("sm")]: {
                  width: "140px",
                  left: "16%",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Gilroy-Regular",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "16px",
                    textAlign: "center",
                  },
                }}
              >
                Zahraa Baharaluloom
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Gilroy-Regular",
                  color: "#17C8BE",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "12px",
                    textAlign: "center",
                  },
                }}
              >
                CINO and Co-Founder
              </Typography>
            </Box>
          </Box>

          {/* ///////////////////////////////////////// */}

          <Box
            className="white-vector"
            sx={{
              position: "relative",
              bottom: "1010px",
              [theme.breakpoints.down("sm")]: {
                bottom: "620px",
              },
            }}
          >
            <img
              alt="Vector"
              src="https://file.rendit.io/n/QTllvLp9sgrodkhpC2Zn.svg"
              style={{ width: "100px" }}
            />
            <img
              src="https://file.rendit.io/n/c4MbmcBgjALeubflFRjv.svg"
              style={{ position: "relative", bottom: "90px", left: "20%" }}
              alt="athraa"
            />
            <Box
              sx={{
                position: "relative",
                bottom: "80px",
                left: "1%",
                width: "210px",
                [theme.breakpoints.down("sm")]: {
                  width: "140px",
                  left: "16%",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Gilroy-Regular",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "16px",
                    textAlign: "center",
                  },
                }}
              >
                Athraa Mohammed
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Gilroy-Regular",
                  color: "#17C8BE",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "12px",
                    textAlign: "center",
                  },
                }}
              >
                CMO and Co-Founder
              </Typography>
            </Box>
          </Box>
          <img className="Third-line-vector" alt="Vector" src={line} />
        </div>
      </div>
    </>
  );
};
export default TheTeam;
