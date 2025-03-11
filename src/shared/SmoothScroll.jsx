import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // scrolling duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function (optional)
      smoothWheel: true, // smooth scrolling with wheel
      smoothTouch: true, // smooth scrolling on touch devices
    });

    // Animation frame loop for smooth scrolling
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup Lenis on unmount
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}> {/* Just to create scrollable content */}
      <h1>Smooth Scroll with Lenis</h1>
      <p>Scroll to see the smooth scrolling effect!</p>
    </div>
  );
};

export default SmoothScroll;
