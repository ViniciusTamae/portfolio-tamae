import { useEffect, useState } from "react";
import "./AgentTrace.css";

type Line = {
  text: string;
  tone: "prompt" | "call" | "ok" | "info";
};

// Trace simulada, mas fiel ao que o agente realmente faz em produção:
// tool calling via LangChain para atendimento no WhatsApp e a otimização
// real do Projeto Maria (3min -> 1min30s).
const LINES: Line[] = [
  { text: '$ agent.run("atendimento-whatsapp")', tone: "prompt" },
  { text: "> tool_call: whatsapp.receive_message()", tone: "call" },
  { text: '> tool_call: crm.lookup_cliente("dpsp")', tone: "call" },
  { text: "< 200 OK · resposta contextualizada · 118ms", tone: "ok" },
  { text: '$ agent.trace.optimize("projeto-maria")', tone: "prompt" },
  { text: "< latência 3min00s → 1min30s (-50%)", tone: "ok" },
  { text: "$ status", tone: "prompt" },
  { text: "< online · pronto para novos agentes", tone: "info" },
];

const TYPE_MS = 18;
const LINE_PAUSE_MS = 260;
const RESTART_PAUSE_MS = 2600;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

type TypeState = { lineIndex: number; charIndex: number };

export function AgentTrace() {
  const reducedMotion = usePrefersReducedMotion();
  const [state, setState] = useState<TypeState>({ lineIndex: 0, charIndex: 0 });

  useEffect(() => {
    if (reducedMotion) return;

    const finished = state.lineIndex >= LINES.length;

    if (finished) {
      const id = setTimeout(() => {
        setState({ lineIndex: 0, charIndex: 0 });
      }, RESTART_PAUSE_MS);
      return () => clearTimeout(id);
    }

    const currentLength = LINES[state.lineIndex].text.length;
    const lineDone = state.charIndex >= currentLength;

    if (lineDone) {
      const id = setTimeout(() => {
        setState({ lineIndex: state.lineIndex + 1, charIndex: 0 });
      }, LINE_PAUSE_MS);
      return () => clearTimeout(id);
    }

    const id = setTimeout(() => {
      setState((prev) => ({ ...prev, charIndex: prev.charIndex + 1 }));
    }, TYPE_MS);
    return () => clearTimeout(id);
  }, [state, reducedMotion]);

  const completedLines = reducedMotion
    ? LINES
    : LINES.slice(0, Math.min(state.lineIndex, LINES.length));

  const activeLine =
    !reducedMotion && state.lineIndex < LINES.length
      ? { ...LINES[state.lineIndex], text: LINES[state.lineIndex].text.slice(0, state.charIndex) }
      : null;

  const showIdleCursor = reducedMotion || state.lineIndex >= LINES.length;

  return (
    <div className="agent-trace card">
      <div className="win-bar">
        <span className="win-dots">
          <span />
          <span />
        </span>
        agent.trace
      </div>
      <pre className="agent-trace-body" aria-live="polite">
        {completedLines.map((line, index) => (
          <span key={index} className={`trace-line trace-${line.tone}`}>
            {line.text}
          </span>
        ))}
        {activeLine && (
          <span className={`trace-line trace-${activeLine.tone}`}>
            {activeLine.text}
            <span className="trace-cursor" />
          </span>
        )}
        {showIdleCursor && <span className="trace-cursor trace-cursor-idle" />}
      </pre>
    </div>
  );
}
