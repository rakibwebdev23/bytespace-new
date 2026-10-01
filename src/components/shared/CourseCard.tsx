import { Signal, Star } from "lucide-react";
import Link from "next/link";
import type { CourseType } from "@/types/courseType";
import Image from "next/image";

interface CourseCardProps {
  course: CourseType;
  staticCard?: boolean;
  imageHeightClass?: string;
  className?: string;
}

const CourseCard = ({
  course,
  staticCard = false,
  imageHeightClass = "h-[180px] sm:h-[200px]",
  className: cardClassName = "",
}: CourseCardProps) => {
  const className = `${staticCard ? "" : "group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"} ${cardClassName ? "" : "w-full max-w-full"} block overflow-hidden rounded-3xl border border-[#CED0D3] bg-white ${cardClassName}`;

  const pillClass =
    "flex min-w-0 shrink items-center justify-center truncate whitespace-nowrap rounded-3xl bg-[rgba(246,246,246,0.60)] px-2 py-1 text-[9px] font-medium text-[#242528] backdrop-blur-[4px] min-[400px]:text-[10px] sm:px-3 sm:py-1.5 sm:text-[11px]";

  const cardContent = (
    <>
      <div
        className={`relative m-3 mb-0 sm:m-4 sm:mb-0 ${imageHeightClass} overflow-hidden rounded-xl`}
      >
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 373px"
          className={`object-cover ${staticCard ? "" : "transition-transform duration-300 group-hover:scale-[1.03]"}`}
        />

        {/* image information */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 sm:bottom-3 sm:left-3 sm:right-3 sm:gap-2">
          <span className={pillClass}>{course.lessonsCount} Lessons</span>
          <span className={pillClass}>{course.duration}</span>
          <span className={pillClass}>{course.commentsCount} Comments</span>
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col gap-3 px-3 pb-4 pt-3 sm:gap-4 sm:px-4 sm:pb-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 line-clamp-1 font-[Poppins] text-lg font-semibold leading-[1.2] tracking-[-0.2px] text-black sm:text-xl">
            {course.title}
          </h3>

          <div className="flex shrink-0 items-center gap-1 text-sm text-[#4F4F4F]">
            <span>{course.rating}</span>

            <Star size={17} className="fill-[#D4FB20] text-[#D4FB20]" />
          </div>
        </div>

        <p className="font-[Satoshi] text-xs font-normal leading-[1.6] text-[#4F4F4F]">
          by <span className="text-[#003BE2]">PurePearl Studio</span>
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center justify-center gap-1 rounded-3xl bg-[#F5F5F6] px-3 py-1.5">
            <Signal
              aria-hidden="true"
              className="h-5 w-5 text-[#4B4C53]"
              strokeWidth={1.8}
            />
            <span className="text-center font-[Satoshi] text-xs font-medium leading-[1.2] text-[#4B4C53]">
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
            <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] font-[Satoshi] text-xs font-medium leading-5 text-[#242528]">
              26+
            </div>
          </div>
        </div>

        <div className="flex items-end gap-1">
          <span className="font-[Poppins] text-lg font-semibold leading-[1.2] tracking-[-0.2px] text-[#003BE2] sm:text-xl">
            ${course.price}
          </span>

          <span className="mb-[1px] font-[Satoshi] text-xs font-normal leading-[1.6] text-[#4F4F4F]">
            /lifetime
          </span>
        </div>
      </div>
    </>
  );

  return staticCard ? (
    <div className={className}>{cardContent}</div>
  ) : (
    <Link href={`/courses/${course.slug}`} className={className}>
      {cardContent}
    </Link>
  );
};

export default CourseCard;
