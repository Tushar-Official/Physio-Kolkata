"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { galleryData } from "../utils/contentJsonFiles/galleryJson";

export const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const itemsPerRow = 4; // same as md:grid-cols-4
const initialCount = itemsPerRow * 2; // show 8 items by default (2 full rows)

const visibleMedia = showAll ? galleryData : galleryData.slice(0, initialCount);

  return (
    <div className="p-6">
          <div className=' pt-12 pb-12 flex justify-center items center '>
        <p className='text-4xl text-black font-bold'>Gallery</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
  {visibleMedia.map((item: any) => (
    <motion.div
      key={item.id}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative max-w-[200px] w-full aspect-square flex items-center justify-center bg-gray-100 rounded-lg shadow-md"
    >
      {item.type === "image" ? (
        <Image
          src={item.src}
          alt={`Gallery ${item.id}`}
          fill
          className="object-contain p-2 rounded-lg"
        />
      ) : (
        <video
          src={item.src}
          controls
          className="w-full h-full object-contain rounded-lg"
        />
      )}
    </motion.div>
  ))}
</div>


      {/* Show More Button */}
      <div className="flex justify-center mt-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md"
        >
          {showAll ? "Show Less" : "Show More"}
        </motion.button>
      </div>
    </div>
  );
};
