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
    <section className="py-10 sm:py-16 lg:py-18">
      <CommonWrapper>
        <div className="mx-auto w-full text-center">
          <h2 className="mx-auto w-full max-w-147 font-[Poppins] text-[28px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#040819] sm:text-[34px] md:text-[38px] lg:text-[44px]">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="mx-auto mt-3 w-full max-w-230 font-[Satoshi] text-[15px] font-normal leading-[1.6] text-[#82868E] sm:mt-4 sm:text-[16px] md:text-[18px]">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter courses by category"
          className="mt-8 space-y-3 sm:mt-11 sm:space-y-4 lg:space-y-5"
        >
          {categoryRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4"
            >
              {row.map((category) => {
                const isActive = activeCategory === category.slug;

                return (
                  <button
                    key={category.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category.slug)}
                    className={`cursor-pointer rounded-3xl px-3 py-2 text-center text-sm font-medium leading-[1.2] transition-colors sm:px-4 sm:py-3 sm:text-base ${
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
                  className="cursor-pointer rounded-3xl px-3 py-2 text-center text-sm font-medium leading-[1.2] text-[#003BE2] sm:px-4 sm:py-3 sm:text-base"
                >
                  +More
                </button>
              )}
            </div>
          ))}
        </div>
      </CommonWrapper>

      <CommonWrapper>
        {visibleCourses.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 justify-items-center gap-5 sm:mt-18 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-center text-base text-[#82868E] sm:mt-18">
            No courses in this category yet.
          </p>
        )}
      </CommonWrapper>
    </section>
  );
}
