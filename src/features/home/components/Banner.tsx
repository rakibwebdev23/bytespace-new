"use client";

import { Search, Star } from "lucide-react";

import { happyStudentsData } from "@/data/happyStudentsData";
import bannerBg from "../../../../public/home/banner-bg.png";
import AnimatedTooltip from "./AnimatedTooltip";

export default function Banner() {
  return (
    <section
      aria-labelledby="home-banner-title"
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:h-200 md:py-0 lg:h-256"
      style={{
        backgroundImage: `url(${bannerBg.src})`,
      }}
    >
      <div className="mx-auto flex w-full flex-col items-center px-4 text-center text-white sm:px-6 md:h-full md:justify-start md:pt-32 lg:pt-36">
        <h1
          id="home-banner-title"
          data-scroll-item
          className="max-w-5xl text-4xl font-semibold leading-[1.2] tracking-[-0.72px] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Get Access to Hundreds Courses Available
        </h1>

        <p data-scroll-item className="mt-5 w-full max-w-2xl text-base leading-[1.6] text-[#E5E6E8] sm:mt-8 sm:text-lg lg:max-w-none">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          data-scroll-item
          role="search"
          action="/"
          method="get"
          className="mt-10 flex h-13 w-full max-w-146.25 items-center gap-3 sm:mt-15 sm:gap-4"
        >
          <div className="flex h-full min-w-0 max-w-115.25 flex-1 items-center gap-2 rounded-3xl bg-white px-4 py-3 sm:px-6">
            <Search
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-[#82868E] sm:h-6 sm:w-6"
              strokeWidth={1.8}
            />

            <input
              type="search"
              name="q"
              placeholder="Course, topic, creator"
              aria-label="Search courses, topics, or creators"
              className="min-w-0 flex-1 bg-transparent text-base font-normal leading-[1.6] text-[#242528] outline-none placeholder:text-[#82868E] sm:text-lg"
            />
          </div>

          <button
            type="submit"
            className="h-full min-w-22 shrink-0 cursor-pointer rounded-3xl bg-[#D4FB20] px-4 text-base font-medium leading-[1.2] text-[#242528] transition-colors hover:bg-[#c4eb12] sm:min-w-30 sm:px-6 sm:text-lg"
          >
            Search
          </button>
        </form>

        {/* Cards: full width stack (same width as search form) below md, absolute from md up */}
        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:mt-12 md:contents">
          {/* ui/ux card */}
          <div data-banner-card className="flex w-full max-w-146.25 flex-col items-start justify-center gap-2 rounded-2xl bg-white p-4 text-left backdrop-blur-[10px] md:absolute md:bottom-48 md:left-10 md:w-auto md:max-w-none lg:bottom-76 lg:left-[30%]">
            <h2 className="text-base font-medium leading-[1.2] text-[#242528]">
              UI/UX Design
            </h2>

            <p className="text-xs font-normal leading-[1.6] text-[#82868E]">
              200 Courses · 1000+ Students
            </p>
          </div>

          {/* learning progress card */}
          <div data-banner-card className="flex w-full max-w-146.25 flex-col items-start gap-2 rounded-2xl bg-white p-4 text-left backdrop-blur-[10px] md:absolute md:bottom-10 md:right-10 md:w-60 md:max-w-none lg:bottom-56 lg:right-[25%]">
            <h2 className="text-sm font-medium leading-[1.2] text-[#242528]">
              Learning Progress
            </h2>

            <p className="text-4xl font-semibold leading-[1.2] tracking-[-0.48px] text-[#242528] sm:text-5xl">
              55%
            </p>

            <div
              className="h-2 w-full overflow-hidden rounded-full bg-[#F6F6F6]"
              role="progressbar"
              aria-label="Learning progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={55}
            >
              <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
            </div>
          </div>

          {/* happy students card */}
          <div data-banner-card className="z-10 w-full max-w-146.25 rounded-3xl bg-white p-4 text-left md:absolute md:bottom-10 md:left-10 md:w-auto md:max-w-none lg:bottom-14 lg:left-[23%]">
            <h2 className="text-[16px] font-medium leading-[1.2] text-[#242528]">
              Happy Students
            </h2>

            <div className="mt-1 flex items-center gap-0.75">
              <span className="text-[12px] font-normal leading-[1.6] text-[#82868E]">
                4.5 (240)
              </span>

              <span className="flex h-4 items-center">
                <Star
                  aria-hidden="true"
                  size={16}
                  className="fill-[#D4FB20] text-[#D4FB20]"
                />
              </span>
            </div>

            <div className="mt-2 max-w-full overflow-visible">
              <AnimatedTooltip items={happyStudentsData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







// "use client";

// import { Search, Star } from "lucide-react";

// import { happyStudentsData } from "@/data/happyStudentsData";
// import bannerBg from "../../../../public/home/banner-bg.png";
// import AnimatedTooltip from "./AnimatedTooltip";

// export default function Banner() {
//   return (
//     <section
//       aria-labelledby="home-banner-title"
//       className="relative h-140 w-full bg-cover bg-center bg-no-repeat sm:h-170 md:h-200 lg:h-256"
//       style={{
//         backgroundImage: `url(${bannerBg.src})`,
//       }}
//     >
//       <div className="mx-auto flex h-full w-full flex-col items-center justify-center px-4 pb-8 text-center text-white sm:px-6 md:justify-start md:pb-0 md:pt-32 lg:pt-36">
//         <h1
//           id="home-banner-title"
//           className="max-w-5xl text-4xl font-semibold leading-[1.2] tracking-[-0.72px] sm:text-5xl lg:text-7xl"
//         >
//           Get Access to Hundreds Courses Available
//         </h1>

//         <p className="mt-5 w-full max-w-2xl text-base leading-[1.6] text-[#E5E6E8] sm:mt-8 sm:text-lg lg:max-w-none">
//           Unlock your creativity, gain valuable knowledge, and grow your
//           business with our wide range of courses.
//         </p>

//         <form
//           role="search"
//           action="/"
//           method="get"
//           className="mt-10 flex h-13 w-full max-w-146.25 items-center gap-4 sm:mt-15"
//         >
//           <div className="flex h-full min-w-0 max-w-115.25 flex-1 items-center gap-2 rounded-3xl bg-white px-4 py-3 sm:px-6">
//             <Search
//               aria-hidden="true"
//               className="h-6 w-6 shrink-0 text-[#82868E]"
//               strokeWidth={1.8}
//             />

//             <input
//               type="search"
//               name="q"
//               placeholder="Course, topic, creator"
//               aria-label="Search courses, topics, or creators"
//               className="min-w-0 flex-1 bg-transparent text-base font-normal leading-[1.6] text-[#242528] outline-none placeholder:text-[#82868E] sm:text-lg"
//             />
//           </div>

//           <button
//             type="submit"
//             className="h-full min-w-24 shrink-0 cursor-pointer rounded-3xl bg-[#D4FB20] px-4 text-base font-medium leading-[1.2] text-[#242528] transition-colors hover:bg-[#c4eb12] sm:min-w-30 sm:px-6 sm:text-lg"
//           >
//             Search
//           </button>
//         </form>
//       </div>

//       {/* ui/ux card  */}
//       <div className="absolute bottom-44 left-4 hidden flex-col items-start justify-center gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px] sm:bottom-12 sm:left-6 md:bottom-16 md:left-10 md:flex lg:bottom-76 lg:left-[30%]">
//         <h2 className="text-base font-medium leading-[1.2] text-[#242528]">
//           UI/UX Design
//         </h2>

//         <p className="text-xs font-normal leading-[1.6] text-[#82868E]">
//           200 Courses · 1000+ Students
//         </p>
//       </div>

//       {/* learning progress card */}
//       <div className="absolute bottom-4 right-4 hidden w-[min(15rem,calc(100vw-2rem))] flex-col items-start gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px] sm:bottom-12 sm:right-6 sm:w-60 md:bottom-16 md:right-[8%] md:flex lg:bottom-56 lg:right-[25%]">
//         <h2 className="text-sm font-medium leading-[1.2] text-[#242528]">
//           Learning Progress
//         </h2>

//         <p className="text-4xl font-semibold leading-[1.2] tracking-[-0.48px] text-[#242528] sm:text-5xl">
//           55%
//         </p>

//         <div
//           className="h-2 w-full overflow-hidden rounded-full bg-[#F6F6F6]"
//           role="progressbar"
//           aria-label="Learning progress"
//           aria-valuemin={0}
//           aria-valuemax={100}
//           aria-valuenow={55}
//         >
//           <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
//         </div>
//       </div>

//       {/* happy students card */}
//       <div
//   className="absolute bottom-44 left-4 z-10 hidden w-[min(17rem,calc(100vw-2rem))] rounded-3xl bg-white p-4 text-left sm:bottom-12 sm:left-6 sm:w-auto md:bottom-16 md:left-10 md:block
//   lg:bottom-14 lg:left-[23%]"
//   >
//   <h2 className="text-[16px] font-medium leading-[1.2] text-[#242528]">
//     Happy Students
//   </h2>

//   <div className="mt-1 flex items-center gap-0.75">
//     <span className="text-[12px] font-normal leading-[1.6] text-[#82868E]">
//       4.5 (240)
//     </span>

//     <span className="flex h-4 items-center">
//       <Star aria-hidden="true" size={16} className="fill-[#D4FB20] text-[#D4FB20]" />
//     </span>
//   </div>

//   <div className="mt-2 max-w-full overflow-visible">
//     <AnimatedTooltip items={happyStudentsData} />
//   </div>
// </div>
//     </section>
//   );
// }
