// components/WhatsAppFloat.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5547999322636"; 

const DEFAULT_MESSAGE = "Olá! Vim pelo site da Sercil e gostaria de conversar sobre um projeto.";

const TOOLTIP_TEXT = "FALE CONOSCO PELO WHATSAPP";

// Tempo (ms) que o balão fica visível automaticamente ao carregar
const TOOLTIP_AUTO_HIDE_MS = 5000;

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const hasInteractedRef = useRef(false);

  // Auto-mostrar o balão por alguns segundos ao carregar a página
  useEffect(() => {
    setShowTooltip(true);
    const timer = setTimeout(() => {
      // Só esconde automaticamente se o usuário ainda não interagiu
      if (!hasInteractedRef.current) {
        setShowTooltip(false);
      }
    }, TOOLTIP_AUTO_HIDE_MS);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  function handleClick() {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "floating_button",
      });
    }
  }

  function handleShow() {
    hasInteractedRef.current = true;
    setShowTooltip(true);
  }

  function handleHide() {
    setShowTooltip(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Balão / Tooltip */}
      <div
        aria-hidden="true"
        className={`relative mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 ${
          showTooltip
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        {TOOLTIP_TEXT}
        {/* Seta apontando para o botão */}
        <span
          className="absolute -right-1.5 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[6px] border-y-transparent border-l-[6px] border-l-gray-900"
          aria-hidden="true"
        />
      </div>

      {/* Botão do WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={handleShow}
        onMouseLeave={handleHide}
        onFocus={handleShow}
        onBlur={handleHide}
        aria-label="Falar com a Sercil no WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.364.625 4.584 1.714 6.51L2.667 29.333l6.99-1.677A13.27 13.27 0 0 0 16.003 29.333C23.37 29.333 29.333 23.37 29.333 16S23.37 2.667 16.003 2.667zm0 2.666c5.892 0 10.667 4.775 10.667 10.667s-4.775 10.667-10.667 10.667c-1.958 0-3.792-.536-5.375-1.474l-.385-.225-4.146.994.994-4.042-.23-.39A10.6 10.6 0 0 1 5.333 16c0-5.892 4.775-10.667 10.67-10.667zm-3.49 5.28c-.19 0-.5.073-.762.365-.26.292-1 .974-1 2.375s1.02 2.755 1.162 2.947c.142.192 1.98 3.147 4.87 4.28 2.4.94 2.89.753 3.41.706.52-.047 1.68-.687 1.916-1.35.235-.663.235-1.232.165-1.35-.07-.12-.26-.19-.54-.33-.28-.14-1.68-.83-1.94-.924-.26-.094-.45-.14-.64.14-.19.28-.73.924-.895 1.115-.165.19-.33.213-.61.073-.28-.14-1.18-.435-2.25-1.388-.83-.74-1.39-1.654-1.55-1.934-.16-.28-.017-.43.123-.57.126-.125.28-.33.42-.495.14-.165.187-.28.28-.467.094-.187.047-.35-.023-.49-.07-.14-.63-1.54-.865-2.11-.228-.55-.46-.475-.63-.484l-.54-.01z" />
        </svg>
      </a>
    </div>
  );
}