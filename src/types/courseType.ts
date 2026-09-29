export interface CourseStudent {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface CourseLesson {
  id: number;
  number: string;
  title: string;
  duration: string;
}

export interface CourseReview {
  id: number;
  student: CourseStudent;
  rating: number;
  comment: string;
  date: string;
}

export interface CourseInstructor {
  name: string;
  designation: string;
  image: string;
}

export interface CourseType {
  id: number;
  slug: string;

  title: string;
  subtitle: string;

  category: string;
  categoryId: string;

  level: "Beginner" | "Intermediate" | "Advanced";

  instructor: CourseInstructor;

  thumbnail: string;
  previewVideo: string;

  price: number;
  priceType: "lifetime";

  rating: number;
  reviewCount: number;
  students: number;

  lessonsCount: number;
  duration: string;
  commentsCount: number;

  isFeatured: boolean;

  studentLearning: CourseStudent[];

  description: string;

  lessons: CourseLesson[];

  remainingLessons: string;

  keyPoints: string[];

  sneakPeek: string[];

  includes: string[];

  reviews: CourseReview[];
}