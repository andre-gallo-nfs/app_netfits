import os
import sys
import zipfile
import hashlib
import shutil

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

PROJECT_DIR = r"C:\Users\aacga\Projetos\app_netfits"
BACKUP_NAME = "Netfits_Backup_v1.2.0_Dual_Deploy_Segregacao_Bancos_20261008.zip"
DEST_LOCAL = os.path.join(PROJECT_DIR, "backups", BACKUP_NAME)
DEST_ONEDRIVE = os.path.join(r"c:\Users\aacga\OneDrive\netfits\backups", BACKUP_NAME)
DEST_ARTIFACTS = os.path.join(r"C:\Users\aacga\.gemini\antigravity\brain\0c50996a-827d-4c1d-b276-5ffdfd4f7f85", BACKUP_NAME)

EXCLUDE_DIRS = {".git", "node_modules", "dist", ".output", "backups", ".wrangler"}
EXCLUDE_EXTS = {".zip"}

print(f"📦 Criando Snapshot ZIP de Ponto de Recuperação: {BACKUP_NAME}...")

os.makedirs(os.path.join(PROJECT_DIR, "backups"), exist_ok=True)
os.makedirs(r"c:\Users\aacga\OneDrive\netfits\backups", exist_ok=True)

files_added = 0
total_uncompressed_bytes = 0

with zipfile.ZipFile(DEST_LOCAL, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as zipf:
    for root, dirs, files in os.walk(PROJECT_DIR):
        # Excluir pastas desnecessárias
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in EXCLUDE_EXTS:
                continue
            
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, PROJECT_DIR)
            
            try:
                zipf.write(full_path, rel_path)
                files_added += 1
                total_uncompressed_bytes += os.path.getsize(full_path)
            except Exception as e:
                print(f"Aviso ao compactar {rel_path}: {e}")

zip_size = os.path.getsize(DEST_LOCAL)

# Calcular SHA-256
sha256 = hashlib.sha256()
with open(DEST_LOCAL, "rb") as f:
    for chunk in iter(lambda: f.read(65536), b""):
        sha256.update(chunk)
hash_hex = sha256.hexdigest()

print(f"✅ Backup gerado com sucesso!")
print(f"  • Arquivos compactados: {files_added}")
print(f"  • Tamanho descompactado: {total_uncompressed_bytes / (1024*1024):.2f} MB")
print(f"  • Tamanho do ZIP final: {zip_size / (1024*1024):.2f} MB ({zip_size} bytes)")
print(f"  • Hash SHA-256: {hash_hex}")

# Replicar cópias
print("⏳ Replicando para OneDrive e Artefatos...")
shutil.copy2(DEST_LOCAL, DEST_ONEDRIVE)
shutil.copy2(DEST_LOCAL, DEST_ARTIFACTS)

print("🎯 Ponto de recuperação 100% blindado e distribuído em 3 locais seguros!")
