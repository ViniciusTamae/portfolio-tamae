import { cloneElement, isValidElement, useEffect, useRef, useState, type ReactElement } from "react";

type RevealItemProps = {
  children: ReactElement;
  delay?: number;
};

// Clona o elemento filho pra anexar ref + classe de revelação, sem
// adicionar nenhum <div> extra no DOM — importante pra não quebrar grids/
// flex que dependem dos filhos diretos (timeline, cards de projeto, etc.).
export function RevealItem({ children, delay = 0 }: RevealItemProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!isValidElement(children)) return children;

  const props = children.props as { className?: string; style?: React.CSSProperties };
  const className = [props.className, "reveal-item", visible && "reveal-visible"]
    .filter(Boolean)
    .join(" ");

  return cloneElement(children, {
    ref,
    className,
    style: { ...props.style, transitionDelay: delay ? `${delay}ms` : undefined },
  } as Partial<unknown>);
}
