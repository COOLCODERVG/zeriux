import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";
import { ReactNode } from "react";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  items = [
    {
      question: "How do the real-time captions work?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Our smart glasses use advanced AI-powered speech recognition to
            convert spoken words into text in real time. The captions are
            displayed seamlessly on the lenses for easy readability.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            This ensures accessibility for users who are deaf or hard of
            hearing, and it enhances clarity in noisy environments.
          </p>
        </>
      ),
    },
    {
      question: "Can I customize the display settings?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Absolutely! You can adjust font size, text color, and transparency
            to match your personal preferences. This ensures an optimal
            experience for different lighting conditions and visual needs.
          </p>
        </>
      ),
    },
    {
      question: "Where can I use these smart glasses?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Our glasses are designed to work anywhere—whether you&apos;re in a
            business meeting, a classroom, a social gathering, or a public
            space. They help bridge communication gaps effortlessly.
          </p>
        </>
      ),
    },
    {
      question: "How long does the battery last?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            The glasses are built for all-day use with a long-lasting battery
            that ensures you stay connected throughout your activities. On a
            single charge, they can last up to 12 hours, depending on usage.
          </p>
        </>
      ),
    },
    {
      question: "Do the glasses integrate with my phone?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Yes! The glasses sync seamlessly with your smartphone via Bluetooth,
            allowing you to receive notifications, control settings, and access
            additional features through our mobile app.
          </p>
        </>
      ),
    },
    {
      question: "Is my data secure?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Absolutely. We prioritize your privacy by using end-to-end
            encryption to protect your conversations. No data is stored without
            your consent, ensuring a secure experience.
          </p>
        </>
      ),
    },
    {
      question: "How does Adaptive Noise Filtering improve accuracy?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Our AI-powered Adaptive Noise Filtering reduces background noise to
            enhance speech recognition accuracy. This means clearer captions in
            crowded or noisy environments.
          </p>
        </>
      ),
    },
    {
      question: "Where can I purchase these smart glasses?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Our smart glasses are available on our official website and select
            retail partners. Stay tuned for upcoming promotions and early-access
            deals!
          </p>
        </>
      ),
    },
  ],
}: FAQProps) {
  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
