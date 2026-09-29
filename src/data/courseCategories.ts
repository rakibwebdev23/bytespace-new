export interface CourseCategory {
  id: number;
  slug: string;
  name: string;
}

export const courseCategories: CourseCategory[] = [
  { id: 1, slug: "all", name: "Feature" },
  { id: 2, slug: "music", name: "Music" },
  { id: 3, slug: "drawing-painting", name: "Drawing & Painting" },
  { id: 4, slug: "marketing", name: "Marketing" },
  { id: 5, slug: "animation", name: "Animation" },
  { id: 6, slug: "social-media", name: "Social Media" },
  { id: 7, slug: "ui-ux-design", name: "UI/UX Design" },
  { id: 8, slug: "creative-marketing", name: "Creative Marketing" },
  { id: 9, slug: "digital-illustration", name: "Digital Illustration" },
  { id: 10, slug: "film-video", name: "Film & Video" },
  { id: 11, slug: "crafts", name: "Crafts" },
  {
    id: 12,
    slug: "freelance-entrepreneurship",
    name: "Freelance & Entrepreneurship",
  },
  { id: 13, slug: "graphic-design", name: "Graphic Design" },
  { id: 14, slug: "photography", name: "Photography" },
  { id: 15, slug: "productivity", name: "Productivity" },
  { id: 16, slug: "web-development", name: "Web Development" },
  { id: 17, slug: "data-science", name: "Data Science" },
  { id: 18, slug: "cooking", name: "Cooking" },
];
