import type { ReactNode } from "react";

// Os dois pontos de status do "chrome" de janela — repetidos, antes desta
// extração, em 8 componentes diferentes (about.md, contato.sh, stack.tree,
// hackathon.md, agent.trace, operator.png, o drawer mobile e o chat).
export function WinDots() {
  return (
    <span className="win-dots">
      <span />
      <span />
    </span>
  );
}

type WinBarProps = {
  children: ReactNode;
  className?: string;
};

// Barra de "janela" de terminal completa: dots + rótulo. Cobre o caso comum
// (a maioria dos painéis); quando o layout precisa de algo à direita dos
// dots (o chat, com status e botões), o chamador monta a barra à mão
// reaproveitando só o <WinDots />.
export function WinBar({ children, className }: WinBarProps) {
  return (
    <div className={className ? `win-bar ${className}` : "win-bar"}>
      <WinDots />
      {children}
    </div>
  );
}
