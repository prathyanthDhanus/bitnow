interface FAQItem {
  question: string;
  answer: string;
}

interface FAQResponse {
  faq: FAQItem[];
}

const FAQ_API_URL = "https://mocki.io/v1/94cb45d3-da0b-4d55-b874-0afbf87f3fd3";

//・・・・・・・・・・・・・・・ Get faq data  ・・・・・・・・・・・・・・・

export const faqService = {
  async fetchFAQs(): Promise<FAQResponse> {
    const response = await fetch(FAQ_API_URL);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch FAQ data: ${response.status} ${response.statusText}`
      );
    }

    const data: FAQResponse = await response.json();
    return data;
  },
};
