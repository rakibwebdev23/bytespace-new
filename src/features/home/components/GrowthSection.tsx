import CourseCard from "@/components/shared/CourseCard";
import Image from "next/image";
import figmaCourse from "@/data/courses/course-1";
import professionalImage from "../../../../public/home/professional-growth/professional-image.png";
import maskImage from "../../../../public/home/professional-growth/mask.png";

type GrowthStat = {
  value: string,
  label: string;
};

const growthStats: GrowthStat[] = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default function GrowthSection() {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-10">
      <div className="order-2 w-full text-center lg:order-1 lg:min-w-0 lg:flex-1 lg:basis-0 lg:text-left">
        <h2 className="font-[Poppins] text-[24px] font-semibold leading-[1.2] tracking-[-0.36px] text-[#242528] min-[400px]:text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px]">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="mt-3 font-[Satoshi] text-[14px] font-normal leading-[1.6] text-[#4B4C53] sm:mt-5 sm:text-[16px] md:text-[18px]">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or
          embark on a new career path entirely, we have the resources you need.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-5 sm:mt-10 sm:gap-x-12 lg:justify-start">
          {growthStats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-[Poppins] text-[26px] font-medium leading-[1.35] tracking-[-0.36px] text-[#003BE2] sm:text-[32px] md:text-[36px]">
                {stat.value}
              </p>
              <p className="font-[Satoshi] text-[14px] font-normal leading-[1.6] text-[#4B4C53] sm:text-[16px] md:text-[18px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative order-1 h-[390px] w-full sm:aspect-[577/540] sm:h-auto lg:order-2 lg:min-w-0 lg:flex-1 lg:basis-0">
        <CourseCard
          course={figmaCourse}
          staticCard
          imageHeightClass="h-[180px]"
          className="absolute left-0 top-[25%] h-[270px] w-[72%] max-w-[370px] sm:top-0 sm:h-[384px] sm:w-full"
        />

        <Image
          src={professionalImage}
          alt="A student working on a laptop"
          width={570}
          height={520}
          priority
          className="absolute left-0 top-0 z-20 h-[340px] w-full object-cover sm:inset-auto sm:top-[2.5%] sm:h-[540px] sm:w-[577px]"
        />

        <div className="absolute bottom-0 right-0 top-auto z-30 flex w-full flex-col items-start gap-1.5 rounded-2xl bg-white p-3 sm:bottom-auto sm:left-[52%] sm:right-auto sm:top-[34%] sm:gap-2 sm:p-4 sm:w-auto lg:w-[46%]">
          <div className="relative flex w-full flex-col items-start gap-1 sm:gap-2">
            <Image
              src={maskImage}
              alt=""
              width={216}
              height={220}
              className="pointer-events-none absolute -right-[4%] -top-[75%] z-0 h-auto w-[38%] object-contain sm:-right-[8%] sm:-top-full sm:w-[60%]"
            />
            <h3 className="relative z-10 font-[Satoshi] text-sm font-medium leading-6 text-[#242528]">
              Learning Progress
            </h3>
            <p className="relative z-10 font-[Poppins] text-[36px] font-semibold leading-[1.1] tracking-[-0.48px] text-[#242528] sm:text-[48px] sm:leading-[1.2]">
              55%
            </p>
            <div
              className="relative z-10 h-1.5 w-full overflow-hidden rounded-full bg-[#F6F6F6] sm:h-2"
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
