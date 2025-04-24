import { motion } from "motion/react";

interface CardProps {
  text?: string;
  style: { rotate: string; top?: string; bottom?: string; left: string };
  image?: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const Card = ({ text, style, image, containerRef }: CardProps) => {
  return image && !text ? (
    <motion.img
      src={image}
      style={style}
      className="absolute w-15 cursor-grab"
      // whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      // whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
