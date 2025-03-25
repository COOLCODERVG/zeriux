import {
  MessageCircleIcon,
  AccessibilityIcon,
  SlidersIcon,
  GlobeIcon,
  SmartphoneIcon,
  Volume2Icon,
  ShieldCheckIcon,
  BatteryFullIcon,
} from "lucide-react";
import { Item, ItemIcon, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";
import { ReactNode } from "react";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
}

export default function Items({
  title = "Everything you need. Nothing you don't.",
  items = [
    {
      title: "Instant Live Captions",
      description: "Real-time speech-to-text conversion, ensuring you never miss a word in any conversation.",
      icon: <MessageCircleIcon className="size-5 stroke-1" />,
    },
    {
      title: "Accessibility First",
      description: "Thoughtfully designed to provide an inclusive communication experience for all communities.",
      icon: <AccessibilityIcon className="size-5 stroke-1" />,
    },
    {
      title: "Customizable Display",
      description:
        "Easily adjust font size, color, and transparency for optimal readability and personal comfort.",
      icon: <SlidersIcon className="size-5 stroke-1" />,
    },
    {
      title: "Works Anywhere",
      description: "Perfect for meetings, classrooms, social gatherings, and public spaces, making conversations more accessible.",
      icon: <GlobeIcon className="size-5 stroke-1" />,
    },
    {
      title: "Long Battery Life",
      description: "Built for all-day use with an extended battery that keeps up with your daily activities.",
      icon: <BatteryFullIcon className="size-5 stroke-1" />,
    },
    {
      title: "Seamless Integration",
      description: "Connects effortlessly with mobile and smart devices for added convenience and functionality.",
      icon: <SmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Privacy & Security",
      description:
        "Your conversations stay protected with encrypted data and privacy-focused design.",
      icon: <ShieldCheckIcon className="size-5 stroke-1" />,
    },
    {
      title: "Adaptive Noise Filtering",
      description:
        "Advanced AI reduces background noise, ensuring clearer and more accurate captions.",
      icon: <Volume2Icon className="size-5 stroke-1" />,
    },
  ],
}: ItemsProps) {
  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
