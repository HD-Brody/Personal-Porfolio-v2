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
  const [containerWidth, setContainerWidth] = useState(0);

  // Calculate card width and container width
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const firstCard = container.querySelector('.carousel-card');
        if (firstCard) {
          const cardRect = firstCard.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          setCardWidth(cardRect.width + 24); // 24px for margin
          setContainerWidth(containerRect.width);
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
        
        // Reset position when first set moves completely off-screen
        if (newPosition >= totalWidth) {
          return newPosition - totalWidth;
        }
        
        return newPosition;
      });
    }
    
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, isDragging, scrollSpeed, items.length, cardWidth]);

  // Start animation
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Reset scroll speed to base speed when not dragging
  useEffect(() => {
    if (!isDragging && scrollSpeed !== baseSpeed) {
      setScrollSpeed(baseSpeed);
    }
  }, [isDragging, scrollSpeed, baseSpeed]);

  // Mouse event handlers
  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartPosition(scrollPosition);
  }, [scrollPosition]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      const dragDistance = dragStartX - e.clientX;
      const newPosition = dragStartPosition + dragDistance;
      const totalWidth = items.length * cardWidth;
      
      // Handle wrapping for seamless loop
      let adjustedPosition = newPosition;
      if (adjustedPosition < 0) {
        adjustedPosition = totalWidth + (adjustedPosition % totalWidth);
      } else if (adjustedPosition >= totalWidth) {
        adjustedPosition = adjustedPosition % totalWidth;
      }
      
      setScrollPosition(adjustedPosition);
    }
  }, [isDragging, dragStartX, dragStartPosition, items.length, cardWidth]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Touch event handlers for mobile
  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStartX(touch.clientX);
    setDragStartPosition(scrollPosition);
  }, [scrollPosition]);

  const handleTouchMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault();
      const touch = e.touches[0];
      const dragDistance = dragStartX - touch.clientX;
      const newPosition = dragStartPosition + dragDistance;
      const totalWidth = items.length * cardWidth;
      
      // Handle wrapping for seamless loop
      let adjustedPosition = newPosition;
      if (adjustedPosition < 0) {
        adjustedPosition = totalWidth + (adjustedPosition % totalWidth);
      } else if (adjustedPosition >= totalWidth) {
        adjustedPosition = adjustedPosition % totalWidth;
      }
      
      setScrollPosition(adjustedPosition);
    }
  }, [isDragging, dragStartX, dragStartPosition, items.length, cardWidth]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Global mouse/touch event listeners
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    const handleGlobalTouchEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalTouchEnd);
    
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Left Gradient Overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral dark:from-neutral-dark to-transparent z-10 pointer-events-none"></div>
      
      {/* Right Gradient Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral dark:from-neutral-dark to-transparent z-10 pointer-events-none"></div>
      
             {/* Scrolling Container */}
       <div
         ref={containerRef}
         className="flex py-2 cursor-grab active:cursor-grabbing select-none"
                   style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: isDragging ? 'none' : 'transform 0.05s ease-out',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none'
          }}
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}
       >
                 {/* First set of items */}
         {items.map((item, index) => (
           <div 
             key={`first-${index}`} 
             className={`carousel-card flex-shrink-0 mx-3 first:ml-0 last:mr-0 select-none ${cardClassName}`}
             style={{
               userSelect: 'none',
               WebkitUserSelect: 'none',
               MozUserSelect: 'none',
               msUserSelect: 'none'
             }}
           >
             {cardContent(item, index)}
           </div>
         ))}
         
         {/* Duplicate set for seamless loop */}
         {items.map((item, index) => (
           <div 
             key={`second-${index}`} 
             className={`carousel-card flex-shrink-0 mx-3 first:ml-0 last:mr-0 select-none ${cardClassName}`}
             style={{
               userSelect: 'none',
               WebkitUserSelect: 'none',
               MozUserSelect: 'none',
               msUserSelect: 'none'
             }}
           >
             {cardContent(item, index)}
           </div>
         ))}
      </div>
    </div>
  );
};

export default InfiniteScrollCarousel;
