"use client";
import { GradientText } from "@/app/components/Landing/Common/gradient-text";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarItemsMobile } from "./navbar-mobile-item";
import { Hamburger } from "./hamburger";
export const LandingNavbar = () => {
  const pathname = usePathname();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const [lastScrollTop, setLastScrollTop] = useState(0);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setLastScrollTop(scrollTop <= 10 ? 10 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    switch (pathname) {
      case "/Home":
        setSelectedIndex(1);
        break;
      case "/pricing":
        setSelectedIndex(2);
        break;
      case "/feature":
        setSelectedIndex(0);
        break;
      case "/":
        setSelectedIndex(-1);
        break;
    }
  }, [pathname]);

  return (
    <div className="mt-5 flex w-full flex-col items-center">
      <div className={cn(`fixed top-5 z-50 w-full max-w-[1824px] transition-all duration-300 max-lg:px-2 lg:px-8`)}>
        <div className="flex items-center justify-between rounded-2xl border bg-white p-4">
          <div className="flex items-center gap-8">
            <Link href={"/"} className="flex items-center gap-1">
              <Image src={"/ICON.png"} alt="" width={40} height={40} sizes="100vw" />
              <GradientText text="IC Candle" className="text-3xl font-semibold" />
            </Link>
            <div className="flex gap-3 max-md:hidden">
              {data.map((e, i) => (
                <Link onClick={() => handleSelect(i)} className="group flex gap-3" key={i} href={e.href}>
                  <p
                    className={cn(
                      selectedIndex === i ? "text-[#3D32D5]" : "text-gray-800",
                      "transition-colors duration-300"
                    )}
                  >
                    {e.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Hamburger toggleHamburger={toggleHamburger} hamburgerOpen={hamburgerOpen} />
            <Button
              variant="outline"
              className="group relative rounded-full py-[26px] pl-1 transition-all duration-500 max-sm:hidden"
            >
              <div className="absolute inset-0 rounded-full bg-[linear-gradient(136.93deg,_#004FC1_3.2%,_#215BAF_37.04%,_#1661CD_53.05%,_#004FC1_73.74%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative overflow-hidden rounded-full p-4 transition-all duration-700 group-hover:translate-x-[125px]">
                <div className="absolute inset-0 bg-[linear-gradient(136.93deg,_#004FC1_3.2%,_#215BAF_37.04%,_#1661CD_53.05%,_#004FC1_73.74%)] transition-opacity duration-500 group-hover:opacity-0"></div>
                <div className="absolute inset-0 bg-[linear-gradient(136.93deg,_#ffffff_3.2%,_#ffffff_37.04%,_#ffffff_53.05%,_#ffffff_73.74%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <ArrowRight className="text-white transition-all duration-500 group-hover:-rotate-45 group-hover:text-black" />
                </div>
              </div>
              <p className="px-5 text-lg transition-all duration-500 group-hover:-translate-x-[20px] group-hover:opacity-0 max-sm:px-2">
                Try now
              </p>
              <p className="absolute text-lg text-white opacity-0 transition-all duration-500 group-hover:-translate-x-[10px] group-hover:opacity-100">
                Sign in
              </p>
            </Button>
          </div>
        </div>
      </div>
      {hamburgerOpen && (
        <NavbarItemsMobile
          toggleHamburger={toggleHamburger}
          list={data}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setHamburgerOpen={setHamburgerOpen}
        />
      )}
    </div>
  );
};

const data = [
    {
        title: "Home",
        href: "/Home"
    },
    {
        title: "Features",
        href: "/feature"
    },
    {
        title: "Pricing",
        href: "/pricing"
    }
];
