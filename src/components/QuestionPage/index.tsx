"use client";

import * as m from "motion/react-m";

interface QuestionPageProps {
  question: {
    question: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
}

export default function QuestionPage({
  question,
  onAnswer,
}: QuestionPageProps) {
  return (
    <div className="w-full max-w-2xl px-4">
      <m.h2
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="mb-8 text-center text-2xl font-bold"
      >
        {question.question}
      </m.h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <m.button
            key={index}
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => onAnswer(option)}
            className="w-full rounded-lg bg-white p-4 text-left shadow"
          >
            {option}
          </m.button>
        ))}
      </div>
    </div>
  );
}
