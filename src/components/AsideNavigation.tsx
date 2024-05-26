import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import appLogo from "@/assets/logo.svg";
import { NavLink } from "react-router-dom";

const AsideNavigation = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="grid gap-6 p-2 justify-center align-middle">
        <div className="p-2">
          <NavLink to="/">
            <Button variant="outline" size="icon" aria-label="Home">
              <img
                src={appLogo}
                className="h-8 w-8 fill-foreground size-5"
                alt="logo"
              />
            </Button>
          </NavLink>
        </div>

        <nav className="grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-muted rounded-lg"
                  aria-label="Playground"
                >
                  <LayoutDashboard className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Dashboard
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </nav>
    </aside>
  );
};

export default AsideNavigation;
