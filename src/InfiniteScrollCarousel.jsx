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
  const positionRef = useRef(0);
  const speedRef = useRef(baseSpeed);

  const [itemsWidth, setItemsWidth] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const dragStartPositionRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);

  // Calculate the total width of the original items
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const firstCard = containerRef.current.querySelector('.carousel-card');
        if (firstCard) {
          const allCards = containerRef.current.querySelectorAll('.carousel-card');
          // Sum the width of a single set of cards
          let width = 0;
          for (let i = 0; i < items.length; i++) {
            width += allCards[i].offsetWidth;
            const style = window.getComputedStyle(allCards[i]);
            width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
          }
          setItemsWidth(width);
        }
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [items]);

  // Animation loop
  const animate = useCallback(() => {
    if (!isDragging) {
      positionRef.current += speedRef.current;

      // Reset the position for a seamless loop
      if (positionRef.current >= itemsWidth) {
        positionRef.current -= itemsWidth;
      } else if (positionRef.current < 0) {
        positionRef.current += itemsWidth;
      }
      
      // Gradually ease speed back to base speed
      if (Math.abs(speedRef.current - baseSpeed) > 0.01) {
        speedRef.current = speedRef.current * 0.95 + baseSpeed * 0.05;
      }

      containerRef.current.style.transform = `translateX(-${positionRef.current}px)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isDragging, itemsWidth, baseSpeed]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate]);

  // Mouse drag start
  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartPositionRef.current = positionRef.current;
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
    containerRef.current.style.transition = 'none'; // Disable transition for dragging
  }, []);

  // Mouse drag move
  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      const dragDistance = e.clientX - dragStartXRef.current;
      positionRef.current = dragStartPositionRef.current - dragDistance;
      
      // Update the DOM directly for smooth dragging
      containerRef.current.style.transform = `translateX(-${positionRef.current}px)`;

      // Track velocity
      velocityRef.current = e.clientX - lastXRef.current;
      lastXRef.current = e.clientX;
    }
  }, [isDragging]);

  // Mouse drag end with momentum
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);

    // Re-enable transition for smooth deceleration
    containerRef.current.style.transition = 'transform 0.05s ease-out';

    // Apply momentum based on last velocity
    const momentum = -velocityRef.current * 0.5;
    speedRef.current = baseSpeed + momentum;

  }, [baseSpeed]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral dark:from-neutral-dark to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral dark:from-neutral-dark to-transparent z-10 pointer-events-none"></div>

      <div
        ref={containerRef}
        className="flex py-2 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={(e) => {
          if (isDragging) {
            handleMouseUp();
          }
        }}
      >
        {/* Render the items twice for a seamless loop */}
        {items.concat(items).concat(items).concat(items).map((item, index) => (
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