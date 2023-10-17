import image from "../Assets/images/girl3.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Stories() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          marginTop: "90px",
          [theme.breakpoints.down("sm")]: { marginTop: "30px" },
        }}
      ></Box>
      <Typography
        level="h1"
        sx={{
          fontFamily: "Gilroy-Medium",
          margin: "80px",
          color: "#fff",
          fontSize: "45px",
          textAlign: "center",
          position: "relative",
          // top: "500px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "35px",
            marginBottom: "40px",
            // top: "350px",
          },
        }}
      >
        Success Stories
      </Typography>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-end",
          backgroundColor: "#1C2034",
          color: "#FFF",
          margin: "0 auto",
          borderRadius: "20px",
          maxWidth: "900px",
          position: "relative",
          // top: "550px",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            width: "80%",
            // top: "350px",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              variant="subtitle1"
              component="div"
              width="95%"
              sx={{
                color: "#FFF",
                margin: "20px",
                fontFamily: "Gilroy-Regular",
              }}
            >
              One of the difficulties that I had when I was studying web
              development on my own was that even though I could grasp the
              material and understand the concepts in an abstract format, I
              didn't always understand how it could be applied in real life.
              Getting the opportunity to learn from the Head Instructor for my
              course was really eye-opening for me.
            </Typography>
            <Box
              sx={{
                width: "45%",
                height: "1px",
                margin: "30px 20px",
                borderTop: "1px solid white",
                borderBottom: "0px",
                borderLeft: "0px",
                borderRight: "0px",
              }}
            />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              width="65%"
              sx={{
                color: "#FFD100",
                fontSize: "20px",
                margin: "20px",
                fontFamily: "Gilroy-Regular",
              }}
            >
              Haneen Jaleel
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              width="65%"
              sx={{
                color: "#FFF",
                marginLeft: "20px",
                fontFamily: "Gilroy-Regular",
              }}
            >
              Web Designer
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{
            maxWidth: "800px",
            height: "400px",
            [theme.breakpoints.down("sm")]: {
              height: "350px",
            },
          }}
          image={image}
          alt="student"
        />
      </Card>
    </>
  );
}
