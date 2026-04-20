"use client";

import React, { useState, useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";

interface PriceItem {
  name: string;
  value: string;
  change: string;
  isUp: boolean | null;
}

const PRICE_ITEMS: PriceItem[] = [
  { name: "IBMM", value: "16.3533", change: "+3.76%", isUp: true },
  { name: "WGBX", value: "1060.87", change: "0%", isUp: null },
  { name: "GDAB", value: "1000", change: "0%", isUp: null },
  { name: "TBL182D", value: "4700", change: "0%", isUp: null },
];

const MarketPrices: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const controls = useAnimation();

  const duplicatedItems = [...PRICE_ITEMS, ...PRICE_ITEMS];

  useEffect(() => {
    if (paused) {
      controls.stop();
    } else {
      controls.start({
        x: "-50%",
        transition: { duration: 20, ease: "linear", repeat: Infinity }
      });
    }
  }, [paused, controls]);

  return (
    <div
      className="bg-white text-black py-3 w-full overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto flex max-w-5xl items-center px-2 md:px-4">
        <div className="text-base md:text-lg font-semibold whitespace-nowrap pr-2 md:pr-4 border-r border-gray-300 mr-3 md:mr-6 text-[#002856]">
          ESX Market Prices
        </div>
        <div className="flex flex-1 gap-4 md:gap-8 overflow-hidden">
          <motion.div animate={controls} className="flex gap-4 md:gap-8">
            {duplicatedItems.map((p, index) => (
              <div key={p.name + index} className="flex items-center gap-2 min-w-[120px] md:min-w-[150px] shrink-0">
                <span className="font-bold text-[#002856]">{p.name}</span>
                <span className="text-cyan-600">{p.value}</span>
                <span className={`flex items-center ${
                  p.isUp === true
                    ? "text-green-600"
                    : p.isUp === false
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}>
                  {p.isUp === true && <MdArrowUpward className="mr-1" />}
                  {p.isUp === false && (
                    <MdArrowUpward className="mr-1 rotate-180" />
                  )}
                  {p.isUp === null && <span className="mr-1">↕</span>}
                  {p.change}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarketPrices;
