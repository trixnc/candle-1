"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../Container";

export const Footer: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <Container>
      <footer className="sticky bottom-0 py-4">
        
          <div className="ms-1 flex items-center bg-gradient-to-r from-blue-600 via-slate-900 to-sky-600 text-transparent bg-clip-text text-xl font-semibold text-center py-2">
            <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-4" />
            <span className="bg-gradient-to-r from-blue-500 via-slate-900 to-sky-500 text-transparent bg-clip-text font-bold text-2xl mr-auto">
            IC Candle
            </span>
            <p className="text-sm text-neutral-400 font-light mr-40">Join our community</p>
            </div> 
          {/* Footer Bottom Section */}
          <div className="flex my-10 text-lg text-neutral-700">
            <p className="mr-auto">© 2025 IC Candle ai, Inc. All rights reserved.</p>
            <p>
            <a
              href="/privacy-policy"
              className="mr-20 text-neutral-700"
            >
              Privacy Policy
            </a>
            </p>
            <p>
            <a
              href="/terms-of-service"
              className="text-neutral-700"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
        </Container>
  );
};