"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 bg-black text-white flex items-center justify-center"
    >
       <div className="flex flex-col items-center justify-center gap-4">
        <span className="font-bold font-bebas text-accent tracking-wide text-5xl md:text-8xl 2xl:text-9xl">SUPERIOR GRANITE </span>
          <Image src="/loader.gif" alt="loader" width={70} height={70}/>
       </div>
    

    </motion.div>
  );
};

export default LoadingScreen;
