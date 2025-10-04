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
   <div className="p-6 bg-gradient-to-b from-eagle-green-950 to-eagle-green-800">
      <div className="pt-12 pb-12 flex justify-center">
        <p className="text-5xl text-white font-bold">Gallery</p>
      </div>

      {/* Masonry Layout */}
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-auto gap-6 "
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
