import type { CourseType } from "@/types/courseType";

type CourseDetails = Pick<
  CourseType,
  | "id"
  | "slug"
  | "title"
  | "subtitle"
  | "category"
  | "categoryId"
  | "level"
  | "thumbnail"
  | "previewVideo"
  | "price"
  | "rating"
  | "reviewCount"
  | "students"
  | "lessonsCount"
  | "duration"
  | "description"
  | "keyPoints"
>;

export function createCourse(details: CourseDetails): CourseType {
  const lessonTitles = details.keyPoints.slice(0, details.lessonsCount);
  const lessons = lessonTitles.map((title, index) => ({
    id: index + 1,
    number: String(index + 1).padStart(2, "0"),
    title,
    duration: `${10 + (index % 6) * 2} mins`,
  }));

  return {
    ...details,
    instructor: {
      name: "PurePearl Studio",
      designation: "Professional Creator",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    priceType: "lifetime",
    commentsCount: 24,
    isFeatured: false,
    studentLearning: [
      {
        id: 1,
        name: "Alice Johnson",
        designation: "Software Engineer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: 2,
        name: "Sophia Martinez",
        designation: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
      },
      {
        id: 3,
        name: "Olivia Wilson",
        designation: "Product Designer",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
      },
      {
        id: 4,
        name: "Daniel Smith",
        designation: "Frontend Developer",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    ],
    lessons,
    remainingLessons: `${Math.max(details.lessonsCount - lessons.length, 0)} more videos`,
    sneakPeek: [],
    includes: [
      `${details.lessonsCount} on-demand lessons`,
      "Downloadable course resources",
      "Lifetime access",
      "Certificate of completion",
    ],
    reviews: [],
  };
}
