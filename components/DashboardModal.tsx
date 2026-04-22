"use client";

import { useEffect } from "react";

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DashboardModal({ isOpen, onClose }: DashboardModalProps) {
  // Previne scroll da página quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay escuro */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Container do Modal */}
      <div className="relative w-[95vw] h-[90vh] max-w-7xl bg-gray-50 rounded-2xl shadow-2xl overflow-hidden">
        {/* Barra superior do modal */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-muted ml-2">Dashboard Analytics - Demonstração</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Iframe com o Dashboard */}
        <iframe
          src="/dashboard"
          className="w-full h-full pt-10"
          style={{ border: "none" }}
          title="Dashboard Analytics Demo"
        />
      </div>
    </div>
  );
}