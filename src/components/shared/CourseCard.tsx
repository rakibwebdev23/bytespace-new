import { Star } from "lucide-react";
import Link from "next/link";
import type { CourseType } from "@/types/courseType";
import Image from "next/image";

interface CourseCardProps {
  course: CourseType;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block w-full max-w-[373px] overflow-hidden rounded-[22px] border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative m-4 mb-0 h-[195px] overflow-hidden rounded-[14px]">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 373px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        {/* image information */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-black/30 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
            {course.lessonsCount} Lessons
          </span>

          <span className="rounded-full bg-black/30 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
            {course.duration}
          </span>

          <span className="rounded-full bg-black/30 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
            {course.commentsCount} Comments
          </span>
        </div>
      </div>

      {/* content */}
      <div className="px-4 pb-5 pt-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 text-[17px] font-semibold leading-6 text-[#111111]">
            {course.title}
          </h3>

          <div className="flex shrink-0 items-center gap-1 text-sm text-gray-500">
            <span>{course.rating}</span>

            <Star
              size={17}
              className="fill-gray-300 text-gray-300"
            />
          </div>
        </div>

        <p className="mt-0.5 text-[11px] text-gray-500">
          by{" "}
          <span className="text-[#1857e8]">
            {course.instructor.name.toLowerCase()}
          </span>
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2">
            <span className="text-[12px] text-gray-500">
              📊
            </span>

            <span className="text-[11px] font-medium text-gray-600">
              {course.level}
            </span>
          </div>

          <div className="flex items-center">
            {course.studentLearning.slice(0, 4).map((student, index) => (
              <Image
                key={student.id}
                src={student.image}
                alt={student.name}
                width={32}
                height={32}
                unoptimized
                title={student.name}
                className={`h-8 w-8 rounded-full border-2 border-white object-cover ${
                  index !== 0 ? "-ml-2" : ""
                }`}
              />
            ))}

            <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#c7ff00] text-[10px] font-semibold text-black">
              26+
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-end gap-1">
          <span className="text-[17px] font-bold text-[#0057ff]">
            ${course.price}
          </span>

          <span className="mb-[1px] text-[10px] text-gray-500">
            /lifetime
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
