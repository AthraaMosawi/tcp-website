import "../Style/navbar.css";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import TCPLogo from "../Assets/images/logo.svg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <img src={TCPLogo} alt="tcp-logo" />
        <h2>The Code People</h2>
      </div>
      <div>
        <Box
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          <Link to="/" className="animated" href="#">
            Home
          </Link>
          <Link to="/courses" className="animated" href="#">
            Courses
          </Link>
          <Link to="/about-us" className="animated" href="#">
            About
          </Link>
          <Link to="/contact-us" className="animated" href="#">
            Contact
          </Link>
        </Box>
        <Button
          sx={{
            display: "none",
            [theme.breakpoints.down("sm")]: {
              display: "block",
              width: "20%",
              backgroundColor: "transparent",
              paddingTop: "0px",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#F9D53E",
              },
            },
          }}
          variant="contained"
          startIcon={<MenuIcon style={{ fontSize: "35px" }} />}
          onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)}
        />
      </div>
      <div
        className="hamburger-menu"
        style={{ display: hamburgerMenuOpen ? "flex" : "none" }}
      >
        <Link
          to="/"
          className="animated"
          onClick={() => setHamburgerMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/courses"
          className="animated"
          onClick={() => setHamburgerMenuOpen(false)}
        >
          Courses
        </Link>
        <Link
          to="/about-us"
          className="animated"
          onClick={() => setHamburgerMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact-us"
          className="animated"
          onClick={() => setHamburgerMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
