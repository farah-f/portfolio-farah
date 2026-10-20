import { ArrowRight, ArrowDown } from "lucide-react";

export default function ArchDiagram({ blocks, accent }) {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2">
      {blocks.map((b, i) => (
        <div key={b.label} className="flex flex-col sm:flex-row items-center gap-2">
          <div className="bg-white border border-line rounded-xl px-4 py-3 text-center shadow-sm min-w-[110px]">
            <p className={`font-bold text-sm bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
              {b.label}
            </p>
            <p className="text-xs text-muted mt-0.5">{b.sub}</p>
          </div>

          {i < blocks.length - 1 && (
            <>
              <ArrowRight size={18} className="hidden sm:block text-muted shrink-0" />
              <ArrowDown size={18} className="sm:hidden text-muted shrink-0" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}