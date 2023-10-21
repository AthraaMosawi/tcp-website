import * as React from "react";
import { useState } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import { useTheme } from "@mui/material/styles";

export default function FilterComboBox({ onApplyFilter }) {
  const theme = useTheme();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [isFilterVisible, setFilterVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(false);

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  const getLabelValue = (checkbox) => {
    const labelElement = checkbox.closest("label");
    return labelElement.textContent;
  };

  const handleApplyFilter = () => {
    const filterCriteria = {
      topic: selectedTopic,
      status: selectedStatus,
      level: selectedLevel,
    };
    onApplyFilter(filterCriteria);
  };

  return (
    <>
      <Button
        onClick={toggleFilter}
        sx={{
          display: { xs: "block", sm: "none" },
          flexDirection: { xs: "row", sm: "column" },
          width: "80%",
          margin: "30px auto",
          background:
            "linear-gradient(90deg, rgb(23, 200, 190) 0%, rgb(249, 213, 62) 100%)",
          borderRadius: "4px",
          color: "#01011E",
          fontFamily: "Gilroy-Medium",
        }}
      >
        Show Filters
      </Button>

      <Box
        sx={{
          backgroundColor: "#1C2034",
          margin: "30px auto",
          marginTop: "60px",
          padding: "0px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          borderRadius: "15px",
          display: { xs: isFilterVisible ? "flex" : "none", sm: "flex" },
          flexDirection: {
            xs: isFilterVisible ? "column" : "row",
            sm: "row",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <Typography
            gutterBottom
            sx={{ fontSize: "18px", fontFamily: "Gilroy-Regular" }}
          >
            Topics
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={availableCourses}
            onChange={(event, value) => setSelectedTopic(value)}
            sx={{
              width: "200px",
              backgroundColor: "#F4F3F5",
              margin: "20px",
              borderRadius: "10px",
              fontFamily: "Gilroy-Regular",
              [theme.breakpoints.down("sm")]: {
                width: "300px",
              },
            }}
            renderInput={(params) => (
              <TextField {...params} label="All Topics" />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              color: "#17C8BE",
              fontFamily: "Gilroy-Regular",
            }}
            gutterBottom
          >
            Status
          </Typography>
          <FormGroup sx={{ marginLeft: "10px", flexDirection: "row" }}>
            <FormControlLabel
              control={<Checkbox {...label} />}
              onChange={(event, value) =>
                setSelectedStatus(getLabelValue(event.target))
              }
              label="Closed"
            />
            <FormControlLabel
              control={<Checkbox {...label} />}
              onChange={(event, value) =>
                setSelectedStatus(getLabelValue(event.target))
              }
              label="Open"
            />
            <FormControlLabel
              control={<Checkbox {...label} />}
              onChange={(event, value) =>
                setSelectedStatus(getLabelValue(event.target))
              }
              label="Upcoming"
            />
          </FormGroup>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              color: "#17C8BE",
              fontFamily: "Gilroy-Regular",
            }}
            gutterBottom
          >
            Level
          </Typography>
          <FormGroup sx={{ marginLeft: "10px", flexDirection: "row" }}>
            <FormControlLabel
              fontFamily="Gilroy-Regular"
              control={<Checkbox {...label} />}
              onChange={(event, value) =>
                setSelectedLevel(getLabelValue(event.target))
              }
              label="Beginner"
            />
            <FormControlLabel
              control={<Checkbox {...label} />}
              onChange={(event, value) =>
                setSelectedLevel(getLabelValue(event.target))
              }
              label="Intermediate"
            />
            <FormControlLabel
              control={<Checkbox {...label} />}
              onChange={(event, value) =>
                setSelectedLevel(getLabelValue(event.target))
              }
              label="Advance"
            />
          </FormGroup>
        </Box>
        <Box
          sx={{
            display: "flex",
            [theme.breakpoints.down("sm")]: {
              width: "90%",
              justifyContent: "flex-end",
            },
          }}
        >
          <Button
            id="CoursesButton"
            variant="contained"
            sx={{
              width: "auto",
              background:
                "linear-gradient(90deg, rgb(23, 200, 190) 0%, rgb(249, 213, 62) 100%)",
              borderRadius: "4px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
            onClick={handleApplyFilter}
          >
            <Typography
              sx={{
                fontFamily: "Gilroy-Medium",
                fontSize: "15px",
                color: "#01011E",
              }}
            >
              Apply Filter
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}

const availableCourses = [
  "Git and GitHub",
  "React",
  "JavaScript",
  "Python",
  "web Fundamentals",
  "Fullstack",
];
