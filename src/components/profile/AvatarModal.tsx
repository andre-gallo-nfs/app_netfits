import React, { useRef } from "react";
import { Camera, Upload, Trash2, X } from "lucide-react";
import { PRESET_AVATARS } from "./profile-constants";
import { toast } from "sonner";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";

interface AvatarModalProps {
  onClose: () => void;
  activeUser: any;
}

export function AvatarModal({ onClose, activeUser }: AvatarModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error("Por favor, selecione uma imagem de até 10MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const rawData = event.target?.result as string;
      if (!rawData) return;
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const size = 256;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const minDim = Math.min(img.width, img.height);
          const sx = (img.width - minDim) / 2;
          const sy = (img.height - minDim) / 2;
          ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size);
          const compressed = canvas.toDataURL("image/jpeg", 0.85);
          sharedSandboxStore.updateUser(activeUser.id, { avatarUrl: compressed });
          onClose();
          toast.success("📸 Sua foto de perfil foi salva e atualizada com sucesso!");
        }
      };
      img.src = rawData;
    };
    reader.readAsDataURL(file);
  };

  const handlePresetSelect = (avatarUrl: string) => {
    sharedSandboxStore.updateUser(activeUser.id, { avatarUrl });
    onClose();
    toast.success("✨ Avatar alterado com sucesso!");
  };

  const handleRemoveAvatar = () => {
    sharedSandboxStore.updateUser(activeUser.id, { avatarUrl: undefined });
    onClose();
    toast.info("Avatar removido. Exibindo suas iniciais.");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-zinc-900 border border-zinc-800 text-white rounded-3xl max-w-sm w-full p-6 space-y-5 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full bg-zinc-800/50 cursor-pointer"
        >
          <X className="size-5" />
        </button>

        <div className="text-center space-y-1">
          <div className="size-12 rounded-full bg-purple-600/20 text-purple-400 mx-auto grid place-items-center mb-2">
            <Camera className="size-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Alterar Foto de Perfil</h3>
          <p className="text-xs text-zinc-400">
            Envie uma foto do seu dispositivo ou escolha um avatar esportivo.
          </p>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept="image/*"
          className="hidden"
        />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs py-3 rounded-2xl transition flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 cursor-pointer"
        >
          <Upload className="size-4" />
          <span>Enviar Foto do Dispositivo / Câmera</span>
        </button>

        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-zinc-800"></div>
          <span className="flex-shrink mx-3 text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
            ou selecione um avatar
          </span>
          <div className="flex-grow border-t border-zinc-800"></div>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {PRESET_AVATARS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => handlePresetSelect(preset.url)}
              className="group relative rounded-xl overflow-hidden aspect-square border border-zinc-800 hover:border-purple-500 transition focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            >
              <img
                src={preset.url}
                alt={preset.label}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-200"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-1 text-center">
                <span className="text-[9px] font-bold text-white leading-tight">{preset.label}</span>
              </div>
            </button>
          ))}
        </div>

        {activeUser.avatarUrl && (
          <button
            type="button"
            onClick={handleRemoveAvatar}
            className="w-full bg-zinc-800 hover:bg-red-950 hover:text-red-400 text-zinc-300 font-medium text-xs py-2.5 rounded-2xl transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Trash2 className="size-3.5" />
            <span>Remover Foto (Usar Iniciais)</span>
          </button>
        )}
      </div>
    </div>
  );
}
