import courseImage from "../../../public/home/courses/course-image6.jpg";
import { createCourse } from "./courseFactory";

const course = createCourse({
  id: 6,
  slug: "creative-marketing-strategy",
  title: "Creative Marketing Strategy",
  subtitle: "Plan campaigns that connect with the right audience",
  category: "Creative Marketing",
  categoryId: "creative-marketing",
  level: "Intermediate",
  thumbnail: courseImage.src,
  previewVideo: "/videos/creative-marketing-strategy.mp4",
  price: 25,
  rating: 4.8,
  reviewCount: 51,
  students: 93,
  lessonsCount: 6,
  duration: "2 hours 5 mins",
  description:
    "Turn audience insight into a focused marketing plan. Learn to shape a clear message, choose useful channels, and measure campaign performance with practical creative exercises.",
  keyPoints: [
    "Understanding your audience",
    "Setting campaign goals",
    "Developing a clear message",
    "Choosing marketing channels",
    "Planning creative campaigns",
    "Measuring campaign results",
  ],
});

export default course;
