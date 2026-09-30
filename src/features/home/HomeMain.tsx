import Banner from "./components/Banner";
import ByteSpaceCourses from "./components/ByteSpaceCourses";
import CompanyLogo from "./components/CompanyLogo";
import LearningPaths from "./components/LearningPaths";

export default function HomeMain() {
  return (
    <>
      <Banner />
      <CompanyLogo />
      <ByteSpaceCourses />
      <LearningPaths />
    </>
  );
}
