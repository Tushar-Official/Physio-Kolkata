"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { galleryData } from "../utils/contentJsonFiles/galleryJson";

export const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const itemsPerRow = 8; // show 8 items by default
  const visibleMedia = showAll ? galleryData : galleryData.slice(0, itemsPerRow);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="p-6 bg-eagle-green-950">
      <div className="pt-12 pb-12 flex justify-center">
       <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-2xl text-white/90 max-w-3xl text-center leading-relaxed mb-10 font-serif"
      >
        Explore our gallery showcasing 
        <span className="text-white font-semibold"> state-of-the-art facilities, </span>
        patient care, and 
        <span className="text-white font-semibold"> medical excellence.</span>
      </motion.p>
      </div>

      {/* Masonry Layout */}
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-auto gap-6"
        columnClassName="bg-clip-padding"
      >
        {visibleMedia.map((item: any) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 relative rounded-lg shadow-lg overflow-hidden bg-white"
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`Gallery ${item.id}`}
                width={400}
                height={400}
                className="object-cover w-full h-auto rounded-lg"
              />
            ) : (
              <video
                src={item.src}
                controls
                className="w-full h-auto rounded-lg"
              />
            )}
          </motion.div>
        ))}
      </Masonry>

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
