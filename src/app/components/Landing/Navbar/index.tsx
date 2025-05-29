import { Dispatch, JSX, SetStateAction } from "react";

export * from "./Navbar";

export type NavbarItemMobilePropsType = {
  list: NavItemType[];
  openIndex?: number;
  setSelectedItem: Dispatch<SetStateAction<string | null>>;
  setHamburgerOpen: Dispatch<SetStateAction<boolean>>;
  selectedItem: string | null;
  toggleHamburger: () => void;
};

export type NavItemType = {
  title: string;
  show?: boolean;
  href?: string;
  icon?: JSX.Element;
  onClick?: (event: React.MouseEvent) => void;
};

export type HamburgerPropsType = {
  toggleHamburger: () => void;
  hamburgerOpen: boolean;
};