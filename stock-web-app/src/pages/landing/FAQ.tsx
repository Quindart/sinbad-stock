import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'Is this platform free?',
    answer: 'Yes, our basic stock tracking and personal asset management features are free. Premium subscriptions unlock advanced analytics and tools.',
    value: 'item-1',
  },
  {
    question: 'How do I track my stocks and investments?',
    answer:
      'Simply add your stock tickers to your dashboard, and our platform will provide real-time updates, performance charts, and market insights.',
    value: 'item-2',
  },
  {
    question: 'Can I manage personal assets like real estate or savings?',
    answer:
      'Absolutely! Our interface allows you to track various personal assets including real estate, savings accounts, cryptocurrencies, and more, all in one place.',
    value: 'item-3',
  },
  {
    question: 'What kind of market insights do you provide?',
    answer: 'We offer daily market trends, stock analysis, financial news summaries, and personalized recommendations based on your portfolio.',
    value: 'item-4',
  },
  {
    question: 'How secure is my financial data?',
    answer:
      'We prioritize security with end-to-end encryption, two-factor authentication, and compliance with industry standards to protect your data.',
    value: 'item-5',
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 px-6 lg:px-0 sm:py-32">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Frequently Asked{' '}
        <span className="from-primary/60 to-primary bg-gradient-to-b bg-clip-text text-transparent">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="mt-4 font-medium">
        Still have questions?{' '}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary border-primary transition-all hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};