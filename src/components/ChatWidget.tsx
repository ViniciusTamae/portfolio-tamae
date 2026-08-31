import { useEffect, useRef, useState, type FormEvent } from "react";
import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";
import { ChatIcon, CloseIcon, MinimizeIcon, SendIcon } from "./icons";
import "./ChatWidget.css";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `msg-${idCounter}`;
}

const AI_NAME = "LeticIA";
const firstName = profile.name.split(" ")[0];

async function fetchAssistantReply(message: string, lang: "pt" | "en"): Promise<string> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, lang }),
  });

  if (!response.ok) {
    throw new Error(`Chat API respondeu ${response.status}`);
  }

  const data = (await response.json()) as { reply?: string; error?: string };
  if (!data.reply) {
    throw new Error(data.error ?? "Resposta vazia da API");
  }

  return data.reply;
}

export function ChatWidget() {
  const { lang, t } = useLanguage();

  const greeting: ChatMessage = { id: "greeting", role: "assistant", text: t.chat.greeting(firstName) };
  const fallbackReplies = [t.chat.fallback1(firstName), t.chat.fallback2];

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([greeting]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Se o idioma mudar e a conversa ainda estiver só na saudação inicial,
  // atualiza a saudação pro novo idioma (sem apagar uma conversa em andamento).
  useEffect(() => {
    setMessages((prev) => (prev.length === 1 && prev[0].id === "greeting" ? [greeting] : prev));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!open) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") handleMinimize();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMessage: ChatMessage = { id: nextId(), role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    let replyText: string;
    try {
      replyText = await fetchAssistantReply(trimmed, lang);
    } catch (error) {
      console.error("Falha ao buscar resposta do agente:", error);
      replyText = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
    }

    setMessages((prev) => [...prev, { id: nextId(), role: "assistant", text: replyText }]);
    setIsTyping(false);
  }

  // "-" só minimiza: fecha o painel, mas mantém a conversa como estava.
  function handleMinimize() {
    setOpen(false);
  }

  // "X" limpa a conversa inteira (volta pra saudação inicial) e fecha o painel.
  function handleClear() {
    setMessages([greeting]);
    setInput("");
    setIsTyping(false);
    setOpen(false);
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel card" role="dialog" aria-label={t.chat.dialogLabel(AI_NAME)}>
          <div className="win-bar chat-panel-bar">
            <span className="chat-panel-bar-left">
              <span className="win-dots">
                <span />
                <span />
              </span>
              {t.chat.panelLabel}
            </span>
            <span className="chat-panel-bar-right">
              <span className="chat-status">
                <span className="chat-status-dot" aria-hidden="true" />
                {t.chat.status}
              </span>
              <button
                type="button"
                className="chat-minimize"
                onClick={handleMinimize}
                aria-label={t.chat.minimizeLabel}
                title={t.chat.minimizeLabel}
              >
                <MinimizeIcon />
              </button>
              <button
                type="button"
                className="chat-close"
                onClick={handleClear}
                aria-label={t.chat.clearLabel}
                title={t.chat.clearLabel}
              >
                <CloseIcon />
              </button>
            </span>
          </div>

          <div className="chat-messages" ref={listRef} aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={`chat-bubble chat-bubble-${message.role}`}>
                <span className="chat-bubble-prefix">
                  {message.role === "user" ? "$" : ">"}
                </span>
                {message.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-bubble chat-bubble-assistant">
                <span className="chat-bubble-prefix">&gt;</span>
                <span className="chat-typing-dots" aria-label={t.chat.typingLabel}>
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            )}
          </div>

          <form className="chat-input-row" onSubmit={handleSubmit}>
            <span className="chat-input-prefix">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={t.chat.placeholder}
              className="chat-input"
              aria-label={t.chat.messageLabel}
              disabled={isTyping}
            />
            <button
              type="submit"
              className="chat-send"
              aria-label={t.chat.sendLabel}
              disabled={!input.trim() || isTyping}
            >
              <SendIcon />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chat-fab"
        onClick={() => (open ? handleMinimize() : setOpen(true))}
        aria-expanded={open}
        aria-label={open ? t.chat.minimizeLabel : t.chat.openLabel(AI_NAME)}
      >
        {open ? <MinimizeIcon /> : <ChatIcon />}
        {!open && <span className="chat-fab-status" aria-hidden="true" />}
      </button>
    </div>
  );
}
