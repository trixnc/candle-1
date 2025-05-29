import { Input } from "@/app/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-10 border-t">
      <div className="flex flex-col items-center px-4 sm:px-10 lg:px-24">
        <div className="flex w-full flex-col items-center justify-between py-8 lg:flex-row">
          <div className="mb-6 lg:mb-0">
            <Image alt="" src={"/logo/logo.svg"} width={200} height={100} />
          </div>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-6 lg:mb-0 lg:justify-start lg:gap-14">
            {data.map((e, i) => (
              <Link className="text-gray-500 hover:text-gray-700" key={i} href={e.href}>
                {e.title}
              </Link>
            ))}
          </div>
          <div className="w-full lg:w-auto">
            <p className="mb-2 text-center text-xs text-gray-400 lg:text-left">Join our newsletter</p>
            <div className="flex items-center gap-4 rounded-2xl border p-1">
              <Input placeholder="Your email" className="flex-1 border-0" />
              <div className="gradient-bg flex-shrink-0 rounded-xl p-2">
                <Plus color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between lg:flex-row">
          <p className="mb-4 text-center text-gray-500 lg:mb-0 lg:text-left">
            © 2024 IC Candle AI, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start lg:gap-14">
            {attach.map((e, i) => (
              <Link className="text-gray-500 hover:text-gray-700" key={i} href={e.link}>
                {e.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const data = [
  {
    title: "Product",
    href: ""
  },
  {
    title: "Pricing",
    href: "/pricing"
  },
  {
    title: "About Us",
    href: ""
  }
];

const attach = [
  {
    title: "Privacy Policy",
    link: ""
  },
  {
    title: "Terms of Service",
    link: ""
  }
];