import { Accordion, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { NavbarItemMobilePropsType } from "./index";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export const NavbarItemsMobile = ({
  list,
  setSelectedItem,
  selectedItem,
  toggleHamburger
}: NavbarItemMobilePropsType) => {
  return (
    <div className={cn("fixed z-50 w-full max-lg:px-2 lg:px-8 xl:hidden", "mt-[99px]")}>
      <Accordion type="single" className="rounded-xl border bg-white">
        {list
          .filter((item) => item.title !== "Team")
          .map(({ title, icon, href, onClick }, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="last:border-none">
              <AccordionTrigger className="px-3">
                {href ? (
                  <Link
                    href={href}
                    onClick={() => {
                      setSelectedItem(title);
                      toggleHamburger();
                    }}
                    className={cn(
                      selectedItem == title && "text-[#2F8652]",
                      "flex items-center gap-2 group-hover:text-[#2F8652]"
                    )}
                  >
                    {icon}
                    {title}
                  </Link>
                ) : (
                  <div className="flex items-center gap-2 p-0 hover:bg-transparent" onClick={onClick}>
                    {icon}
                    {title}
                  </div>
                )}
              </AccordionTrigger>
            </AccordionItem>
          ))}
        <AccordionItem className="border-none py-2" value="book-a-table">
          <div className="relative flex justify-center px-3">
            <Button
              variant="outline"
              className="group relative w-[210px] rounded-full py-[26px] pl-1 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-full bg-[linear-gradient(136.93deg,_#004FC1_3.2%,_#215BAF_37.04%,_#1661CD_53.05%,_#004FC1_73.74%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="relative -translate-x-[25px] overflow-hidden rounded-full p-4 transition-all duration-700 group-hover:translate-x-[125px]">
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
                Get start
              </p>
            </Button>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};