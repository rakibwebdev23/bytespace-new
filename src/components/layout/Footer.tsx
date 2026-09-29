import CommonWrapper from "@/components/shared/CommonWrapper";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-white">
      <CommonWrapper>
        <p className="text-center">
          &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
        </p>
      </CommonWrapper>
    </footer>
  );
}
