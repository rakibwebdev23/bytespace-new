import Image from "next/image";
import CommonWrapper from "@/components/shared/CommonWrapper";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/home/testmonial/sarah.svg",
    review:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/home/testmonial/james.svg",
    review:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/home/testmonial/alex.svg",
    review:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testmonial() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative isolate overflow-hidden bg-[#FAFAFA]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 z-0 h-[672px] w-[672px] -translate-x-1/2 -translate-y-1/2 rounded-[672px] blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.60) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.04) 75%, rgba(203, 252, 1, 0.00) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[35%] top-1/2 z-0 h-[1137px] w-[1137px] -translate-y-1/2 rounded-[1137px] blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.40) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, rgba(203, 252, 1, 0.00) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[45%] -left-[35%] z-0 h-[1137px] w-[1137px] rounded-[1137px] blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0.00) 100%)",
        }}
      />
      <CommonWrapper className="relative z-10 py-12 sm:py-16 lg:py-[72px]">
        <div className="px-2 sm:px-0">
          <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h2
              id="testimonials-title"
              className="w-full max-w-[577px] font-[Poppins] text-[28px] font-semibold leading-[1.2] tracking-[-0.44px] text-black sm:text-[38px] lg:text-[44px]"
            >
              Discover What Our Community Is Saying
            </h2>
            <p className="w-full max-w-[580px] font-[Satoshi] text-[18px] font-normal leading-[1.6] text-[#4F4F4F]">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-[72px] lg:grid-cols-3 lg:gap-[41px]">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex min-w-0 flex-col items-start gap-6 rounded-3xl bg-white p-6"
              >
                <div className="flex flex-col items-start gap-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="h-20 w-20 shrink-0 rounded-full object-cover"
                  />
                  <div className="flex min-w-0 flex-col gap-1">
                    <h3 className="font-[Poppins] text-xl font-semibold leading-[1.2] tracking-[-0.2px] text-black">
                      {testimonial.name}
                    </h3>
                    <p className="font-[Satoshi] text-[18px] font-normal leading-[1.6] text-[#003BE2]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="min-w-0 break-words font-[Satoshi] text-[18px] font-normal leading-[1.6] text-[#4F4F4F]">
                  {testimonial.review}
                </p>
              </article>
            ))}
          </div>
        </div>
      </CommonWrapper>
    </section>
  );
}
