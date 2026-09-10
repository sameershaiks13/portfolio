import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GalleryVerticalEnd } from "lucide-react";

interface GalleryProps {
  theme: "light" | "dark";          // still here if you need it elsewhere
  onOpenGalleryPage: () => void;
}

export function Gallery({ theme, onOpenGalleryPage }: GalleryProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 250);
  }, []);

  return (
    null
  );
}
