import type { CourseType } from "@/types/courseType";
import courseImage from "../../../public/home/courses/course-image2.jpg";

const course: CourseType = {
    id: 2,
    slug: "the-power-of-big-data",

    title: "The Power of Big Data",

    subtitle:
      "Understand Data, Discover Patterns and Make Better Decisions",

    category: "Data Science",
    categoryId: "data-science",

    level: "Beginner",

    instructor: {
      name: "PurePearl Studio",
      designation: "Professional Creator",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },

    thumbnail: courseImage.src,

    previewVideo: "/videos/the-power-of-big-data.mp4",

    price: 25,
    priceType: "lifetime",

    rating: 4.5,
    reviewCount: 94,
    students: 143,

    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,

    isFeatured: true,

    studentLearning: [
      {
        id: 5,
        name: "Michael Lee",
        designation: "Product Manager",
        image: "/home/happy-student/michel.png",
      },
      {
        id: 6,
        name: "James Kim",
        designation: "DevOps Engineer",
        image: "/home/happy-student/james.png",
      },
      {
        id: 7,
        name: "Emma Brown",
        designation: "QA Analyst",
        image: "/home/happy-student/emma.png",
      },
      {
        id: 8,
        name: "Daniel Smith",
        designation: "Frontend Developer",
        image: "/home/happy-student/daniel.png",
      },
    ],

    description: `
Explore the fundamentals of Big Data and understand how large volumes of information can be collected, processed and analyzed.

This beginner-friendly course introduces learners to the concepts behind modern data-driven systems and explains how organizations use data to discover meaningful insights and make better decisions.

Through practical examples and easy-to-follow lessons, you will build a strong foundation in data analysis, visualization and modern Big Data concepts.

The course also introduces real-world applications of Big Data and helps learners understand how organizations use information to improve products, services and business decisions.
`,

    lessons: [
      {
        id: 1,
        number: "01",
        title: "Introduction to Big Data",
        duration: "10 mins",
      },
      {
        id: 2,
        number: "02",
        title: "Understanding Large Datasets",
        duration: "14 mins",
      },
      {
        id: 3,
        number: "03",
        title: "Data Processing and Analysis",
        duration: "18 mins",
      },
      {
        id: 4,
        number: "04",
        title: "Data Collection Techniques",
        duration: "12 mins",
      },
      {
        id: 5,
        number: "05",
        title: "Data Visualization Basics",
        duration: "15 mins",
      },
      {
        id: 6,
        number: "06",
        title: "Finding Patterns in Data",
        duration: "16 mins",
      },
      {
        id: 7,
        number: "07",
        title: "Real-World Big Data Applications",
        duration: "18 mins",
      },
      {
        id: 8,
        number: "08",
        title: "Data Analytics Fundamentals",
        duration: "14 mins",
      },
      {
        id: 9,
        number: "09",
        title: "Working with Data Visualization",
        duration: "13 mins",
      },
      {
        id: 10,
        number: "10",
        title: "Building a Data-Driven Project",
        duration: "16 mins",
      },
    ],

    remainingLessons: "7 more videos",

    keyPoints: [
      "Introduction to Big Data",
      "Understanding Large Datasets",
      "Data Collection and Processing",
      "Data Visualization",
      "Finding Patterns in Data",
      "Introduction to Data Analytics",
      "Real-World Data Applications",
      "Building a Data-Driven Mindset",
    ],

    sneakPeek: [
      "/images/courses/big-data/peek-1.jpg",
      "/images/courses/big-data/peek-2.jpg",
      "/images/courses/big-data/peek-3.jpg",
      "/images/courses/big-data/peek-4.jpg",
    ],

    includes: [
      "Learning Resources",
      "17 Practical Lessons",
      "Quality Lesson Videos",
      "Certificate of Completion",
      "Data Practice Materials",
    ],

    reviews: [
      {
        id: 1,

        student: {
          id: 5,
          name: "Michael Lee",
          designation: "Product Manager",
          image: "/home/happy-student/michel.png",
        },

        rating: 5,

        comment:
          "A very clear introduction to Big Data. The examples made the concepts easy to understand.",

        date: "1 week ago",
      },

      {
        id: 2,

        student: {
          id: 8,
          name: "Daniel Smith",
          designation: "Frontend Developer",
          image: "/home/happy-student/daniel.png",
        },

        rating: 4,

        comment:
          "Good beginner course with simple explanations and practical examples.",

        date: "3 weeks ago",
      },

      {
        id: 3,

        student: {
          id: 7,
          name: "Emma Brown",
          designation: "QA Analyst",
          image: "/home/happy-student/emma.png",
        },

        rating: 5,

        comment:
          "The data visualization section was really useful and easy to follow.",

        date: "2 months ago",
      },
    ],
  };

export default course;
