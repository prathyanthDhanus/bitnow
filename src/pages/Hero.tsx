import Bitcoin from "@/assets/bitcoin-abstract 2.png";
import Typography from "@/components/typography/Typography";
import { Navbar } from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MousePointer2 } from "lucide-react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");

  const texts = ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % texts.length;

        if (nextIndex === 0 || nextIndex === 1) {
          setDirection("up");
        } else if (nextIndex === 2) {
          setDirection("down");
        } else if (nextIndex === 3) {
          setDirection("down");
        }

        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    up: {
      initial: { y: 30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -30, opacity: 0 },
    },
    down: {
      initial: { y: -30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 30, opacity: 0 },
    },
  };

  // Responsive animation values
  const getResponsiveAnimation = () => {
    if (window.innerWidth < 768) {
      // Mobile
      return {
        x: [0, 0, -20, -20, 15, 15, 0, 0],
        y: [0, 0, -10, -10, 20, 20, 0, 0],
      };
    } else if (window.innerWidth < 1024) {
      // Tablet
      return {
        x: [0, 0, -30, -30, 20, 20, 0, 0],
        y: [0, 0, -15, -15, 30, 30, 0, 0],
      };
    } else {
      // Desktop
      return {
        x: [0, 0, -50, -50, 30, 30, 0, 0],
        y: [0, 0, -20, -20, 40, 40, 0, 0],
      };
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Bitcoin})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <div className="text-[#E9EDF8] container mx-auto px-4 flex-1 flex items-center">
          <div className="w-full pt-20 lg:pt-50 px-4 sm:px-6 lg:px-10">
            {/* Main Heading Section */}
            <div className="flex flex-col lg:flex-row lg:gap-5 gap-3 ">
              <Typography.H1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                Ultrices ut etiam vulputate ante congue
              </Typography.H1>

              <motion.div
                animate={getResponsiveAnimation()}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: [0.82, 0, 0.38, 1],
                  times: [
                    0, 0.125, 0.125, 0.25, 0.25, 0.375, 0.375, 0.5, 0.5, 0.625,
                    0.625, 0.75, 0.75, 0.875, 0.875, 1,
                  ],
                }}
                className="self-start lg:self-auto"
              >
                <div className="relative inline-block">
                  <div className="absolute -top-3 -left-3 lg:-top-4 lg:-left-4">
                    <MousePointer2 className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <Button className="text-xs lg:text-[10px] rounded-tr-2xl rounded-br-2xl rounded-bl-md rounded-tl-none py-1 px-3 lg:py-2 lg:px-4">
                    Sustainable Growth
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Animated Text Section */}
            <Typography.H1 className=" flex flex-col sm:flex-row items-baseline gap-2 sm:gap-0">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                jokichn na
              </span>
              <span className="relative ml-0 sm:ml-10 min-h-[40px] sm:min-h-[50px] lg:min-h-[60px] min-w-[250px] sm:min-w-[280px] lg:min-w-[300px] inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    variants={variants[direction]}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      duration: direction === "down" ? 0.3 : 0.8,
                    }}
                    className="absolute top-2 sm:top-3 left-0 text-[#5F82FF] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                  >
                    {texts[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </Typography.H1>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 py-5">
              <Button className="text-sm sm:text-md hover:cursor-pointer w-full sm:w-auto py-3 sm:py-2 px-6">
                Learn More
              </Button>

              <Typography.B1B className="text-center sm:text-left text-lg sm:text-base">
                Watch Video
              </Typography.B1B>

              <motion.div
                animate={{
                  x: [0, 0, 30, 30, -50, -50, 0, 0],
                  y: [0, 0, 40, 40, -20, -20, 0, 0],
                }}
                transition={{
                  duration: 4, // Different duration
                  delay: 2, // Different delay
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: [0.42, 0, 0.58, 1],
                  times: [
                    0, 0.125, 0.125, 0.25, 0.25, 0.375, 0.375, 0.5, 0.5, 0.625,
                    0.625, 0.75, 0.75, 0.875, 0.875, 1,
                  ],
                }}
                className="self-center sm:self-auto mt-2 sm:mt-0 sm:ml-8 lg:ml-30"
              >
                <div className="relative inline-block">
                  <div className="absolute -top-3 -left-3 lg:-top-4 lg:-left-4">
                    <MousePointer2 className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>
                  <Button className="text-xs lg:text-[10px] rounded-tr-2xl rounded-br-2xl rounded-bl-md rounded-tl-none py-1 px-3 lg:py-2 lg:px-4">
                    Sustainable Growth
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
