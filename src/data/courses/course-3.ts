import type { CourseType } from "@/types/courseType";
import courseImage from "../../../public/home/courses/course-image3.jpg";

const course: CourseType = {
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

    thumbnail: courseImage.src,

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
  };

export default course;
