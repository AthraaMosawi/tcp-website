import * as React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
// import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
// import CourseCard from "./CourseCard";
import CourseCardTest from "./CourseCardTest";
import { FilteredDataProvider } from "../Store/filteredData";

export default function CardsSlider() {
  return (
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
      <Card sx={{ padding: 0, backgroundColor: "transparent", border: "none" }}>
        <Box
          sx={{
            mx: 1,
            margin: 0,
          }}
        >
          <FilteredDataProvider>
            <CourseCardTest />
          </FilteredDataProvider>
        </Box>
      </Card>
    </Box>
  );
}
