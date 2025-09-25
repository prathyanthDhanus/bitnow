import Typography from "@/components/typography/Typography";
import Feature_background from "@/assets/feature-baground.png";
import Feature_cardimage from "@/assets/feature-card-image.png";
import { Card } from "@/components/cards";

const Features = () => {
  const featureData = [
    {
      image: Feature_cardimage,
      title: "Lorem Ipsum",
      description: "Est quisque interdum gravida dui.",
    },
    {
      image: Feature_cardimage,
      title: "Dolor Sit",
      description: "Aliquam nec faucibus ut mauris iaculis tristique dolor.",
    },
    {
      image: Feature_cardimage,
      title: "Consectetur",
      description: "Euismod arcu arcu aliquet laoreet blandit.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#091c23]">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Feature_background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "40%",
          height:"60rem"
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-[#E9EDF8] px-4 sm:px-8 lg:px-16 pt-30">
        <div className="max-w-4xl ">
          <Typography.H2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Most Trusted Cryptocurrency Platform
          </Typography.H2>
          <Typography.B1R className="mt-10 px-25 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod arcu
            arcu aliquet laoreet blandit. Nam velit uismod egestas in. Sed
            purus.
          </Typography.B1R>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 lg:px-30 py-20">
        {featureData.map((item, index) => (
          <Card key={index} type="feature" props={item} />
        ))}
      </div>
    </section>
  );
};

export default Features;
