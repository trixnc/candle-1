import { Button } from "@/app/components/ui/button";
import { HamburgerPropsType } from "./index";

import { MenuIcon, XIcon } from "lucide-react";

export const Hamburger = ({ toggleHamburger, hamburgerOpen }: HamburgerPropsType) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="gradient-bg flex justify-center px-2 sm:hidden"
      aria-label="hamburger menu"
      onClick={toggleHamburger}
    >
      {hamburgerOpen && <XIcon color="white" />}
      {!hamburgerOpen && <MenuIcon color="white" />}
    </Button>
  );
};