import { useEffect, useRef, ReactNode } from "react";

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll(".reveal-item");
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};

export const RevealSection = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export const RevealItem = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <div
    className={`reveal-item opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

// Add CSS for revealed state
const style = document.createElement("style");
style.textContent = `.revealed .reveal-item { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

export default useScrollReveal;
