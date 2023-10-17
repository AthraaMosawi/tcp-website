import HerosectionTest from "../Components/HerosectionTest";
import "../Style/home.css";
import CoursesSection from "../Components/CoursesSection";
import Mission from "../Components/Mission";
import Stories from "../Components/Stories";
import BookSession from "../Components/BookSession";
import { CoursesData } from "../Store/coursesData";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div className="home">
      <HerosectionTest />
      <CoursesData>
        <CoursesSection />
      </CoursesData>
      <Mission />
      <Testimonials />
      <Stories />
      <BookSession />
    </div>
  );
};
export default Home;
