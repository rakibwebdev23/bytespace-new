import courseImage from "../../../public/home/courses/course-image5.jpg";
import { createCourse } from "./courseFactory";

const course = createCourse({
  id: 5,
  slug: "photography-fundamentals",
  title: "Photography Fundamentals",
  subtitle: "Capture confident, compelling photos in any setting",
  category: "Photography",
  categoryId: "photography",
  level: "Beginner",
  thumbnail: courseImage.src,
  previewVideo: "/videos/photography-fundamentals.mp4",
  price: 25,
  rating: 4.6,
  reviewCount: 64,
  students: 105,
  lessonsCount: 6,
  duration: "1 hour 55 mins",
  description:
    "Explore exposure, composition, focus, and natural light. This practical introduction helps you understand your camera and make thoughtful photographs with equipment you already have.",
  keyPoints: [
    "Camera settings explained",
    "Exposure and the exposure triangle",
    "Composition basics",
    "Working with natural light",
    "Focus and sharpness",
    "Editing and exporting photos",
  ],
});

export default course;
