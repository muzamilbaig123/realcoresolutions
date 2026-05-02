"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  AnimatePresence,
} from "motion/react";
import Link from "next/link";

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

const FLIP_WORDS = [
  "ERP Solutions",
  "AI Technologies",
  "Digital Strategies",
  "CRM Platforms",
  "Custom Software",
  "Integrations",
];

function FlipWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % FLIP_WORDS.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="inline-flex justify-center items-center overflow-hidden align-bottom "
      style={{ perspective: 800 }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={FLIP_WORDS[index]}
          initial={{ rotateX: -90, opacity: 0, y: 16 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: 90, opacity: 0, y: -16 }}
          transition={{ duration: 0.42, ease: "easeInOut" }}
          className="inline-block text-foreground"
          style={{ transformOrigin: "50% 50%" }}
        >
          {FLIP_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export const Header = () => (
  <div className="max-w-5xl relative mx-auto py-20 md:py-40 px-4 w-full -top-40 text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-black dark:text-white"
    >
      Built to Scale! <br />
      Powered by <FlipWord />
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
      className="max-w-xl mx-auto text-base md:text-lg mt-6 text-foreground leading-relaxed font-bold"
    >
      Enterprise ERP, CRM &amp; communication solutions designed to accelerate
      your business growth from day one.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.32, ease: "easeOut" }}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 relative z-10"
    >
      <Link
        href="/request-demo"
        className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-8 h-11 sm:w-auto transition-colors duration-200"
      >
        Request a Demo
      </Link>

      <Link
        href="/consultation"
        className="inline-flex items-center justify-center rounded-md border border-white/80 hover:border-white/40 bg-black text-white dark:bg-white dark:text-black text-sm font-semibold px-8 h-11 sm:w-auto transition-colors duration-200"
      >
        Free Consultation
      </Link>
    </motion.div>
  </div>
);

export const ProductCard = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => (
  <motion.div
    style={{ x: translate }}
    whileHover={{ y: -20 }}
    className="group/product h-96 w-[30rem] relative shrink-0"
  >
    <a href={product.link} className="block group-hover/product:shadow-2xl">
      <img
        src={product.thumbnail}
        height={600}
        width={600}
        className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl"
        alt={product.title}
      />
    </a>
    <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black rounded-xl pointer-events-none transition-opacity duration-300" />
    <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-medium transition-opacity duration-300">
      {product.title}
    </h2>
  </motion.div>
);

export const HeroParallaxComp = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const spring = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    spring,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    spring,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    spring,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    spring,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    spring,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    spring,
  );

  return (
    <div
      ref={ref}
      className="h-[180rem] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((p) => (
            <ProductCard key={p.title} product={p} translate={translateX} />
          ))}
        </motion.div>

        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((p) => (
            <ProductCard
              key={p.title}
              product={p}
              translate={translateXReverse}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((p) => (
            <ProductCard key={p.title} product={p} translate={translateX} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
