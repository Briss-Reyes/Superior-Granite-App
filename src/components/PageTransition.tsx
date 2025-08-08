"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

type PageTransitionProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRenderChildren, setShouldRenderChildren] = useState(false);
  const [currentChildren, setCurrentChildren] = useState(children);

  useEffect(() => {
    // When the route changes, trigger loading screen first
    setIsLoading(true);
    setShouldRenderChildren(false);

    const timeout = setTimeout(() => {
      setCurrentChildren(children); // Update content after delay
      setIsLoading(false);          // End loading screen
      setShouldRenderChildren(true); // Now we can show the new page
    }, 800); // Duration of loading screen

    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <>
      {/* Loading screen has its own AnimatePresence */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* Page content fades in only AFTER loading screen is done */}
      <AnimatePresence mode="wait">
        {shouldRenderChildren && (
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {currentChildren}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
