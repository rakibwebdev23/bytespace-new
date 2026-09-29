import type { CourseType } from "@/types/courseType";
import courseImage1 from "../../public/home/courses/course-image1.jpg";
import courseImage2 from "../../public/home/courses/course-image2.jpg";
import courseImage3 from "../../public/home/courses/course-image3.jpg"; 

export const coursesData: CourseType[] = [
  {
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

    thumbnail: courseImage1.src,

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
          image: "https://randomuser.me/api/portraits/women/44.jpg",
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
          image: "https://randomuser.me/api/portraits/women/65.jpg",
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
          image: "https://randomuser.me/api/portraits/women/33.jpg",
        },

        rating: 4,

        comment:
          "The Auto Layout and component lessons were especially useful. I learned several techniques that I can use in real projects.",

        date: "2 months ago",
      },
    ],
  },

  // ============================================================
  // COURSE 2
  // ============================================================

  {
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

    thumbnail: courseImage2.src,

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
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 6,
        name: "James Kim",
        designation: "DevOps Engineer",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
      },
      {
        id: 7,
        name: "Emma Brown",
        designation: "QA Analyst",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        id: 8,
        name: "Daniel Smith",
        designation: "Frontend Developer",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
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
          image: "https://randomuser.me/api/portraits/men/32.jpg",
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
          image: "https://randomuser.me/api/portraits/men/45.jpg",
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
          image: "https://randomuser.me/api/portraits/women/12.jpg",
        },

        rating: 5,

        comment:
          "The data visualization section was really useful and easy to follow.",

        date: "2 months ago",
      },
    ],
  },

  // ============================================================
  // COURSE 3
  // ============================================================

  {
    id: 3,
    slug: "build-digital-asset",

    title: "Build Digital Asset: A Comprehensive Guide",

    subtitle:
      "Unlock the Power of Digital Creation with Expert Guidance",

    category: "Digital Illustration",
    categoryId: "digital-illustration",

    level: "Intermediate",

    instructor: {
      name: "PurePearl Studio",
      designation: "Professional Creator",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },

    thumbnail: courseImage3.src,

    previewVideo: "/videos/build-digital-asset.mp4",

    price: 25,
    priceType: "lifetime",

    rating: 4.8,
    reviewCount: 172,
    students: 199,

    lessonsCount: 112,
    duration: "24 hours",
    commentsCount: 172,

    isFeatured: true,

    studentLearning: [
      {
        id: 1,
        name: "Alice Johnson",
        designation: "Software Engineer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: 4,
        name: "James Kim",
        designation: "DevOps Engineer",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
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
    ],

    description: `
Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Asset: A Comprehensive Guide."

This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content.

From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.

In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation.

As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations.

Uncover the secrets behind effective visual communication, exploring color theory, typography and layout strategies that elevate your digital assets to new heights.
`,

    lessons: [
      {
        id: 1,
        number: "01",
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      {
        id: 2,
        number: "02",
        title: "Design Principles for Digital Impacts",
        duration: "21 mins",
      },
      {
        id: 3,
        number: "03",
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
      {
        id: 4,
        number: "04",
        title: "Digital Asset Planning",
        duration: "18 mins",
      },
      {
        id: 5,
        number: "05",
        title: "Visual Communication",
        duration: "20 mins",
      },
      {
        id: 6,
        number: "06",
        title: "Color Theory and Typography",
        duration: "19 mins",
      },
      {
        id: 7,
        number: "07",
        title: "Professional Asset Creation",
        duration: "24 mins",
      },
      {
        id: 8,
        number: "08",
        title: "Optimizing Digital Assets",
        duration: "22 mins",
      },
      {
        id: 9,
        number: "09",
        title: "Project Showcase and Critique",
        duration: "25 mins",
      },
      {
        id: 10,
        number: "10",
        title: "Building Your Digital Portfolio",
        duration: "28 mins",
      },
    ],

    remainingLessons: "102 more videos",

    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],

    sneakPeek: [
      "/images/courses/digital-asset/peek-1.jpg",
      "/images/courses/digital-asset/peek-2.jpg",
      "/images/courses/digital-asset/peek-3.jpg",
      "/images/courses/digital-asset/peek-4.jpg",
    ],

    includes: [
      "Learning Resources",
      "Quality Lesson Videos",
      "Certificate of Completion",
      "Private Consultation",
      "Project Resources",
    ],

    reviews: [
      {
        id: 1,

        student: {
          id: 1,
          name: "Alice Johnson",
          designation: "Software Engineer",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
        },

        rating: 5,

        comment:
          "The course gives a very practical understanding of digital asset creation and professional design workflows.",

        date: "1 week ago",
      },

      {
        id: 2,

        student: {
          id: 4,
          name: "James Kim",
          designation: "DevOps Engineer",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
        },

        rating: 5,

        comment:
          "The advanced techniques were explained clearly and the project lessons were very useful.",

        date: "3 weeks ago",
      },

      {
        id: 3,

        student: {
          id: 2,
          name: "Sophia Martinez",
          designation: "UI/UX Designer",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
        },

        rating: 5,

        comment:
          "I really enjoyed the project-based approach. The design principles and practical examples were excellent.",

        date: "1 month ago",
      },
    ],
  },
  
];
