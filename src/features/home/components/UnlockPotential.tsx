import CommonWrapper from "@/components/shared/CommonWrapper";
import unlockImg from "../../../../public/home/unlock-potential.png";

export default function UnlockPotential() {
  return (
    <section
      aria-labelledby="creator-cta-title"
      className="relative flex min-h-[420px] w-full items-center justify-center bg-cover bg-center bg-no-repeat sm:min-h-[460px] lg:min-h-[488px]"
      style={{
        backgroundImage: `url(${unlockImg.src})`,
      }}
    >
      <CommonWrapper>
        <div className="flex flex-col items-center justify-center gap-6 px-4 py-12 text-center sm:gap-8 sm:px-6 sm:py-16 lg:gap-10 lg:py-20">
          <h2
            id="creator-cta-title"
            className="w-full max-w-[710px] font-[Poppins] text-[26px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#F5F5F6] min-[400px]:text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px]"
          >
            Unlock Your Potential as a Creator with ByteSpace
          </h2>

          <p className="w-full max-w-[964px] font-[Satoshi] text-sm font-normal leading-[1.6] text-[#F5F5F6] sm:text-base md:text-lg">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize
            our Course Editor, and showcase your expertise by publishing your
            finest course on the ByteSpace Course Library.
          </p>

          <button
            type="button"
            className="inline-flex w-full max-w-[280px] cursor-pointer items-center justify-center gap-2 rounded-3xl bg-[#D4FB20] px-6 py-3 font-[Satoshi] text-base font-medium leading-[1.2] text-[#242528] transition-colors hover:bg-[#c4eb12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto sm:max-w-none sm:text-lg"
          >
            Join as Creator
          </button>
        </div>
      </CommonWrapper>
    </section>
  );
}