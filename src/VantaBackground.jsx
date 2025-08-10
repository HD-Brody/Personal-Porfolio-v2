import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const loadVanta = async () => {
      if (!vantaEffect.current) {
        try {
          // Import Three.js and Vanta
          const THREE = await import('three');
          const VANTA = await import('vanta/dist/vanta.net.min');
          
          // Set colors based on theme
          const backgroundColor = isDark ? 0x111827 : 0xf9fafb; // Dark gray for dark mode, light gray for light mode
          const pointColor = isDark ? 0x6366f1 : 0x6366f1; // Same primary color for both themes
          
          // Initialize Vanta
          vantaEffect.current = VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: pointColor,
            backgroundColor: backgroundColor,
            points: 12.00,
            maxDistance: 20.00,
            spacing: 25.00
          });
        } catch (error) {
          console.error('Failed to load Vanta:', error);
        }
      } else {
        // Update existing Vanta effect with new colors
        const backgroundColor = isDark ? 0x111827 : 0xf9fafb;
        const pointColor = isDark ? 0x6366f1 : 0x6366f1;
        
        vantaEffect.current.setOptions({
          color: pointColor,
          backgroundColor: backgroundColor
        });
      }
    };

    // Add a small delay to ensure the DOM is ready
    const timer = setTimeout(loadVanta, 100);

    return () => {
      clearTimeout(timer);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [isDark]); // Re-run when theme changes

  return (
    <div ref={vantaRef} className="w-full h-full absolute inset-0">
      {children}
    </div>
  );
};

export default VantaBackground;
