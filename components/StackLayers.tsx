"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stackLayers } from "@/data/profile";

export default function StackLayers({ compact = false }: { compact?: boolean }) {
  const [activeId, setActiveId] = useState<string>(stackLayers[0].id);
  const active = stackLayers.find((l) => l.id === activeId) ?? stackLayers[0];

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-start">
      {/* The layers themselves, stacked like an architecture diagram */}
      <div className="flex flex-col-reverse gap-2">
        {stackLayers.map((layer, i) => {
          const isActive = layer.id === activeId;
          return (
            <button
              key={layer.id}
              onClick={() => setActiveId(layer.id)}
              onMouseEnter={() => setActiveId(layer.id)}
              className={`group relative overflow-hidden rounded-xl border px-5 text-left transition-all duration-300 ${
                compact ? "py-3" : "py-4 md:py-5"
              } ${
                isActive
                  ? "border-copper bg-ink-elevated shadow-[0_0_0_1px_rgba(232,163,61,0.3)]"
                  : "border-line bg-ink-soft/40 hover:border-muted"
              }`}
              style={{ zIndex: stackLayers.length - i }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-xs transition-colors ${
                      isActive ? "text-copper" : "text-muted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-base font-medium transition-colors md:text-lg ${
                      isActive ? "text-paper" : "text-muted"
                    }`}
                  >
                    {layer.label}
                  </span>
                </div>
                <span className="hidden font-mono text-xs text-muted sm:inline">
                  {layer.items.length} ferramentas
                </span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="layer-underline"
                  className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-copper via-copper to-transparent"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Detail panel for the active layer */}
      <div className="rounded-xl border border-line bg-ink-elevated/60 p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-copper">
              Camada
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium text-paper md:text-3xl">
              {active.label}
            </h3>
            <p className="mt-2 text-sm text-muted">{active.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {active.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-ink px-3 py-1 font-mono text-xs text-paper/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
