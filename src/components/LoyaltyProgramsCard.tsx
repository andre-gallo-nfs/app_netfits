import { useState } from "react";
import { CreditCard, CheckCircle, Sparkles, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export const PARTNER_PROGRAMS = [
  { id: "livelo", name: "Livelo", category: "Banco do Brasil & Bradesco", color: "bg-pink-500/10 text-pink-600 border-pink-500/30" },
  { id: "esfera", name: "Esfera", category: "Santander", color: "bg-red-500/10 text-red-600 border-red-500/30" },
  { id: "iupp", name: "Itaú / iupp", category: "Itaú Unibanco", color: "bg-orange-500/10 text-orange-600 border-orange-500/30" },
  { id: "atomos", name: "Átomos C6", category: "C6 Bank", color: "bg-zinc-800/10 text-zinc-800 dark:text-zinc-200 border-zinc-500/30" },
  { id: "nucoin", name: "Nucoin / Nubank", category: "Nubank", color: "bg-purple-500/10 text-purple-600 border-purple-500/30" },
  { id: "interloop", name: "Inter Loop", category: "Banco Inter", color: "bg-amber-500/10 text-amber-600 border-amber-500/30" },
  { id: "btgloop", name: "BTG Loop", category: "BTG Pactual", color: "bg-blue-600/10 text-blue-600 border-blue-600/30" },
  { id: "caixa", name: "Pontos CAIXA", category: "Caixa Econômica", color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30" },
  { id: "smiles", name: "Smiles", category: "GOL Aéreo", color: "bg-orange-600/10 text-orange-700 border-orange-600/30" },
  { id: "latampass", name: "LATAM Pass", category: "LATAM Aéreo", color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30" },
  { id: "azul", name: "Azul Fidelidade", category: "Azul Aéreo", color: "bg-sky-500/10 text-sky-600 border-sky-500/30" },
  { id: "curtai", name: "CurtaÍ BRB", category: "BRB - Banco de Brasília", color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30" },
  { id: "banriclube", name: "Banriclube", category: "Banrisul", color: "bg-blue-700/10 text-blue-700 border-blue-700/30" },
  { id: "sicredi", name: "Sicredi / Sicoob", category: "Cooperativas de Crédito", color: "bg-teal-500/10 text-teal-600 border-teal-500/30" },
];

export function LoyaltyProgramsCard() {
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>(["livelo", "smiles", "iupp"]);
  const [pointsEstimate, setPointsEstimate] = useState<string>("10.000 a 50.000 pts");
  const [isSaved, setIsSaved] = useState(false);

  const toggleProgram = (id: string) => {
    setSelectedPrograms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
    setIsSaved(false);
  };

  const handleSave = () => {
    setIsSaved(true);
    toast.success("Programas de pontos declarados com sucesso! (+20 nfs bônus de perfil)");
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="size-9 rounded-xl bg-purple-600/10 text-purple-600 grid place-items-center">
            <CreditCard className="size-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-foreground">
              Meus Programas de Fidelidade
            </h3>
            <p className="text-xs text-muted-foreground">
              Declare onde possui pontos para receber campanhas exclusivas de transferência e acúmulo duplo.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-1 max-h-72 overflow-y-auto pr-1 no-scrollbar">
        {PARTNER_PROGRAMS.map((prog) => {
          const isSelected = selectedPrograms.includes(prog.id);
          return (
            <button
              key={prog.id}
              onClick={() => toggleProgram(prog.id)}
              className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                isSelected
                  ? "bg-purple-600/10 border-purple-600/40 ring-1 ring-purple-600/20"
                  : "bg-muted/40 border-border hover:bg-muted"
              }`}
            >
              <div>
                <p className="font-bold text-xs text-foreground">{prog.name}</p>
                <p className="text-[10px] text-muted-foreground">{prog.category}</p>
              </div>
              <div
                className={`size-5 rounded-full grid place-items-center transition-colors ${
                  isSelected ? "bg-purple-600 text-white" : "border border-muted-foreground/30"
                }`}
              >
                {isSelected && <CheckCircle className="size-3.5" />}
              </div>
            </button>
          );
        })}
      </div>

      <div className="pt-2 border-t border-border flex flex-col gap-2">
        <label className="text-xs font-semibold text-foreground flex justify-between">
          <span>Estimativa total de pontos acumulados nos bancos:</span>
          <span className="text-purple-600 font-bold">{pointsEstimate}</span>
        </label>
        <select
          value={pointsEstimate}
          onChange={(e) => {
            setPointsEstimate(e.target.value);
            setIsSaved(false);
          }}
          className="w-full bg-muted border border-border rounded-xl px-3 py-2 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="Até 10.000 pts">Até 10.000 pts</option>
          <option value="10.000 a 50.000 pts">10.000 a 50.000 pts</option>
          <option value="50.000 a 100.000 pts">50.000 a 100.000 pts</option>
          <option value="Acima de 100.000 pts">Acima de 100.000 pts</option>
        </select>
      </div>

      <div className="pt-1">
        <button
          onClick={handleSave}
          disabled={isSaved}
          className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
            isSaved
              ? "bg-zinc-800 text-zinc-400 cursor-not-allowed"
              : "bg-purple-600 text-white hover:bg-purple-700 shadow-md shadow-purple-600/20 active:scale-98"
          }`}
        >
          {isSaved ? (
            <>
              <CheckCircle className="size-4 text-lime-400" />
              Programas Declarados (+20 nfs Creditados)
            </>
          ) : (
            <>
              <Sparkles className="size-4 text-lime-400" />
              Salvar Declaração de Pontos
              <ChevronRight className="size-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
