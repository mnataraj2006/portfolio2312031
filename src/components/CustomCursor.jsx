import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX - 6}px`;
      dot.style.top = `${mouseY - 6}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX - 18) * 0.12;
      ringY += (mouseY - ringY - 18) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animateRing);
    };

    const handleMouseEnter = () => {
      dot.style.transform = "scale(2)";
      ring.style.width = "60px";
      ring.style.height = "60px";
    };

    const handleMouseLeave = () => {
      dot.style.transform = "scale(1)";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    document.addEventListener("mousemove", moveCursor);
    animateRing();

    const interactives = document.querySelectorAll("a, button, [data-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor hidden lg:block" />
      <div ref={ringRef} className="custom-cursor-ring hidden lg:block" />
    </>
  );
};

export default CustomCursor;

