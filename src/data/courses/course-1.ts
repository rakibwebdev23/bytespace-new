import type { CourseType } from "@/types/courseType";
import courseImage from "../../../public/home/courses/course-image1.jpg";

const course: CourseType = {
    id: 1,
    slug: "learn-figma-from-basic",

    title: "Learn Figma from Basic",

    subtitle:
      "Master Figma from the Ground Up and Start Creating Professional Designs",

    category: "UI/UX Design",
    categoryId: "ui-ux-design",

    level: "Beginner",

    instructor: {
      name: "PurePearl Studio",
      designation: "Professional Creator",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },

    thumbnail: courseImage.src,

    previewVideo: "/videos/learn-figma-from-basic.mp4",

    price: 25,
    priceType: "lifetime",

    rating: 4.5,
    reviewCount: 86,
    students: 126,

    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,

    isFeatured: true,

    studentLearning: [
      {
        id: 1,
        name: "Alice Johnson",
        designation: "Software Engineer",
        image: "/home/happy-student/alice.png",
      },
      {
        id: 2,
        name: "Sophia Martinez",
        designation: "UI/UX Designer",
        image: "/home/happy-student/shoipa.png",
      },
      {
        id: 3,
        name: "Olivia Wilson",
        designation: "Product Designer",
        image: "/home/happy-student/olivia.png",
      },
      {
        id: 4,
        name: "Daniel Smith",
        designation: "Frontend Developer",
        image: "/home/happy-student/daniel.png",
      },
    ],

    description: `
Start your design journey with Figma through this beginner-friendly course. Learn the essential tools, interface, design principles, components, layouts and prototyping techniques required to create modern digital interfaces.

This course is carefully designed for beginners who want to understand Figma step by step and gain practical experience by creating real design projects.

Throughout the course, you will learn how professional designers organize their files, create reusable components, build responsive layouts and turn ideas into interactive prototypes.

Whether you are completely new to UI/UX design or looking to improve your existing design workflow, this course provides a practical foundation for working confidently with Figma.
`,

    lessons: [
      {
        id: 1,
        number: "01",
        title: "Introduction to Figma",
        duration: "8 mins",
      },
      {
        id: 2,
        number: "02",
        title: "Understanding the Figma Interface",
        duration: "11 mins",
      },
      {
        id: 3,
        number: "03",
        title: "Frames, Shapes and Basic Tools",
        duration: "15 mins",
      },
      {
        id: 4,
        number: "04",
        title: "Typography and Colors",
        duration: "13 mins",
      },
      {
        id: 5,
        number: "05",
        title: "Working with Components",
        duration: "17 mins",
      },
      {
        id: 6,
        number: "06",
        title: "Auto Layout",
        duration: "18 mins",
      },
      {
        id: 7,
        number: "07",
        title: "Creating Interactive Prototypes",
        duration: "20 mins",
      },
      {
        id: 8,
        number: "08",
        title: "Designing a Complete Landing Page",
        duration: "14 mins",
      },
      {
        id: 9,
        number: "09",
        title: "Responsive Design in Figma",
        duration: "16 mins",
      },
      {
        id: 10,
        number: "10",
        title: "Final Design Project",
        duration: "19 mins",
      },
    ],

    remainingLessons: "7 more videos",

    keyPoints: [
      "Introduction to Figma",
      "Understanding the Figma Interface",
      "Frames and Layouts",
      "Shapes and Design Tools",
      "Typography and Colors",
      "Components and Variants",
      "Auto Layout",
      "Creating Interactive Prototypes",
    ],

    sneakPeek: [
      "/images/courses/figma/peek-1.jpg",
      "/images/courses/figma/peek-2.jpg",
      "/images/courses/figma/peek-3.jpg",
      "/images/courses/figma/peek-4.jpg",
    ],

    includes: [
      "Learning Resources",
      "17 Practical Lessons",
      "Quality Lesson Videos",
      "Certificate of Completion",
      "Design Practice Files",
    ],

    reviews: [
      {
        id: 1,

        student: {
          id: 1,
          name: "Alice Johnson",
          designation: "Software Engineer",
          image: "/home/happy-student/alice.png",
        },

        rating: 5,

        comment:
          "Very easy to follow. The instructor explains every Figma tool clearly and practically.",

        date: "2 weeks ago",
      },

      {
        id: 2,

        student: {
          id: 2,
          name: "Sophia Martinez",
          designation: "UI/UX Designer",
          image: "/home/happy-student/shoipa.png",
        },

        rating: 5,

        comment:
          "A great course for anyone starting UI/UX design with Figma. The practical examples were very helpful.",

        date: "1 month ago",
      },

      {
        id: 3,

        student: {
          id: 3,
          name: "Olivia Wilson",
          designation: "Product Designer",
          image: "/home/happy-student/olivia.png",
        },

        rating: 4,

        comment:
          "The Auto Layout and component lessons were especially useful. I learned several techniques that I can use in real projects.",

        date: "2 months ago",
      },
    ],
  };

export default course;
