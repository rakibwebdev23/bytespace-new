import { notFound } from "next/navigation";
import CommonWrapper from "@/components/shared/CommonWrapper";
import { coursesData } from "@/data/courseData";

interface CourseDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { slug } = await params;
  const course = coursesData.find((item) => item.slug === slug);

  if (!course) notFound();

  return (
    <main
      className="flex min-h-[calc(100vh-5rem)] items-center bg-cover bg-center bg-no-repeat py-10 sm:py-16 lg:py-20"
      style={{ backgroundImage: "url('/register-back.png')" }}
    >
      <CommonWrapper>
        <h1 className="text-center font-[Poppins] text-[24px] font-semibold leading-[1.2] tracking-[-0.36px] text-[#F5F5F6] min-[400px]:text-[26px] sm:text-[34px] sm:tracking-[-0.44px] md:text-[38px] lg:text-[44px]">
          Don&apos;t have more data
        </h1>
      </CommonWrapper>
    </main>
  );
}
