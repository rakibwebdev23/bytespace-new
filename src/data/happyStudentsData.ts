import type { HappyStudentsType } from "@/types/happyStudentsType";
import alice from "../../public/home/happy-student/alice.png";
import michael from "../../public/home/happy-student/michel.png";
import sophia from "../../public/home/happy-student/shoipa.png";
import james from "../../public/home/happy-student/james.png";
import emma from "../../public/home/happy-student/emma.png";
import daniel from "../../public/home/happy-student/daniel.png";
import olivia from "../../public/home/happy-student/olivia.png";

export const happyStudentsData: HappyStudentsType[] = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Software Engineer",
    image: alice.src,
  },
  {
    id: 2,
    name: "Michael Lee",
    designation: "Product Manager",
    image: michael.src,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    designation: "UI/UX Designer",
    image: sophia.src,
  },
  {
    id: 4,
    name: "James Kim",
    designation: "DevOps Engineer",
    image: james.src,
  },
  {
    id: 5,
    name: "Emma Brown",
    designation: "QA Analyst",
    image: emma.src,
  },
  {
    id: 6,
    name: "Daniel Smith",
    designation: "Frontend Developer",
    image: daniel.src,
  },
  {
    id: 7,
    name: "Olivia Wilson",
    designation: "Product Designer",
    image: olivia.src,
  },
];
