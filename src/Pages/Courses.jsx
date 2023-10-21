import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FilterCombobox from "../Components/FilterCombobox";
import CourseCardTest from "../Components/CourseCardTest";
import ChooseCourse from "../Components/ChooseCourse";
import Context from "../Store/filteredData";
import CoursesContext from "../Store/coursesData";
import { useContext } from "react";

const Courses = () => {
  const theme = useTheme();
  const { courses } = useContext(CoursesContext);
  const { setFilteredCourses, setNotFound, setSearchValue } =
    useContext(Context);

  const handleApplyFilter = (filterCriteria) => {
    const { topic, status, level } = filterCriteria;

    const filteredCoursesResult = courses.filter((course) => {
      const isTopicMatch =
        !topic || course.name.toLowerCase().includes(topic.toLowerCase());
      const isStatusMatch =
        !status || course.status.toLowerCase().includes(status.toLowerCase());
      const isLevelMatch =
        !level || course.level.toLowerCase().includes(level.toLowerCase());

      return isTopicMatch && isStatusMatch && isLevelMatch;
    });

    setFilteredCourses(filteredCoursesResult);

    if (filteredCoursesResult.length > 0) {
      setNotFound("");
    } else {
      setNotFound("Oops! No Course Found.");
    }

    setSearchValue(topic || status || level);
  };

  const CourseCardsStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "42px",
    margin: "0 auto",
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      gap: "0",
    },
  };

  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          width: "70%",
          textAlign: "Center",
          marginTop: "80px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Gilroy-Regular",
            margin: "0 auto",
            fontSize: "24px",
          }}
        >
          <Typography
            sx={{
              fontSize: "45px",
              fontFamily: "Gilroy-SemiBold",
              [theme.breakpoints.down("sm")]: {
                fontSize: "30px",
              },
            }}
          >
            Course Catalog
          </Typography>
          <br />A full-time commitment, designed{" "}
          <span style={{ color: "#FFD100" }}>to get you hired.</span>
        </Typography>
      </Box>
      <FilterCombobox onApplyFilter={handleApplyFilter} />

      <CourseCardTest customStyles={CourseCardsStyles} />
      <ChooseCourse />
    </>
  );
};
export default Courses;
