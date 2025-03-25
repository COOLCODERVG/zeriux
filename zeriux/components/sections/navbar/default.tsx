import { Button, type ButtonProps } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetTrigger } from "../../ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "../../logos/launch-ui";
import { siteConfig } from "@/config/site";
import { ReactNode } from "react";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
}

export default function Navbar({
  logo = <LaunchUI />,
  name = "Zeriux Labs",
  homeUrl = siteConfig.url,
  actions = [
    {
      text: "Join Waitlist",
      href: siteConfig.url,
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  customNavigation,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href={homeUrl}
              className="flex items-center gap-2 text-xl font-bold mr-65"
            >
              {logo}
              {name}
            </a>
          </NavbarLeft>
          <NavbarRight>
            {actions.map((action, index) =>
              action.isButton ? (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  asChild
                >
                  <a href={action.href}>
                    {action.icon}
                    {action.text}
                    {action.iconRight}
                  </a>
                </Button>
              ) : (
                <a
                  key={index}
                  href={action.href}
                  className="hidden text-sm md:block"
                >
                  {action.text}
                </a>
              ),
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
