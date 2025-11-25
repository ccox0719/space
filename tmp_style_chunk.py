from pathlib import Path
lines = Path('game/style.css').read_text().splitlines()
for i in range(930, 1040):
    print(f"{i+1}: {lines[i]}")
