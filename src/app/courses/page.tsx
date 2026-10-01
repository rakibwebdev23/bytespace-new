import ByteSpaceCourses from "@/features/home/components/ByteSpaceCourses";
import PageBanner from "@/components/shared/PageBanner";

export default function CoursesPage() {
  return (
    <>
      <PageBanner title="Courses" />
      <ByteSpaceCourses showHeading={false} />
    </>
  );
}
