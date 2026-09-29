import CommonWrapper from "../common/CommonWrapper";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-white">
      <CommonWrapper>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </CommonWrapper>
    </footer>
  );
}
