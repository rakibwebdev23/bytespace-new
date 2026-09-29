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

interface Item {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface AnimatedTooltipProps {
  items: Item[];
}

const AnimatedTooltip = ({ items }: AnimatedTooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = {
    stiffness: 100,
    damping: 5,
  };

  const x = useMotionValue(0);

  // Rotate tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // Move tooltip horizontally
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
    <div className="flex items-center">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative -mr-3.75"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* ================= HOVER TOOLTIP ================= */}
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
                className="
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
                {/* Name */}
                <div className="text-xs font-bold text-white">
                  {item.name}
                </div>

                {/* Designation */}
                <div className="text-[10px] text-white">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ================= AVATAR ================= */}
          <div
            onMouseMove={handleMouseMove}
            className="
              relative
              h-14
              w-14
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
              sizes="55px"
              className="object-cover object-top"
            />
          </div>
        </div>
      ))}

      {/* ================= 2K+ CIRCLE ================= */}
      <div
        className="
          relative
          z-40
          ml-0.5
          flex
          h-13.75
          w-14
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#D4FB20]
          text-[16px]
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