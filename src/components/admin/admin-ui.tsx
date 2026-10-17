import React from "react";
import { Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

export interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon?: React.ComponentType<{ className?: string }> | React.FC<{ className?: string }>;
  subtext: string;
  highlightColor?: string;
  periodBadge?: string;
}

export function KpiCard({
  title,
  value,
  change,
  positive,
  icon: Icon,
  subtext,
  highlightColor,
  periodBadge,
}: KpiCardProps) {
  return (
    <div
      className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl relative overflow-hidden group hover:border-purple-500/50 transition-colors ${
        highlightColor || ""
      }`}
    >
      <div className="flex items-center justify-between mb-3 gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-zinc-300 leading-snug">{title}</span>
          {periodBadge && (
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-purple-300 border border-zinc-700 font-mono shrink-0">
              {periodBadge}
            </span>
          )}
        </div>
        <div className="size-8 rounded-lg bg-zinc-800 grid place-items-center text-lime-400 shrink-0">
          {Icon && typeof Icon === "function" ? (
            <Icon className="size-4" />
          ) : (
            <Activity className="size-4" />
          )}
        </div>
      </div>
      <div className="flex items-baseline gap-2 mb-1 flex-wrap">
        <span className="text-2xl font-extrabold text-white tracking-tight">{value}</span>
        <span className={`text-xs font-bold flex items-center ${positive ? "text-lime-400" : "text-rose-400"}`}>
          {positive ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
          {change}
        </span>
      </div>
      <p className="text-[11px] text-zinc-400 leading-tight">{subtext}</p>
    </div>
  );
}

export function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
  totalItems: number;
  itemsPerPage: number;
}) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-between border-t border-zinc-800 pt-3 text-xs text-zinc-400 font-medium flex-wrap gap-2">
      <span>
        Exibindo {Math.min(totalItems, (currentPage - 1) * itemsPerPage + 1)}–
        {Math.min(totalItems, currentPage * itemsPerPage)} de {totalItems} registros
      </span>
      <div className="flex items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed border border-zinc-700 transition flex items-center gap-1 cursor-pointer"
        >
          Anterior
        </button>
        <span className="font-mono text-white font-bold px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800">
          {currentPage} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed border border-zinc-700 transition flex items-center gap-1 cursor-pointer"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}

export function ParamInput({
  label,
  unit,
  value,
  onChange,
}: {
  label: string;
  unit: string;
  value: number;
  onChange: (v: string) => void;
}) {
  return (
    <div className="bg-zinc-950 p-3 rounded-2xl border border-zinc-800 space-y-1">
      <label className="text-[11px] font-semibold text-zinc-300 block truncate">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          step="any"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-1.5 text-xs text-white font-mono font-bold focus:outline-none focus:ring-1 focus:ring-purple-600"
        />
        <span className="text-[10px] text-zinc-500 font-mono shrink-0">{unit}</span>
      </div>
    </div>
  );
}

