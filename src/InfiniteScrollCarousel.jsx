import React, { useRef, useEffect, useState, useCallback } from 'react';

const InfiniteScrollCarousel = ({
  items,
  baseSpeed = 1,
  className = "",
  cardClassName = "",
  cardContent
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const [scrollSpeed, setScrollSpeed] = useState(baseSpeed);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartPosition, setDragStartPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  // For momentum
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);

  // Calculate card width
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const firstCard = containerRef.current.querySelector('.carousel-card');
        if (firstCard) {
          const cardRect = firstCard.getBoundingClientRect();
          setCardWidth(cardRect.width + 24); // margin
        }
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [items]);

  // Animation loop
  const animate = useCallback(() => {
    if (!isPaused && !isDragging) {
      setScrollPosition(prev => {
        const newPosition = prev + scrollSpeed;
        const totalWidth = items.length * cardWidth;

        if (newPosition >= totalWidth) return newPosition - totalWidth;
        if (newPosition < 0) return newPosition + totalWidth;

        return newPosition;
      });

      // Gradually ease velocity back to base speed
      if (Math.abs(scrollSpeed - baseSpeed) > 0.01) {
        setScrollSpeed(prev => prev * 0.95 + baseSpeed * 0.05); // easing
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, isDragging, scrollSpeed, items.length, cardWidth, baseSpeed]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate]);

  // Mouse drag start
  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartPosition(scrollPosition);
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
  }, [scrollPosition]);

  // Mouse drag move
  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      const dragDistance = dragStartX - e.clientX;
      const totalWidth = items.length * cardWidth;
      let newPosition = dragStartPosition + dragDistance;

      if (newPosition < 0) newPosition = totalWidth + (newPosition % totalWidth);
      else if (newPosition >= totalWidth) newPosition = newPosition % totalWidth;

      setScrollPosition(newPosition);

      // Track velocity
      velocityRef.current = e.clientX - lastXRef.current;
      lastXRef.current = e.clientX;
    }
  }, [isDragging, dragStartX, dragStartPosition, items.length, cardWidth]);

  // Mouse drag end with momentum
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);

    // Apply momentum based on last velocity
    const momentum = -velocityRef.current * 0.5; // scale factor
    setScrollSpeed(baseSpeed + momentum);
  }, [baseSpeed]);

     // Hover pause - removed
   // const handleMouseEnter = useCallback(() => setIsPaused(true), []);
   // const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral dark:from-neutral-dark to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral dark:from-neutral-dark to-transparent z-10 pointer-events-none"></div>

      <div
        ref={containerRef}
        className="flex py-2 cursor-grab active:cursor-grabbing select-none"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          transition: isDragging ? 'none' : 'transform 0.05s ease-out'
        }}
                 onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className={`carousel-card flex-shrink-0 mx-3 ${cardClassName}`}
          >
            {cardContent(item, index % items.length)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollCarousel;