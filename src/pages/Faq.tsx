import Typography from "@/components/typography/Typography";
import { ReusableAccordion } from "@/components/accordination/Accordination";
import Faqimage from "@/assets/pngwing 24.png";
import Footer from "@/components/footer/Footer";

const Faq = () => {
  const accordionItems = [
    {
      value: "item-1",
      title: "What is your favorite template from BRIX Templates?",
      content: [
        <p key="p1">
          Vitae congue eu consequat ac felis placerat vestibulum lectus mauris
          ultrices. Cursus sit amet dictum sit amet justo donec enim diam
          porttitor lacus luctus accumsan tortor posuere.
        </p>,
      ],
    },
    {
      value: "item-2",
      title: "How secure is your platform?",
      content: [
        <p key="p1">
          Our platform uses industry-leading encryption and security practices
          to ensure all user data and transactions are fully protected at all
          times.
        </p>,
      ],
    },
    {
      value: "item-3",
      title: "Do you offer customer support?",
      content: [
        <p key="p1">
          Yes! Our support team is available 24/7 to help with any questions or
          issues. You can reach us via live chat, email, or phone.
        </p>,
      ],
    },
    {
      value: "item-4",
      title: "What is your favorite template from BRIX Templates?",
      content: [
        <p key="p1">
          Yes! Our support team is available 24/7 to help with any questions or
          issues. You can reach us via live chat, email, or phone.
        </p>,
      ],
    },
  ];

  return (
    <div
      className="relative bg-[#091c23] py-16 sm:py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${Faqimage})`,
        backgroundSize: "contain",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
   
      }}
    >
      {/* Semi-transparent content container */}
      <div className="relative z-10 mx-4 sm:mx-8 lg:mx-20 border-0 rounded-3xl sm:rounded-4xl bg-[#304046]/60 pb-5 sm:pb-2">
        {/* Header Section */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center text-[#E9EDF8] px-4 sm:px-8 lg:px-16 pt-12 sm:pt-16 lg:pt-15">
          <div className="max-w-4xl">
            <Typography.H2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Most Trusted Cryptocurrency Platform
            </Typography.H2>
            <Typography.B1R className="mt-6 sm:mt-10 px-2 sm:px-6 md:px-12 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Nec faucibus ut mauris iaculis tristique dolor aliquam. Euismod
              arcu arcu aliquet laoreet blandit. Nam velit uismod egestas in.
              Sed purus.
            </Typography.B1R>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="relative z-20 bg-[#5e767f]/80 m-3 sm:my-12 lg:my-10 mx-4 sm:mx-8 lg:mx-20 p-6 sm:p-8 lg:p-10 border-0 rounded-2xl sm:rounded-4xl">
          <ReusableAccordion items={accordionItems} defaultValue="item-1" />
        </div>
      </div>
      {/* <div className="mt-50">
        <Footer />
      </div> */}
    </div>
  );
};

export default Faq;
