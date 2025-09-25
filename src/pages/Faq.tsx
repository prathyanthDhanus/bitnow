import Typography from "@/components/typography/Typography";
import { ReusableAccordion } from "@/components/accordination/Accordination";
import Faqimage from "@/assets/pngwing 24.png";
import { useEffect, useState } from "react";
import { faqService } from "@/services/faqApi";

interface FAQItem {
  question: string;
  answer: string;
}

const Faq = () => {
  const [accordionItems, setAccordionItems] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await faqService.fetchFAQs();

        const items = data.faq.map((item, index) => ({
          title: item.question,
          content: [item.answer],
          value: `item-${index + 1}`,
        }));
        setAccordionItems(items);
      } catch (err: any) {
        setError(err.message || "Failed to fetch FAQs");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading state
  if (loading) {
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
        <div className="relative z-10 mx-4 sm:mx-8 lg:mx-20 border-0 rounded-3xl sm:rounded-4xl bg-[#304046]/60 pb-5 sm:pb-2">
          <div className="relative z-20 flex flex-col justify-center items-center text-center text-[#E9EDF8] px-4 sm:px-8 lg:px-16 pt-12 sm:pt-16 lg:pt-15">
            <div className="max-w-4xl">
              <Typography.H2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Most Trusted Cryptocurrency Platform
              </Typography.H2>
              <Typography.B1R className="mt-6 sm:mt-10 px-2 sm:px-6 md:px-12 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Loading FAQs...
              </Typography.B1R>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
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
        <div className="relative z-10 mx-4 sm:mx-8 lg:mx-20 border-0 rounded-3xl sm:rounded-4xl bg-[#304046]/60 pb-5 sm:pb-2">
          <div className="relative z-20 flex flex-col justify-center items-center text-center text-[#E9EDF8] px-4 sm:px-8 lg:px-16 pt-12 sm:pt-16 lg:pt-15">
            <div className="max-w-4xl">
              <Typography.H2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Most Trusted Cryptocurrency Platform
              </Typography.H2>
              <Typography.B1R className="mt-6 sm:mt-10 px-2 sm:px-6 md:px-12 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-red-400">
                Error: {error}
              </Typography.B1R>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Normal render
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
          {accordionItems.length > 0 ? (
            <ReusableAccordion
              items={accordionItems}
              defaultValue={accordionItems[0]?.value || "item-1"}
            />
          ) : (
            <div className="text-center text-[#E9EDF8] py-8">
              <Typography.B1R>No FAQs available at the moment.</Typography.B1R>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
