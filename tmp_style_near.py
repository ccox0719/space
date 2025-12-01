from pathlib import Path
lines = Path('game/style.css').read_text().splitlines()
for i in range(1038, 1070):
    print(f"{i+1}: {lines[i]}")
