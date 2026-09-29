import type { ReactNode } from "react";

interface CommonWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function CommonWrapper({
  children,
  className = "",
}: CommonWrapperProps) {
  return (
    <div
      className={`mx-auto w-full max-w-360 px-2 sm:px-4 lg:px-2 ${className}`}
    >
      {children}
    </div>
  );
}
