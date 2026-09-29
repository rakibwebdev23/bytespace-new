"use client";

import { useState } from "react";
import CommonWrapper from "@/components/shared/CommonWrapper";
import CourseCard from "@/components/shared/CourseCard";
import { courseCategories } from "@/data/courseCategories";
import { coursesData } from "@/data/courseData";

export default function ByteSpaceCourses() {
  const [activeCategory, setActiveCategory] = useState("all");
  const visibleCourses =
    activeCategory === "all"
      ? coursesData
      : coursesData.filter((course) => course.categoryId === activeCategory);
  const categoryRows = [
    courseCategories.slice(0, 8),
    courseCategories.slice(8, 14),
    courseCategories.slice(14, 18),
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <CommonWrapper>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-[Poppins] text-[32px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#040819] sm:text-[38px] lg:text-[44px]">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[16px] font-normal leading-[1.6] text-[#82868E] sm:text-[18px]">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div aria-label="Filter courses by category" className="mt-10 space-y-3 sm:mt-12">
          {categoryRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-3"
            >
              {row.map((category) => {
                const isActive = activeCategory === category.slug;

                return (
                  <button
                    key={category.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category.slug)}
                    className={`cursor-pointer rounded-3xl px-4 py-3 text-center text-base font-medium leading-[1.2] transition-colors ${
                      isActive
                        ? "bg-[#D4FB20] text-[#242528]"
                        : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E9E9EB]"
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}
              {rowIndex === 2 && (
                <button
                  type="button"
                  onClick={() => setActiveCategory("all")}
                  className="cursor-pointer rounded-3xl px-4 py-3 text-center text-base font-medium leading-[1.2] text-[#003BE2]"
                >
                  +More
                </button>
              )}
            </div>
          ))}
        </div>

        {visibleCourses.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-base text-[#82868E]">
            No courses in this category yet.
          </p>
        )}
      </CommonWrapper>
    </section>
  );
}
