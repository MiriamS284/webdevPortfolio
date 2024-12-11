"use client";

import { useInView } from "react-intersection-observer";
import SectionTitleOverlay from "./SectionTitleOverlay";

const SectionWithTitle = ({
  id,
  title,
  isDarkBackground,
  children,
  className,
}) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  console.log(`Section ${id} is in view: ${inView}`); // Debug-Ausgabe

  return (
    <section id={id} ref={ref} className={`${className} relative`}>
      {inView && (
        <SectionTitleOverlay
          title={title}
          isDarkBackground={isDarkBackground}
        />
      )}
      <div className="relative z-0">{children}</div>
    </section>
  );
};

export default SectionWithTitle;
