import image1 from "../Assets/images/img1.png";
import image2 from "../Assets/images/img2.png";
import image3 from "../Assets/images/img3.png";
import image4 from "../Assets/images/img4.png";
import image5 from "../Assets/images/img5.png";
import AspectRatio from "@mui/joy/AspectRatio";
import "../Style/studentSays.css";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import { useTheme } from "@mui/material/styles";

const data = [
  {
    src: image1,
    message:
      "Loream spam Loream spamLoream spamLoream spamLoream spamLoream spamLoream spam",
    stuName: "Zahraa M.",
    description: "JS Course Students",
    backColor: "#FFD100",
  },
  {
    src: image2,
    message:
      "Loream spam Loream spamLoream spamLoream spamLoream spamLoream spamLoream spam",
    stuName: "Alhasan Ali",
    description: "JS Course Students",
    backColor: "#17C8BE",
  },
  {
    src: image3,
    message:
      "Loream spam Loream spamLoream spamLoream spamLoream spamLoream spamLoream spam",
    stuName: "Muna Moh.",
    description: "JS Course Students",
    backColor: "#FFF",
  },
  {
    src: image4,
    message:
      "Loream spam Loream spamLoream spamLoream spamLoream spamLoream spamLoream spam",
    stuName: "Hussein Alwan",
    description: "JS Course Students",
    backColor: "#FFD100",
  },
  {
    src: image5,
    message:
      "Loream spam Loream spamLoream spamLoream spamLoream spamLoream spamLoream spam",
    stuName: "Rana Jasim",
    description: "JS Course Students",
    backColor: "#17C8BE",
  },
  {
    src: image5,
    message:
      "Loream spam Loream spamLoream spamLoream spamLoream spamLoream spamLoream spam",
    stuName: "Rana Jasim",
    description: "JS Course Students",
    backColor: "#FFF",
  },
  {
    src: image5,
    message:
      "Loream spam Loream spamLoream spamLoream spamLoream spamLoream spamLoream spam",
    stuName: "Rana Jasim",
    description: "JS Course Students",
    backColor: "#FFD100",
  },
  {
    src: image5,
    message:
      "Loream spam Loream spamLoream spamLoream spamLoream spamLoream spamLoream spam",
    stuName: "Rana Jasim",
    description: "JS Course Students",
    backColor: "#17C8BE",
  },
  {
    src: image5,
    message:
      "Loream spam Loream spamLoream spamLoream spamLoream spamLoream spamLoream spam",
    stuName: "Rana Jasim",
    description: "JS Course Students",
    backColor: "#FFF",
  },
];

export default function StudentsSay() {
  const theme = useTheme();
  return (
    <div className="students-messages">
      <Typography
        level="h1"
        className="saying-section-title"
        sx={{
          fontFamily: "Gilroy-Medium",
          margin: "60px auto",
          color: "#fff",
          width: "90%",
          [theme.breakpoints.down("sm")]: {
            fontSize: "35px",
            margin: "0px auto",
            marginBottom: "40px",
          },
        }}
      >
        What our students are saying?
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          py: 1,
          overflow: "auto",
          margin: "0 auto",
          width: "90%",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
          [theme.breakpoints.down("sm")]: {
            width: "100%",
          },
        }}
      >
        {data.slice(0, 3).map((item) => (
          <Card
            orientation="horizontal"
            size="md"
            key={item.message}
            variant="outlined"
            sx={{
              minWidth: "340px",
              borderRadius: "60px",
              backgroundColor: item.backColor,
              [theme.breakpoints.down("sm")]: {
                minWidth: "300px",
              },
            }}
          >
            <AspectRatio
              ratio="1"
              sx={{
                minWidth: 100,
                backgroundColor: "transparent",
                [theme.breakpoints.down("sm")]: {
                  minWidth: 60,
                },
              }}
            >
              <img
                srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.src}?h=120&fit=crop&auto=format`}
                alt={item.message}
                style={{ backgroundColor: item.backColor }}
              />
            </AspectRatio>
            <Box sx={{ mx: 1 }}>
              <Typography
                level="title-md"
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "12px",
                  },
                }}
              >
                {item.message}
              </Typography>
              <Typography
                sx={{
                  marginTop: "10px",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "10px",
                  },
                }}
                level="body-sm"
              >
                {item.stuName} - {item.description}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
      {/* second line */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          py: 1,
          overflow: "auto",
          width: "100%",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {data.slice(3).map((item) => (
          <Card
            orientation="horizontal"
            size="md"
            key={item.message}
            variant="outlined"
            sx={{
              minWidth: "400px",
              borderRadius: "60px",
              backgroundColor: item.backColor,
              [theme.breakpoints.down("sm")]: {
                minWidth: "300px",
              },
            }}
          >
            <AspectRatio
              ratio="1"
              sx={{
                minWidth: 100,
                backgroundColor: "transparent",
                [theme.breakpoints.down("sm")]: {
                  minWidth: 60,
                },
              }}
            >
              <img
                srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.src}?h=120&fit=crop&auto=format`}
                alt={item.message}
                style={{ backgroundColor: item.backColor }}
              />
            </AspectRatio>
            <Box sx={{ mx: 1 }}>
              <Typography
                level="title-md"
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "12px",
                  },
                }}
              >
                {item.message}
              </Typography>
              <Typography
                sx={{
                  marginTop: "10px",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "10px",
                  },
                }}
                level="body-sm"
              >
                {item.stuName} - {item.description}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
}
