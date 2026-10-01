import CommonWrapper from "@/components/shared/CommonWrapper";
import Image from "next/image";

interface LearningPath {
  name: string;
  icon: string;
}

const ICON_BASE_PATH = "/home/learning-paths";

const learningPaths: readonly LearningPath[] = [
  { name: "Design", icon: "design.svg" },
  { name: "Development", icon: "development.svg" },
  { name: "IT & Software", icon: "it.svg" },
  { name: "Business", icon: "business.svg" },
  { name: "Marketing", icon: "marketing.svg" },
  { name: "Photography", icon: "photography.svg" },
];

export default function LearningPaths() {
  return (
    <section className="pb-10 sm:pb-14 lg:pb-20">
      <CommonWrapper>
        <div className="mx-auto w-full text-center">
          <h2 className="mx-auto max-w-220 font-[Poppins] text-[24px] font-semibold leading-[1.2] tracking-[-0.36px] text-[#040819] min-[400px]:text-[26px] sm:text-[32px] md:text-[36px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-3 w-full max-w-230 font-[Satoshi] text-[14px] font-normal leading-[1.6] text-[#82868E] sm:mt-5 sm:text-[16px] md:text-[18px]">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <ul className="mt-8 grid w-full grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:mt-17 lg:grid-cols-6 lg:gap-6 xl:gap-10">
          {learningPaths.map((path) => (
            <li
              key={path.name}
              className="flex min-h-32 w-full min-w-0 flex-col items-center justify-center gap-2 rounded-3xl border border-[#CED0D3] px-3 py-5 text-center sm:min-h-40 sm:px-5 sm:py-8 lg:px-3 lg:py-7"
            >
              <span className="flex shrink-0 items-center justify-center rounded-full bg-[#D4FB20] p-3 sm:p-4">
                <Image
                  src={`${ICON_BASE_PATH}/${path.icon}`}
                  alt=""
                  aria-hidden="true"
                  width={36}
                  height={36}
                  className="h-7 w-7 object-contain sm:h-9 sm:w-9"
                />
              </span>
              <span className="wrap-break-word font-[Satoshi] text-[15px] font-medium leading-[1.2] text-[#242528] sm:text-[19px] lg:text-[17px] xl:text-[20px]">
                {path.name}
              </span>
            </li>
          ))}
        </ul>
      </CommonWrapper>
    </section>
  );
}