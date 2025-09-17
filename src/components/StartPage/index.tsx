"use client";

import * as m from "motion/react-m";

export default function StartPage({ onStart }: { onStart: () => void }) {
  return (
    <m.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
        },
      }}
      className="text-center"
    >
      <m.h1
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        className="mb-8 text-4xl font-bold"
      >
        MBTI 테스트
      </m.h1>
      <m.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={onStart}
        className="rounded-lg bg-blue-500 px-6 py-3 text-lg text-white"
      >
        시작하기
      </m.button>
    </m.div>
  );
}
