"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface WorkGalleryProps {
  images: string[];
  title: string;
}

export function WorkGallery({ images, title }: WorkGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null));
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="group relative aspect-4/3 w-full overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200 cursor-pointer"
            onClick={() => openLightbox(i)}
          >
            <Image
              src={img}
              alt={`${title} ギャラリー ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 w-10 h-10 transition-all duration-300 scale-75 group-hover:scale-100 drop-shadow-md" />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-black/40 hover:bg-black/80 p-3 md:p-4 rounded-full transition-colors z-50"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/30 hover:bg-black/80 p-4 rounded-full transition-colors z-50 hidden md:block"
                  onClick={handlePrev}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-black/30 hover:bg-black/80 p-4 rounded-full transition-colors z-50 hidden md:block"
                  onClick={handleNext}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="relative w-full max-w-6xl aspect-video outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]}
                alt={`${title} ギャラリー拡大 ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              
              {/* Mobile controls (if multiple images) */}
              {images.length > 1 && (
                <div className="absolute bottom-4 inset-x-4 flex justify-between items-center md:hidden z-50">
                  <button onClick={handlePrev} className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div className="bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium tracking-widest backdrop-blur-md">
                    {selectedIndex + 1} / {images.length}
                  </div>
                  <button onClick={handleNext} className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}
            </motion.div>
            
            {/* Desktop Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 bg-black/60 px-5 py-2 rounded-full text-sm font-medium tracking-widest hidden md:block backdrop-blur-md z-50">
                {selectedIndex + 1} / {images.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
