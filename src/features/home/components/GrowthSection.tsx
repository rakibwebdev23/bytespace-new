import CourseCard from "@/components/shared/CourseCard";
import Image from "next/image";
import figmaCourse from "@/data/courses/course-1";
import professionalImage from "../../../../public/home/professional-growth/professional-image.png";
import maskImage from "../../../../public/home/professional-growth/mask.png";

const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default function GrowthSection() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:gap-10">
      <div className="w-full lg:min-w-0 lg:flex-1 lg:basis-0">
        <h2 className="font-[Poppins] text-[32px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#242528] sm:text-[38px] lg:text-[44px]">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="mt-6 font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#4B4C53] sm:mt-10 sm:text-[18px]">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or
          embark on a new career path entirely, we have the resources you need.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6 sm:mt-10 sm:gap-x-12">
          {growthStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-[Poppins] text-[30px] font-medium leading-11 tracking-[-0.36px] text-[#003BE2] sm:text-[36px]">
                {stat.value}
              </p>
              <p className="font-[Satoshi] text-[16px] font-normal leading-[1.6] text-[#4B4C53] sm:text-[18px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-[620px] w-full sm:aspect-[577/540] sm:min-h-0 lg:min-w-0 lg:flex-1 lg:basis-0">
        <CourseCard
          course={figmaCourse}
          staticCard
          imageHeightClass="h-[180px]"
          className="absolute left-0 top-[25%] h-[384px] w-full max-w-[370px] sm:top-0"
        />

        <Image
          src={professionalImage}
          alt="A student working on a laptop"
          width={570}
          height={520}
          priority
          className="absolute inset-0 z-20 h-full w-full object-cover sm:inset-auto sm:top-[2.5%] sm:h-[540px] sm:w-[577px]"
        />

        <div className="absolute right-0 top-[4%] z-30 flex w-[62%] flex-col items-start gap-2 rounded-2xl bg-white p-4 sm:left-[52%] sm:right-auto sm:top-[34%] sm:w-auto lg:w-[46%]">
          <div className="relative flex w-full flex-col items-start gap-2">
            <Image
              src={maskImage}
              alt=""
              width={216}
              height={220}
              className="pointer-events-none absolute -right-[8%] -top-full z-0 h-auto w-[60%] object-contain"
            />
            <h3 className="relative z-10 font-[Satoshi] text-sm font-medium leading-6 text-[#242528]">
              Learning Progress
            </h3>
            <p className="relative z-10 font-[Poppins] text-[48px] font-semibold leading-[1.2] tracking-[-0.48px] text-[#242528]">
              55%
            </p>
            <div
              className="relative z-10 h-2 w-full overflow-hidden rounded-full bg-[#F6F6F6]"
              role="progressbar"
              aria-label="Learning progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={55}
            >
              <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
