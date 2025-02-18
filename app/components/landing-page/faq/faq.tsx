import { faqItems } from "./constants";
import { FAQItem } from "./faq-item";

export default function FAQ() {
  return (
    <div className='my-20 flex flex-col items-center gap-16'>
      <h3 className='text-4xl font-bold text-white'>Dúvidas frequentes</h3>
      <div className='flex gap-3'>
        <div className='flex flex-col gap-3'>
          {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item) => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item) => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
