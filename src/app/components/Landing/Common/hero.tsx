import { Button } from "@/app/components/ui/button";
import { Container } from "./Container";
import { CirclePlay } from "lucide-react";
// import { VideoSection } from "./video-section";

export const Hero = () => {
  return (
    <Container>
      <div
        className="relative h-full w-full rounded-md border bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/landing/hero-bg.png")' }}
      >
        {/* Content */}
        <div className="relative flex w-full flex-col justify-between">
          <div className="flex flex-col justify-between gap-8 overflow-hidden sm:gap-10 md:gap-20 lg:gap-[80px] xl:gap-[30px] 2xl:gap-[112px]">
            <div className="flex w-full flex-col items-center gap-4 pt-14 md:gap-2 lg:gap-8 xl:pt-20 2xl:pt-36">
              <p className="px-10 text-center text-3xl font-bold lg:text-5xl xl:px-20 xl:text-6xl 2xl:px-36 2xl:text-6xl">
                Insight Unleashed: AI-Powered, Data-Driven Decisions
              </p>
              <p>Backtest, analyze, and track the market with intelligent tools</p>
              <div className="flex w-full max-w-[420px] flex-col items-center justify-center gap-4 sm:flex-row">
                <Button className="w-full bg-[linear-gradient(136.93deg,_#004FC1_3.2%,_#215BAF_37.04%,_#1661CD_53.05%,_#004FC1_73.74%)] py-4 sm:py-6">
                  Get Started
                </Button>
                <Button variant="outline" className="flex w-full items-center justify-center gap-2 py-4 sm:py-6">
                  <CirclePlay className="h-5 w-5" /> Watch a Demo
                </Button>
              </div>
            </div>
            {/* <VideoSection /> */}
          </div>
        </div>
      </div>
    </Container>
  );
};