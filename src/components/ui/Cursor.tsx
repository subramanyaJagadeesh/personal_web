import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if ('ontouchstart' in window) {
      return;
    }

    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      const isLink = 
        hoveredElement instanceof HTMLAnchorElement || 
        hoveredElement instanceof HTMLButtonElement ||
        hoveredElement?.closest('a') ||
        hoveredElement?.closest('button');
      
      setLinkHovered(!!isLink);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  // If it's a touch device, don't render the cursor
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
      animate={{
        x: position.x - (linkHovered ? 24 : clicked ? 16 : 8),
        y: position.y - (linkHovered ? 24 : clicked ? 16 : 8),
        opacity: hidden ? 0 : 1,
        scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
      }}
      transition={{
        x: { duration: 0.1, ease: 'linear' },
        y: { duration: 0.1, ease: 'linear' },
        scale: { duration: 0.15, ease: 'easeInOut' },
        opacity: { duration: 0.15, ease: 'easeInOut' },
      }}
    >
      <div 
        className={`rounded-full bg-white w-4 h-4 ${
          linkHovered ? 'w-12 h-12 bg-white' : clicked ? 'w-8 h-8' : 'w-4 h-4'
        }`}
      />
    </motion.div>
  );
};

export default Cursor;
