import courseImage from "../../../public/home/courses/course-image4.jpg";
import { createCourse } from "./courseFactory";

const course = createCourse({
  id: 4,
  slug: "modern-web-development",
  title: "Modern Web Development",
  subtitle: "Build responsive websites with modern frontend tools",
  category: "Web Development",
  categoryId: "web-development",
  level: "Beginner",
  thumbnail: courseImage.src,
  previewVideo: "/videos/modern-web-development.mp4",
  price: 25,
  rating: 4.7,
  reviewCount: 72,
  students: 118,
  lessonsCount: 6,
  duration: "2 hours 10 mins",
  description:
    "Learn the foundations of modern web development, from semantic HTML and responsive CSS to interactive JavaScript. Build practical pages as you develop the skills to create polished experiences for the web.",
  keyPoints: [
    "How the web works",
    "Writing semantic HTML",
    "Responsive CSS layouts",
    "JavaScript fundamentals",
    "Building interactive pages",
    "Publishing a website",
  ],
});

export default course;
