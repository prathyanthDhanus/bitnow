import { Card } from "@/components/ui/card";
import Typography from "@/components/typography/Typography";
import { motion } from "framer-motion";
import React from "react";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <Card className="relative overflow-hidden rounded-2xl bg-[#0B1C24] border-none shadow-lg group cursor-pointer h-120">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-[#0B1C24] border-none shadow-lg group cursor-pointer "
        whileHover="hover"
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.div
          variants={{
            hover: { y: 0, opacity: 1 },
            initial: { y: "100%", opacity: 0 },
          }}
          initial="initial"
          className="absolute inset-0 bg-[#0B1C24]/80 flex flex-col justify-center items-center text-center p-6"
        >
          <Typography.H3 className="text-white font-bold">
            {title}
          </Typography.H3>
          <Typography.B1R className="mt-3 text-gray-300">
            {description}
          </Typography.B1R>
        </motion.div>
      </motion.div>
    </Card>
  );
};

export default FeatureCard;
