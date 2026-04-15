"use client";

import { createContext, useContext, useRef, useState } from "react";

const ToastContext = createContext(null);

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timeoutMap = useRef(new Map());

  function dismissToast(id) {
    setToasts((current) => current.filter((toast) => toast.id !== id));

    const timeoutId = timeoutMap.current.get(id);
    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutMap.current.delete(id);
    }
  }

  function showToast(message) {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    setToasts((current) => [...current, { id, message }]);

    const timeoutId = window.setTimeout(() => {
      dismissToast(id);
    }, 2800);

    timeoutMap.current.set(id, timeoutId);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="pointer-events-none fixed inset-x-4 top-24 z-[80] flex flex-col items-end gap-3 sm:inset-x-6">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="toast-card pointer-events-auto w-full max-w-sm rounded-[24px] border border-black/10 bg-white/95 p-4 shadow-2xl backdrop-blur md:p-5"
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-primary text-sm font-extrabold text-white">
                +
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-primary">
                  Added
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-brand-black">
                  {toast.message}
                </p>
              </div>
              <button
                type="button"
                onClick={() => dismissToast(toast.id)}
                className="rounded-full p-2 text-black/45 transition hover:bg-black/5 hover:text-brand-black"
                aria-label="Dismiss toast"
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
}
