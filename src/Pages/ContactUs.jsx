import { Typography, Box } from "@mui/material";
import ContactForm from "../Components/ContactForm";
import pizza from "../Assets/images/pizza-piece.svg";
import { useTheme } from "@mui/material/styles";
import "../Style/form.css";

const ContactUs = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          margin: "160px auto",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Gilroy-SemiBold",
              marginBottom: "50px",
              color: "#17C8BE",
              [theme.breakpoints.down("sm")]: {
                textAlign: "center",
              },
            }}
          >
            Contact Us
          </Typography>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Gilroy-Medium",
                marginBottom: "10px",
                [theme.breakpoints.down("sm")]: {
                  textAlign: "center",
                },
              }}
            >
              Let's talk!
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Gilroy-Regular",
                lineHeight: "40px",
                [theme.breakpoints.down("sm")]: {
                  textAlign: "center",
                },
              }}
            >
              Don't be shy, we don't bite <br />
              <span style={{ color: "#F9D53E" }}>unless you're a pizza...</span>
            </Typography>
          </Box>
          <img
            src={pizza}
            alt="pizza"
            // style={{ width: "50%" }}
            className="pizzaImg"
          />
        </Box>
        <Box
          sx={{
            width: "60%",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <ContactForm />
        </Box>
      </Box>
    </>
  );
};
export default ContactUs;
