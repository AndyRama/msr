"use client";
import { useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import { ArrowsH } from "./Icons";

export default function BeforeAfter({ before, after, label }: { before: ReactNode; after: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);

  const move = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r || !r.width) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };
  const down = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    move(e.clientX);
  };
  const up = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  };
  const key = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); setPos((p) => Math.max(0, p - 5)); }
    if (e.key === "ArrowRight") { e.preventDefault(); setPos((p) => Math.min(100, p + 5)); }
    if (e.key === "Home") setPos(0);
    if (e.key === "End") setPos(100);
  };

  return (
    <div
      ref={ref}
      className="ba"
      role="slider"
      tabIndex={0}
      aria-label={`Comparer avant et après : ${label}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      onPointerDown={down}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={up}
      onPointerCancel={up}
      onKeyDown={key}
    >
      <div className="ba-layer">{after}</div>
      <div className="ba-layer" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>{before}</div>
      <span className="ba-tag ba-tag--l">Avant</span>
      <span className="ba-tag ba-tag--r">Après</span>
      <div className="ba-line" style={{ left: `${pos}%` }} aria-hidden="true" />
      <div className="ba-handle" style={{ left: `${pos}%` }} aria-hidden="true"><ArrowsH /></div>
    </div>
  );
}
