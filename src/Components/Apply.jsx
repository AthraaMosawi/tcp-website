import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Apply({ course }) {
  const theme = useTheme();
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Gilroy-Medium",
          fontSize: "1.9rem",
          margin: "200px auto",
          marginBottom: "70px",
          marginLeft: "150px",
          [theme.breakpoints.down("sm")]: {
            marginLeft: "50px",
            marginTop: "90px",
            fontSize: "1.5rem",
            width: "70%",
          },
        }}
      >
        How to apply to our web development bootcamp?
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          margin: "0 auto",
          gap: "20px",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            marginBottom: "100px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <Typography sx={{ fontFamily: "Gilroy-Regular" }}>
              <span
                style={{
                  backgroundColor: "#FF5869",
                  maxWidth: "34px",
                  maxHeight: "34px",
                  borderRadius: "50%",
                  padding: "10px 15px",
                  fontSize: "20px",
                }}
              >
                1
              </span>
            </Typography>
            <Typography
              sx={{
                marginLeft: "20px",
                fontFamily: "Gilroy-Regular",
                fontSize: "1.7rem",
              }}
            >
              Prerequisites
            </Typography>
          </Box>
          {course.eligibilityCriteria.map((eligibility) => (
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#1C2034",
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "#1C2034",
                  // border: ".6 solid white",
                  borderRadius: "10px",
                  padding: "20px",
                  fontFamily: "Gilroy-Regular",
                  lineHeight: "25px",
                  // height: "470px",
                  [theme.breakpoints.down("sm")]: {
                    height: "auto",
                  },
                }}
              >
                <li>{eligibility}</li>
                {/* <li>Basic computer literacy</li>
              <li>Proficient in English reading and comprehension</li>
              <li>
                Participants who possess a foundational understanding of HTML
                and CSS
              </li>
              <li>
                Participants should be able to dedicate the necessary time to
                fully engage in the bootcamp, which includes attending all
                lessons and having sufficient time to complete tasks and
                assignments.
              </li> */}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <Typography sx={{ fontFamily: "Gilroy-Regular" }}>
                <span
                  style={{
                    backgroundColor: "#17C8BE",
                    color: "#1C2034",
                    maxWidth: "34px",
                    maxHeight: "34px",
                    borderRadius: "50%",
                    padding: "10px 15px",
                    fontSize: "20px",
                  }}
                >
                  2
                </span>
              </Typography>
              <Typography
                sx={{
                  marginLeft: "20px",
                  fontFamily: "Gilroy-Regular",
                  fontSize: "1.7rem",
                }}
              >
                Pass our technical quiz
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  backgroundColor: "#1C2034",
                  border: ".6 solid white",
                  borderRadius: "10px",
                  padding: "20px",
                  fontFamily: "Gilroy-Regular",
                  lineHeight: "35px",
                }}
              >
                <p>
                  You will take a technical quiz to assess your coding knowledge
                  and your ability to learn.
                </p>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "20px 0px",
              }}
            >
              <Typography sx={{ fontFamily: "Gilroy-Regular" }}>
                <span
                  style={{
                    backgroundColor: "#F9D53E",
                    maxWidth: "34px",
                    maxHeight: "34px",
                    borderRadius: "50%",
                    padding: "10px 15px",
                    fontSize: "20px",
                    color: "#1C2034",
                  }}
                >
                  3
                </span>
              </Typography>
              <Typography
                sx={{
                  marginLeft: "20px",
                  fontFamily: "Gilroy-Regular",
                  fontSize: "1.7rem",
                }}
              >
                Book an interview with our enrolment advisor
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  backgroundColor: "#1C2034",
                  border: ".6 solid white",
                  borderRadius: "10px",
                  padding: "20px",
                  fontFamily: "Gilroy-Regular",
                  lineHeight: "35px",
                }}
              >
                <p>
                  When you apply, we’ll get back to you to schedule a 30 minute
                  video interview. We'll talk about your professional background
                  and your motivation.
                </p>
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* here is the start */}
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <Typography sx={{ fontFamily: "Gilroy-Regular" }}>
                <span
                  style={{
                    backgroundColor: "#FFF",
                    color: "#1C2034",
                    maxWidth: "34px",
                    maxHeight: "34px",
                    borderRadius: "50%",
                    padding: "10px 15px",
                    fontSize: "20px",
                  }}
                >
                  4
                </span>
              </Typography>
              <Typography
                sx={{
                  marginLeft: "20px",
                  fontFamily: "Gilroy-Regular",
                  fontSize: "1.7rem",
                }}
              >
                Payment options & prepwork
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{
                  backgroundColor: "#1C2034",
                  border: ".6 solid white",
                  borderRadius: "10px",
                  padding: "20px",
                  fontFamily: "Gilroy-Regular",
                  lineHeight: "35px",
                  height: "430px",
                  [theme.breakpoints.down("sm")]: {
                    height: "auto",
                  },
                }}
              >
                <p>
                  The last step will consist of finding the most suitable
                  financing option for you. Then, you'll jump into the prepwork
                  which consists of 13 weeks training.
                </p>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
