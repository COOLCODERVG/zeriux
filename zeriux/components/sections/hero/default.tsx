import { Button, type ButtonProps } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "../../ui/section";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Glow from "../../ui/glow";
import { siteConfig } from "@/config/site";
import { ReactNode } from "react";
import MainMockup from "../../mockups/main";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
}

export default function Hero({
  title = "See Conversations, Without Limits.",
  description = "Innovative assistive device designed to bridge the communication gap for the deaf and hard-of-hearing community.",
  mockup,
  badge = (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">
        Currently working on our prototype!
      </span>
      <a href={siteConfig.getStartedUrl} className="flex items-center gap-1">
        Join Waitlist
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  ),
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Join Waitlist",
      variant: "default",
    },
    {
      href: siteConfig.links.github,
      text: "Learn More",
      variant: "glow",
    },
  ],
}: HeroProps) {
  return (
    <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0 mt-0 !pt-0">
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[550px] font-medium opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                >
                  <a href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}
          {mockup !== false && (
            <div className="relative w-full pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup type="responsive" className="w-full">
                  {mockup || <MainMockup />}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
