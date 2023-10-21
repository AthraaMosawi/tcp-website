import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CourseInfo = ({ course }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1C2034",
          border: ".6 solid white",
          borderRadius: "10px",
          padding: "20px",
          width: "77%",
          margin: "100px auto",
          fontFamily: "Gilroy-Regular",
        }}
      >
        {/* /////////////////////////////// */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 40px",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "1.6rem",
              color: "#17C8BE",
              fontFamily: "Gilroy-Regular",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.2rem",
              },
            }}
          >
            Bootcamp Information
          </Typography>
          <Box
            sx={{
              [theme.breakpoints.down("sm")]: {
                marginTop: "20px",
              },
            }}
          >
            <img
              src="https://file.rendit.io/n/9WscNZNpRd6TrsphDpNe.svg"
              alt="course-vector"
            />
          </Box>
        </Box>
        {/* /////////////////////////////// */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 40px",
            borderBottom: ".6px solid #464663",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "10px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            Bootcamp Fee
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "10px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            {course.fees} IQD
          </Typography>
        </Box>
        {/* /////////////////////////////// */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 40px",
            borderBottom: ".6px solid #464663",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "10px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            Level
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "10px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            {course.level}
          </Typography>
        </Box>
        {/* /////////////////////////////// */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 40px",
            borderBottom: ".6px solid #464663",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "10px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            Duration
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "10px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            {course.duration}
          </Typography>
        </Box>
        {/* /////////////////////////////// */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 40px",
            borderBottom: ".6px solid #464663",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "10px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            Starting Date
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontFamily: "Gilroy-Regular",
              padding: "10px",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.1rem",
              },
            }}
          >
            {course.startingDate}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default CourseInfo;
