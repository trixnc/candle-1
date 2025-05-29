"use client";

// import { Typography } from "@/components/ui/typography";
import { Container } from "@/app/components/Landing/Common/Container";
import { cn } from "@/lib/utils";
import { User2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";

export const CommentSection = () => {
  const circles = Array(Math.ceil(data.length / 2)).fill(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isReadingComment, setIsReadingComment] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleNext = () => {
    if (currentPage < Math.ceil(data.length / 2) - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPage < Math.ceil(data.length / 2) - 1 && !isReadingComment) {
        setCurrentPage((prev) => prev + 1);
      } else {
        setCurrentPage(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [currentPage, isReadingComment]);

  return (
    <Container className="items-start">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex w-full flex-col gap-8 rounded-3xl border p-6"
          >
            <div className="flex w-full items-center justify-between">
              {/* <Typography className="gradient-text-blue text-start !text-3xl font-bold"> */}
                Devs love ICCandle... almost as much as ICCandle loves Devs!
              {/* </Typography> */} */
              <div className="flex items-center relative left-[825px] top-[500px] space-x-4">
                <div className="flex space-x-2">
                  {circles.map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      onClick={() => setCurrentPage(index)}
                      className={cn(
                        "size-3 cursor-pointer rounded-full transition-colors",
                        currentPage === index ? "gradient-bg" : "bg-[#D0D5DD]"
                      )}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    className="h-8 w-8"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleNext}
                    disabled={currentPage === Math.ceil(data.length / 2) - 1}
                    className="h-8 w-8"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{ x: -currentPage * 100 + "%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {Array.from({ length: Math.ceil(data.length / 2) }, (_, pageIndex) => (
                  <motion.div
                    key={pageIndex}
                    className="flex min-w-full gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {data.slice(pageIndex * 2, pageIndex * 2 + 2).map((comment, i) => (
                      <div
                        key={i}
                        className="w-1/2"
                        onMouseEnter={() => setIsReadingComment(true)}
                        onMouseLeave={() => setIsReadingComment(false)}
                      >
                        <Comment
                          message={comment.message}
                          authorRole={comment.authorRole}
                          avatarSrc={comment.avatarSrc}
                          authorName={comment.authorName}
                        />
                      </div>
                    ))}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export const Comment = ({ message, authorName, authorRole }: CommentProps) => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
    return () => setIsMount(false);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isMount && (
        <motion.div
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col justify-between gap-24 rounded-2xl border px-6 py-8 transition-colors hover:border-blue-600/20 hover:shadow-lg"
        >
          <div className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl"
            >
              Hey,
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-2xl font-medium text-gray-600"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex gap-4"
          >
            <User2 size={54} />
            <div>
              <p className="text-lg font-semibold text-gray-700">{authorName}</p>
              <p className="text-gray-600">{authorRole}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

type CommentProps = {
  message: string;
  authorName: string;
  authorRole: string;
  avatarSrc: string;
};

const data = [
  {
    message: `
      <p class="font-bold" >"Transformed my trading approach!"</p>
Since integrating IC Candle into my routine, I've gained clearer insights into market trends. The candle predictor feature is remarkably accurate, helping me make informed decisions effortlessly.
      `,
    authorName: "Alex J.",
    authorRole: "Foreign Exchange Trader (Forex Trader)",
    avatarSrc: "/images/landing/avatar.png"
  },
  {
    message: `
    <p class="font-bold" >"A must-have for traders."</p>

IC Candle's news predictor keeps me updated on relevant events that could impact my investments. It's like having a personal trading assistant available 24/7.
    `,
    authorName: "Samantha L.",
    authorRole: "Forex Market Analyst (Currency Analyst)",
    avatarSrc: "/images/landing/avatar2.png"
  },
  {
    message: `
      <p class="font-bold" >Simplifies complex strategies.</p>

As a beginner, I found trading overwhelming. IC Candle breaks down complex patterns into understandable insights, making my trading journey smoother.
      `,
    authorName: "Brian M.",
    authorRole: "Stock Market Analyst (Stock Analyst)",
    avatarSrc: "/images/landing/avatar2.png"
  },
  {
    message: `
      <p class="font-bold" >Reliable and user-friendly.</p>
The interface is intuitive, and the AI-driven analyses are spot-on. IC Candle has become an indispensable tool in my trading toolkit this how we do.
      `,
    authorName: "Emily R.",
    authorRole: "Foreign Exchange Trader (Forex Trader)",
    avatarSrc: "/images/landing/avatar2.png"
  },
  {
    message: `
      <p class="font-bold" >Keeps me ahead of the market.</p>
With IC Candle, I can anticipate market movements before they happen. The edge it provides is invaluable for staying competitive this how we do.
      `,
    authorName: "Daniel K.",
    authorRole: "Foreign Exchange Trader (Forex Trader)",
    avatarSrc: "/images/landing/avatar2.png"
  },
  {
    message: `
      <p class="font-bold" >Exceptional support and features.</p>
Beyond the powerful features, the customer support team is responsive and knowledgeable, ensuring I get the most out of the platform this how we do.
      `,
    authorName: "Laura S.",
    authorRole: "Stock Market Analyst (Stock Analyst)",
    avatarSrc: "/images/landing/avatar2.png"
  }
];