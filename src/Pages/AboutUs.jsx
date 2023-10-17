import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import paper from "../Assets/images/paper-plane.gif";
import TheTeam from "../Components/TheTeam";
import BookSession from "../Components/BookSession";

const AboutUs = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: "80%",
          margin: "100px auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "250px",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "start",
          },
        }}
      >
        <Box>
          <img
            src="https://file.rendit.io/n/VsvtuFzMuc2DCiDItUuN.png"
            id="Whitetext"
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Gilroy-Regular",
            marginTop: "30px",
            width: "70%",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          We are an organization that provides the necessary resources to
          overcome barriers and increase personal, social and economic
          empowerment for underrepresented people in Iraq.
        </Typography>
      </Box>
      <TheTeam />
      <Box
        sx={{
          margin: "0 auto",
          width: "80%",
          margin: "50px auto",
          display: "flex",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            margin: "0px auto",
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Gilroy-Regular",
            marginTop: "30px",
            width: "700px",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <span style={{ fontSize: "30px", color: "#17C8BE" }}>Our Aim</span>
          <br />
          <br />
          is to inspire more Iraqi youth, especially women, to learn technical
          skills and pursue job opportunities in Iraq and the region. <br />
          <br />
          We do this by providing affordable, accessible, high-quality
          technology education that sparks creativity and instils the knowledge
          to create real-world solutions and opportunities for lifelong success.
        </Typography>{" "}
        <img src={paper} id="Whitetext" style={{ width: "400px" }} />
      </Box>
      <BookSession />
    </>
  );
};
export default AboutUs;
