import { useEffect, useRef, ReactNode } from "react";

export const RevealSection = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll(".reveal-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
};

export const RevealItem = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <div
    className={`reveal-item ${className}`}
    style={{
      opacity: 0,
      transform: "translateY(30px)",
      transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
    }}
  >
    {children}
  </div>
);
