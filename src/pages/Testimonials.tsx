import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/cards";
import Test_image_1 from "@/assets/Rectangle 4476 (1).png"
import Test_image_2 from "@/assets/Rectangle 4476 (2).png"
import Test_image_3 from "@/assets/Rectangle 4476.png"

const Testimonials = () => {
  const profileData = [
    {
      id: 1,
      type: "profile",
      title: "Lorem ipsum dolor",
      subtitle: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
      image: Test_image_1,
      imageAlt: "Profile picture",
    },
    {
      id: 2,
      type: "profile",
      title: "John Smith",
      subtitle: "Senior Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
      image: Test_image_2,
      imageAlt: "John Smith profile",
    },
    {
      id: 3,
      type: "profile",
      title: "Sarah Johnson",
      subtitle: "Product Manager",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
      image: Test_image_3,
      imageAlt: "Sarah Johnson profile",
    },
    {
      id: 4,
      type: "profile",
      title: "Mike Wilson",
      subtitle: "UX Designer",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
      image: Test_image_1,
      imageAlt: "Mike Wilson profile",
    },
    {
      id: 5,
      type: "profile",
      title: "Emily Davis",
      subtitle: "Marketing Director",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
      image: Test_image_3,
      imageAlt: "Emily Davis profile",
    },
    {
      id: 6,
      type: "profile",
      title: "Alex Thompson",
      subtitle: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ipsum eu aenean dignissim sagittis malesuada consectetur. Suspendisse lectus mi nulla consectetur elementum.",
      image: Test_image_2,
      imageAlt: "Alex Thompson profile",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"right" | "left">(
    "right"
  );
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  // Calculate widths on mount and resize
  useEffect(() => {
    const calculateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);

        // Calculate total content width (cards + gaps)
        const cards = containerRef.current.querySelectorAll(".scroll-card");
        if (cards.length > 0) {
          const cardWidth = cards[0].clientWidth;
          const gap = 32; // gap-8 = 32px
          const totalWidth = (cardWidth + gap) * cards.length;
          setContentWidth(totalWidth);
        }
      }
    };

    calculateWidths();
    window.addEventListener("resize", calculateWidths);

    return () => window.removeEventListener("resize", calculateWidths);
  }, [profileData.length]);

  // Toggle scroll direction every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollDirection((prev) => (prev === "right" ? "left" : "right"));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Calculate the scroll distance based on content and container width
  const scrollDistance = contentWidth - containerWidth;

  return (
    <div className=" py-10 bg-[#091c23] ">
      <div className="w-full ">

        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x:
                scrollDirection === "right"
                  ? [0, -scrollDistance]
                  : [-scrollDistance, 0],
            }}
            transition={{
              duration: 20, // 20 seconds for full scroll
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {/* Original cards */}
            {profileData.map((profile) => (
              <div key={profile.id} className="scroll-card flex-shrink-0 w-80">
                <Card type={profile.type} props={profile} />
              </div>
            ))}

            {/* Duplicated cards for seamless loop */}
            {profileData.map((profile) => (
              <div
                key={`duplicate-${profile.id}`}
                className="scroll-card flex-shrink-0 w-80"
              >
                <Card type={profile.type} props={profile} />
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for better UX */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
