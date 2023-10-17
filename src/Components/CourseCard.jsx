import React, { useContext } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Context from "../Store/coursesData";

const CourseCard = () => {
  const { courses } = useContext(Context);
  return Object.keys(courses).length > 0 ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "362px",
        padding: "10px",
        fontFamily: "Gilroy-Regular",
      }}
    >
      {courses.map((course, index) => (
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
            // image="https://file.rendit.io/n/9WscNZNpRd6TrsphDpNe.svg"
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
            }}
          >
            <img
              src="https://file.rendit.io/n/35jFOBGYHspSuWLf9X9Z.svg"
              alt="video"
            />
            <Typography
              variant="body1"
              color="white"
              marginLeft="10px"
              width="50%"
              fontFamily="Gilroy-Regular"
            >
              50x Lesson
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
                  In-Person
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
                {/* JavaScript Course */}
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
                  src="https://file.rendit.io/n/Fm3BqXF4gsTJAXGQV30M.png"
                  alt="Ellipse"
                />
                <Typography
                  variant="body1"
                  color="white"
                  sx={{
                    marginLeft: "5px",
                    fontFamily: "Gilroy-Regular",
                  }}
                >
                  Zahraa M. Ali <br />{" "}
                  <span style={{ fontSize: "10px" }}>Full Stack Developer</span>
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
                  10+ Student
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
              }}
            >
              <Box
                sx={{
                  width: "20px",
                  marginTop: "5px",
                }}
              >
                <img
                  src="https://file.rendit.io/n/v6kDFLtyjfBIw8d474vX.svg"
                  alt="rating"
                />
              </Box>
              <Typography
                variant="body1"
                color="#17c8be"
                borderBottom="1px solid #17c8be"
                fontFamily="Gilroy-Regular"
              >
                Enroll Now
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  ) : (
    <h1>Loading...</h1>
  );
};

export default CourseCard;
