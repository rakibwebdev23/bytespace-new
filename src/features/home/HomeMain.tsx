import { Unlock } from "lucide-react";
import Banner from "./components/Banner";
import ByteSpaceCourses from "./components/ByteSpaceCourses";
import CompanyLogo from "./components/CompanyLogo";
import LearningPaths from "./components/LearningPaths";
import ProfessionalGrowth from "./components/ProfessionalGrowth";
import UnlockPotential from "./components/UnlockPotential";

export default function HomeMain() {
  return (
    <>
      <Banner />
      <CompanyLogo />
      <ByteSpaceCourses />
      <LearningPaths />
      <ProfessionalGrowth />
      <UnlockPotential />
    </>
  );
}
