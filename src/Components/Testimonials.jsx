import AspectRatio from "@mui/joy/AspectRatio";
import "../Style/studentSays.css";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import { useTheme } from "@mui/material/styles";

import testimonials from "../Store/testimonials";

export default function Testimonials() {
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
          justifyContent: "center",
          gap: 1,
          py: 1,
          overflowX: "auto",
          margin: "0 auto",
          width: "100%",
          "& > *": {
            flexShrink: 0,
          },
          "::-webkit-scrollbar": { display: "none" },
          [theme.breakpoints.down("sm")]: {
            width: "100%",
          },
        }}
      >
        {testimonials.slice(0, 3).map((item) => (
          <Card
            orientation="horizontal"
            size="md"
            key={item.message}
            variant="outlined"
            sx={{
              height: "100px",
              borderRadius: "60px",
              backgroundColor: item.backColor,
              [theme.breakpoints.down("sm")]: {
                minWidth: "auto",
                height: "70px",
              },
            }}
          >
            <AspectRatio
              ratio="1"
              sx={{
                minWidth: 100,
                borderRadius: "70px",
                [theme.breakpoints.down("sm")]: {
                  minWidth: 70,
                },
              }}
            >
              <img
                srcSet={`${item.image}?h=120&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image}?h=120&fit=crop&auto=format`}
                alt={item.testimonyText}
              />
            </AspectRatio>
            <Box
              sx={{
                height: "auto",
                padding: "2px",
                width: "300px",
                [theme.breakpoints.down("sm")]: {
                  width: "250px",
                },
              }}
            >
              <Typography
                level="title-md"
                sx={{
                  fontFamily: "Tajawal-Regular",
                  fontSize: "14px",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "10px",
                  },
                }}
              >
                {item.testimonyText}
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
                {item.name}
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
          overflowX: "auto",
          width: "100%",
          "& > *": {
            flexShrink: 0,
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {testimonials.slice(3).map((item) => (
          <Card
            orientation="horizontal"
            size="md"
            key={item.message}
            variant="outlined"
            sx={{
              height: "100px",
              borderRadius: "60px",
              backgroundColor: item.backColor,
              [theme.breakpoints.down("sm")]: {
                minWidth: "300px",
                height: "70px",
              },
            }}
          >
            <AspectRatio
              ratio="1"
              sx={{
                minWidth: 100,
                borderRadius: "70px",
                [theme.breakpoints.down("sm")]: {
                  minWidth: 70,
                },
              }}
            >
              <img
                srcSet={`${item.image}?h=120&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image}?h=120&fit=crop&auto=format`}
                alt={item.testimonyText}
              />
            </AspectRatio>
            <Box
              sx={{
                height: "auto",
                padding: "2px",
                width: "300px",
                [theme.breakpoints.down("sm")]: {
                  width: "250px",
                },
              }}
            >
              <Typography
                level="title-md"
                sx={{
                  fontFamily: "Tajawal-Regular",
                  fontSize: "14px",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "10px",
                  },
                }}
              >
                {item.testimonyText}
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
                {item.name}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
}
