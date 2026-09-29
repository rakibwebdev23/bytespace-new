"use client";

import Image from "next/image";
import { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import type { HappyStudentsType } from "@/types/happyStudentsType";

interface AnimatedTooltipProps {
  items: HappyStudentsType[];
}

const AnimatedTooltip = ({ items }: AnimatedTooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = {
    stiffness: 100,
    damping: 5,
  };

  const x = useMotionValue(0);

  // rotate tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // move tooltip horizontally
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;

    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex max-w-full items-center">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative -mr-3 sm:-mr-3.75"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* hover tooltip  */}
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.6,
                }}
                style={{
                  translateX,
                  rotate,
                  whiteSpace: "nowrap",
                }}
                className="pointer-events-none
                  absolute
                  -top-14.5
                  left-1/2
                  z-50
                  flex
                  -translate-x-1/2
                  flex-col
                  items-center
                  justify-center
                  rounded-md
                  bg-black
                  px-3
                  py-2
                  shadow-xl
                "
              >
                <div className="text-xs font-bold text-white">
                  {item.name}
                </div>

                <div className="text-[10px] text-white">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            onMouseMove={handleMouseMove}
            className="
              relative
              h-9
              w-9
              sm:h-11
              sm:w-11
              cursor-pointer
              overflow-hidden
              rounded-full
              border-2
              border-white
              bg-white
              transition-all
              duration-300
              group-hover:z-30
              group-hover:scale-105
            "
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 36px, 44px"
              className="object-cover object-top"
            />
          </div>
        </div>
      ))}

      <div
        className="
          relative
          z-40
          ml-0.5
          flex
          h-9
          w-9
          text-[16px]
          sm:h-11
          sm:w-11
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#D4FB20]
          font-medium
          leading-none
          text-[#242528]
        "
      >
        2K+
      </div>
    </div>
  );
};

export default AnimatedTooltip;
