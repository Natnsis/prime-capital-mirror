"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrimeCapitalInfo() {
  return (
    <section className="w-full bg-white py-16">
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-10 md:gap-16 px-6 md:px-12">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 18,
            delay: 0.05,
          }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="flex-1"
        >
          <div className="space-y-5 bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-md hover:shadow-xl hover:border-[#0E0066] transition-colors duration-200">
            {/* Gradient Title */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ethiopia&apos;s First Dedicated <br />
              Investment Banking <br />
              Institution
            </h1>

            {/* Subtitle Paragraph 1 */}
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Founded in 2016 E.C. with <strong>ETB 25 million</strong> paid-up
              capital, Prime Capital S.C. stands as Ethiopia&apos;s first
              dedicated investment banking institution — built on the pillars of{" "}
              <strong>innovation, integrity, and excellence</strong> to shape
              the nation&apos;s financial future.
            </p>

            {/* Subtitle Paragraph 2 */}
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We empower Ethiopian enterprises and investors through innovative,
              independent, and accessible investment banking solutions that
              foster inclusive, sustainable economic growth.
            </p>
          </div>
        </motion.div>

        {/* Right: Image/Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 18,
            delay: 0.12,
          }}
          whileHover={{ y: -6, scale: 1.02, rotate: 0 }}
          className="flex-shrink-0 relative w-full md:w-[380px] lg:w-[450px] flex justify-center"
        >
          <div className="w-full h-64 md:h-80 bg-white rounded-3xl shadow-lg border border-gray-200 hover:border-[#0E0066] hover:shadow-xl transform rotate-3 transition-all duration-300 ease-out overflow-hidden">
            {/* Image placeholder */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
