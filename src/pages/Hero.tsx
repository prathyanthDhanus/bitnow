import Bitcoin from "@/assets/bitcoin-abstract 2.png";
import Typography from "@/components/typography/Typography";
import { Navbar } from "@/components/navbar/Navbar";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
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
      <div className="relative z-10">
        <Navbar />
        <div className="text-[#E9EDF8] container mx-auto px-13">
          <div className="pt-90">
            <Typography.H1>
              Ultrices ut etiam vulputate ante congue
            </Typography.H1>
            <Typography.H1 className="py-10">
              jokichn na <span>Lorem Ipsum</span>
            </Typography.H1>

            <div className="flex  items-center gap-5 py-5">
              <Button className="text-md hover:cursor-pointer">
                Learn More
              </Button>
              <Typography.B1B>Watch Video</Typography.B1B>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
