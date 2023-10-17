import CourseHeroSec from "../Components/CourseHeroSec";
import GainFeatures from "../Components/GainFeatures";
import Curriculum from "../Components/Curriculum";
import Apply from "../Components/Apply";
import CourseInfo from "../Components/CourseInfo";
import { useLocation } from "react-router-dom";

export default function CourseDetails() {
  const location = useLocation();
  const course = location.state?.course;
  console.log(course, "this one");

  return (
    <>
      <CourseHeroSec course={course} />
      <GainFeatures course={course} />
      <Curriculum course={course} />
      <Apply course={course} />
      <CourseInfo course={course} />
    </>
  );
}
