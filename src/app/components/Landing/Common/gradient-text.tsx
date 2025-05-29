import { cn } from "@/lib/utils";

export const GradientText = ({ text, className = "" }: { text: string | null | undefined; className?: string }) => {
  return (
    <p
      className={cn(
        "bg-gradient-to-r from-[#4572D2] via-[#263C60] to-[#003F96] bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </p>
  );
};