from pathlib import Path
lines = Path('game/systems/combatSystem.ts').read_text().splitlines()
for i in range(540,620):
    print(f"{i+1:04d}: {lines[i]}")
