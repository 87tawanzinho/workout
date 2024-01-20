"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageWrapperModal = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.01, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
