const VIRTUAL_WIDTH = 320;
const VIRTUAL_HEIGHT = 180;

interface Star {
  x: number;
  y: number;
  size: number;
}

interface StarLayer {
  count: number;
  speed: number;
  color: string;
  stars: Star[];
}

interface NebulaBand {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  alpha: number;
}

interface ShipState {
  x: number;
  y: number;
  bobAmplitude: number;
  bobSpeed: number;
  enginePulseSpeed: number;
}

type SceneMode = "space" | "combat" | "mining" | "hangar" | "ops";

let canvasRef: HTMLCanvasElement | null = null;
let ctxRef: CanvasRenderingContext2D | null = null;
let currentScene: SceneMode = "space";
let previousScene: SceneMode | null = null;
let transitionProgress = 1;

const TRANSITION_DURATION = 450; // ms

const starLayers: StarLayer[] = [
  { count: 70, speed: 0.05, color: "#556", stars: [] },
  { count: 50, speed: 0.12, color: "#889", stars: [] },
  { count: 35, speed: 0.25, color: "#ccd", stars: [] }
];

const nebulaBands: NebulaBand[] = [];

const ship: ShipState = {
  x: VIRTUAL_WIDTH * 0.55,
  y: VIRTUAL_HEIGHT * 0.48,
  bobAmplitude: 2,
  bobSpeed: 1,
  enginePulseSpeed: 4
};

function initStars(): void {
  for (const layer of starLayers) {
    layer.stars = [];
    for (let i = 0; i < layer.count; i++) {
      layer.stars.push({
        x: Math.random() * VIRTUAL_WIDTH,
        y: Math.random() * VIRTUAL_HEIGHT,
        size: Math.random() < 0.6 ? 1 : 2
      });
    }
  }
}

function initNebula(): void {
  nebulaBands.length = 0;
  for (let i = 0; i < 4; i++) {
    nebulaBands.push({
      x: Math.random() * VIRTUAL_WIDTH,
      y: VIRTUAL_HEIGHT / 4 + i * 20 + (Math.random() * 10 - 5),
      width: 140 + Math.random() * 80,
      height: 32 + Math.random() * 16,
      speed: 0.02 + Math.random() * 0.03,
      alpha: 0.12 + Math.random() * 0.12
    });
  }
}

export function initPixelBackground(canvas: HTMLCanvasElement): void {
  canvasRef = canvas;
  ctxRef = canvas.getContext("2d");
  if (!ctxRef) return;
  canvas.width = VIRTUAL_WIDTH;
  canvas.height = VIRTUAL_HEIGHT;
  ctxRef.imageSmoothingEnabled = false;
  initStars();
  initNebula();
}

export function setPixelScene(mode: SceneMode): void {
  if (mode === currentScene) {
    // Avoid restarting an in-flight transition for the same scene.
    if (!previousScene) return;
    if (transitionProgress < 1) return;
  }
  previousScene = currentScene;
  currentScene = mode;
  transitionProgress = 0;
}

export function updatePixelBackground(dt: number): void {
  if (!ctxRef) return;
  const tScale = dt / 16.6667; // normalize against ~60fps

  if (transitionProgress < 1) {
    transitionProgress = Math.min(1, transitionProgress + dt / TRANSITION_DURATION);
    if (transitionProgress >= 1) {
      previousScene = null;
    }
  }

  for (const band of nebulaBands) {
    band.x -= band.speed * tScale;
    if (band.x + band.width < -20) {
      band.x = VIRTUAL_WIDTH + 20;
      band.y = VIRTUAL_HEIGHT / 4 + Math.random() * (VIRTUAL_HEIGHT / 2);
    }
  }

  for (const layer of starLayers) {
    for (const star of layer.stars) {
      star.x -= layer.speed * tScale;
      if (star.x < 0) {
        star.x = VIRTUAL_WIDTH;
        star.y = Math.random() * VIRTUAL_HEIGHT;
      }
    }
  }
}

export function drawPixelBackground(
  ctx: CanvasRenderingContext2D | null = ctxRef,
  time: number = performance.now()
): void {
  if (!ctx) return;
  ctx.save();
  ctx.imageSmoothingEnabled = false;

  const hasTransition = previousScene !== null && transitionProgress < 1;
  const eased = easeInOut(transitionProgress);

  if (hasTransition) {
    // Old scene fades/zooms out.
    drawScene(ctx, previousScene as SceneMode, time, {
      alpha: 1 - eased,
      scale: 1 + 0.05 * eased
    });
    // New scene fades/zooms in.
    drawScene(ctx, currentScene, time, {
      alpha: eased,
      scale: 1.04 - 0.04 * eased
    });
  } else {
    drawScene(ctx, currentScene, time);
  }

  ctx.restore();
}

function drawScene(
  ctx: CanvasRenderingContext2D,
  mode: SceneMode,
  time: number,
  opts: { alpha?: number; scale?: number } = {}
): void {
  const alpha = opts.alpha ?? 1;
  const scale = opts.scale ?? 1;

  ctx.save();
  ctx.globalAlpha = alpha;
  if (scale !== 1) {
    ctx.translate(VIRTUAL_WIDTH / 2, VIRTUAL_HEIGHT / 2);
    ctx.scale(scale, scale);
    ctx.translate(-VIRTUAL_WIDTH / 2, -VIRTUAL_HEIGHT / 2);
  }

  switch (mode) {
    case "mining":
      drawMiningBackdrop(ctx);
      break;
    case "hangar":
      drawHangarBackdrop(ctx, time);
      break;
    case "ops":
      drawOpsBackdrop(ctx, time);
      break;
    default:
      drawSpaceBackdrops(ctx, time);
      break;
  }

  drawSpaceDust(ctx, mode);
  if (mode === "combat") {
    drawCombatTint(ctx);
  }

  ctx.restore();
}

function drawSpaceBackdrops(ctx: CanvasRenderingContext2D, time: number): void {
  ctx.fillStyle = "#02030b";
  ctx.fillRect(0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);
  drawNebulaAndStars(ctx, time);
}

function drawNebulaAndStars(ctx: CanvasRenderingContext2D, time: number): void {
  for (const band of nebulaBands) {
    const gradient = ctx.createLinearGradient(
      band.x,
      band.y,
      band.x + band.width,
      band.y + band.height
    );
    const baseAlpha = band.alpha * (0.8 + 0.2 * Math.sin(time * 0.0002));
    gradient.addColorStop(0, `rgba(40, 80, 140, ${baseAlpha})`);
    gradient.addColorStop(0.5, `rgba(60, 130, 200, ${baseAlpha * 1.4})`);
    gradient.addColorStop(1, `rgba(10, 40, 90, ${baseAlpha})`);

    ctx.fillStyle = gradient;
    ctx.fillRect(Math.floor(band.x), Math.floor(band.y), Math.floor(band.width), Math.floor(band.height));
  }

  for (const layer of starLayers) {
    ctx.fillStyle = layer.color;
    for (const star of layer.stars) {
      ctx.fillRect(Math.round(star.x), Math.round(star.y), star.size, star.size);
    }
  }
}

function drawShip(ctx: CanvasRenderingContext2D, time: number): void {
  const bob = Math.sin(time * 0.001 * ship.bobSpeed) * ship.bobAmplitude;
  const baseX = ship.x;
  const baseY = ship.y + bob;

  const hullDark = "#10161d";
  const hullMid = "#272f3c";
  const hullLight = "#3b4758";
  const hazard = "#c88a2b";
  const windowColor = "#99c8ff";
  const gunDark = "#090c12";

  const hullWidth = 110;
  const hullHeight = 26;
  const hullX = baseX - hullWidth / 2;
  const hullY = baseY - hullHeight / 2;

  ctx.fillStyle = hullMid;
  ctx.fillRect(Math.round(hullX), Math.round(hullY), hullWidth, hullHeight);

  ctx.fillStyle = hullDark;
  ctx.fillRect(Math.round(hullX), Math.round(hullY + hullHeight / 2), hullWidth, Math.round(hullHeight / 2));

  ctx.fillStyle = hullLight;
  ctx.fillRect(Math.round(hullX + 4), Math.round(hullY - 4), hullWidth - 16, 6);

  const bowX = hullX - 18;
  const bowY = hullY + 4;
  const bowW = 22;
  const bowH = hullHeight - 8;

  ctx.fillStyle = hullMid;
  ctx.fillRect(Math.round(bowX), Math.round(bowY), bowW, bowH);

  ctx.fillStyle = hullDark;
  ctx.fillRect(Math.round(bowX - 4), Math.round(bowY + 4), 4, bowH - 8);

  ctx.fillStyle = gunDark;
  ctx.fillRect(Math.round(bowX + 8), Math.round(bowY + bowH - 4), 8, 2);
  ctx.fillRect(Math.round(bowX + 10), Math.round(bowY + bowH), 6, 1);

  ctx.fillStyle = hullDark;
  ctx.fillRect(Math.round(hullX + 26), Math.round(hullY - 10), 32, 10);
  ctx.fillStyle = hullLight;
  ctx.fillRect(Math.round(hullX + 28), Math.round(hullY - 8), 28, 4);

  ctx.fillStyle = hullDark;
  ctx.fillRect(Math.round(hullX + 38), Math.round(hullY + hullHeight), 40, 10);
  ctx.fillStyle = hullMid;
  ctx.fillRect(Math.round(hullX + 40), Math.round(hullY + hullHeight + 1), 36, 7);

  ctx.fillStyle = hullDark;
  ctx.fillRect(Math.round(hullX + 70), Math.round(hullY + 3), 20, hullHeight - 6);

  const bridgeW = 34;
  const bridgeH = 18;
  const bridgeX = hullX + hullWidth - bridgeW - 10;
  const bridgeY = hullY - 8;

  ctx.fillStyle = hullMid;
  ctx.fillRect(Math.round(bridgeX), Math.round(bridgeY), bridgeW, bridgeH);
  ctx.fillStyle = hullLight;
  ctx.fillRect(Math.round(bridgeX + 4), Math.round(bridgeY + 3), bridgeW - 8, 6);

  ctx.fillStyle = windowColor;
  for (let i = 0; i < 5; i++) {
    ctx.fillRect(Math.round(bridgeX + 6 + i * 4), Math.round(bridgeY + 4), 2, 2);
  }

  ctx.fillStyle = hullDark;
  ctx.fillRect(Math.round(bridgeX + bridgeW - 5), Math.round(bridgeY - 10), 2, 10);
  ctx.fillRect(Math.round(bridgeX + bridgeW - 9), Math.round(bridgeY - 7), 2, 7);
  ctx.fillRect(Math.round(bridgeX + bridgeW - 13), Math.round(bridgeY - 6), 2, 6);
  ctx.fillRect(Math.round(bridgeX + 4), Math.round(bridgeY - 4), 3, 4);

  const engineBlockW = 40;
  const engineBlockH = hullHeight;
  const engineBlockX = hullX + hullWidth;
  const engineBlockY = hullY;

  ctx.fillStyle = hullDark;
  ctx.fillRect(Math.round(engineBlockX), Math.round(engineBlockY), engineBlockW, engineBlockH);

  const engineRadius = 6;
  const engineSpacing = 10;
  const centerEngineY = engineBlockY + engineBlockH / 2;
  const pulse = 0.6 + 0.4 * Math.sin(time * 0.0015 * ship.enginePulseSpeed);

  const drawEngine = (offsetY: number) => {
    const ex = engineBlockX + engineBlockW - 3;
    const ey = centerEngineY + offsetY;

    ctx.fillStyle = hullMid;
    ctx.fillRect(Math.round(ex - engineRadius), Math.round(ey - engineRadius + 1), engineRadius, engineRadius * 2 - 2);

    const glow = ctx.createLinearGradient(ex - engineRadius, ey, ex + 30, ey);
    const alpha = 0.8 * pulse;
    glow.addColorStop(0.0, `rgba(150, 255, 255, ${alpha})`);
    glow.addColorStop(0.3, `rgba(60, 220, 230, ${alpha * 0.9})`);
    glow.addColorStop(1.0, `rgba(5, 40, 60, 0)`);

    ctx.fillStyle = glow;
    ctx.fillRect(Math.round(ex), Math.round(ey - 3), 32, 6);
  };

  drawEngine(-engineSpacing);
  drawEngine(0);
  drawEngine(engineSpacing);

  ctx.fillStyle = "#e5f3ff";
  for (let i = 0; i < 7; i++) {
    const lx = hullX + 10 + i * 12;
    const ly = hullY - 2;
    if (Math.random() > 0.07) {
      ctx.fillRect(Math.round(lx), Math.round(ly), 1, 2);
    }
  }

  ctx.fillStyle = hazard;
  ctx.fillRect(Math.round(hullX + 24), Math.round(hullY + 4), 4, 2);
  ctx.fillRect(Math.round(hullX + 52), Math.round(hullY + hullHeight - 6), 4, 2);
  ctx.fillRect(Math.round(bridgeX + bridgeW - 8), Math.round(bridgeY + bridgeH - 4), 3, 2);

  ctx.fillStyle = windowColor;
  for (let i = 0; i < 10; i++) {
    const wx = hullX + 10 + i * 9;
    const wy = hullY + hullHeight - 5 + (i % 2 === 0 ? 0 : -2);
    if (Math.random() > 0.1) {
      ctx.fillRect(Math.round(wx), Math.round(wy), 1, 1);
    }
  }
}

function drawSpaceDust(ctx: CanvasRenderingContext2D, mode: SceneMode): void {
  const density = mode === "mining" ? 40 : mode === "hangar" || mode === "ops" ? 12 : 25;
  const color =
    mode === "mining"
      ? "rgba(200,180,150,0.2)"
      : mode === "hangar"
      ? "rgba(120,180,220,0.12)"
      : mode === "ops"
      ? "rgba(80,200,200,0.12)"
      : "rgba(255,255,255,0.1)";
  ctx.fillStyle = color;
  for (let i = 0; i < density; i++) {
    const x = Math.random() * VIRTUAL_WIDTH;
    const y = Math.random() * VIRTUAL_HEIGHT;
    ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
  }
}

function drawMiningBackdrop(ctx: CanvasRenderingContext2D): void {
  ctx.fillStyle = "#0a0604";
  ctx.fillRect(0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);

  const strataColors = ["#1a100b", "#120c08", "#22130c", "#181008"];
  for (let i = 0; i < 6; i++) {
    const y = i * (VIRTUAL_HEIGHT / 6);
    ctx.fillStyle = strataColors[i % strataColors.length];
    ctx.fillRect(0, Math.floor(y), VIRTUAL_WIDTH, Math.ceil(VIRTUAL_HEIGHT / 6));
  }

  ctx.fillStyle = "#0f0b09";
  ctx.fillRect(40, 20, VIRTUAL_WIDTH - 80, VIRTUAL_HEIGHT - 40);

  const glow = ctx.createLinearGradient(0, VIRTUAL_HEIGHT / 2, VIRTUAL_WIDTH, VIRTUAL_HEIGHT / 2);
  glow.addColorStop(0, "rgba(90, 70, 40, 0.1)");
  glow.addColorStop(0.5, "rgba(200, 160, 90, 0.12)");
  glow.addColorStop(1, "rgba(90, 70, 40, 0.1)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);
}

function drawCombatTint(ctx: CanvasRenderingContext2D): void {
  const overlay = ctx.createLinearGradient(0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);
  overlay.addColorStop(0, "rgba(60, 0, 0, 0.15)");
  overlay.addColorStop(1, "rgba(120, 0, 0, 0.25)");
  ctx.fillStyle = overlay;
  ctx.fillRect(0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);
}

function drawHangarBackdrop(ctx: CanvasRenderingContext2D, time: number): void {
  ctx.fillStyle = "#04060a";
  ctx.fillRect(0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);

  const verticalGlow = ctx.createLinearGradient(0, 0, 0, VIRTUAL_HEIGHT);
  verticalGlow.addColorStop(0, "rgba(40, 80, 130, 0.3)");
  verticalGlow.addColorStop(0.35, "rgba(30, 60, 100, 0.35)");
  verticalGlow.addColorStop(1, "rgba(10, 20, 40, 0.45)");
  ctx.fillStyle = verticalGlow;
  ctx.fillRect(0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);

  // Door light pulses.
  const doorPulse = 0.4 + 0.2 * Math.sin(time * 0.002);
  ctx.fillStyle = `rgba(120, 200, 255, ${doorPulse})`;
  ctx.fillRect(VIRTUAL_WIDTH / 2 - 60, 12, 120, 6);

  ctx.fillStyle = "#0c1420";
  ctx.fillRect(0, VIRTUAL_HEIGHT - 46, VIRTUAL_WIDTH, 18);

  // Floor parallax stripes.
  ctx.fillStyle = "#0f1a28";
  for (let i = 0; i < 7; i++) {
    const y = VIRTUAL_HEIGHT - 26 + i * 3;
    ctx.fillRect(0, y, VIRTUAL_WIDTH, 1);
  }

  ctx.fillStyle = "#1a2838";
  for (let x = 0; x < VIRTUAL_WIDTH; x += 22) {
    ctx.fillRect(x, VIRTUAL_HEIGHT - 44, 10, 44);
  }

  // Catwalk silhouettes.
  ctx.fillStyle = "rgba(70, 140, 190, 0.3)";
  ctx.fillRect(40, 46, VIRTUAL_WIDTH - 80, 10);
  ctx.fillRect(40, 70, VIRTUAL_WIDTH - 80, 6);
}

function drawOpsBackdrop(ctx: CanvasRenderingContext2D, time: number): void {
  ctx.fillStyle = "#021014";
  ctx.fillRect(0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);

  const radial = ctx.createRadialGradient(
    VIRTUAL_WIDTH / 2,
    VIRTUAL_HEIGHT * 0.45,
    10,
    VIRTUAL_WIDTH / 2,
    VIRTUAL_HEIGHT / 2,
    VIRTUAL_HEIGHT
  );
  radial.addColorStop(0, "rgba(20, 160, 160, 0.4)");
  radial.addColorStop(0.6, "rgba(10, 80, 90, 0.25)");
  radial.addColorStop(1, "rgba(0, 20, 30, 0.5)");
  ctx.fillStyle = radial;
  ctx.fillRect(0, 0, VIRTUAL_WIDTH, VIRTUAL_HEIGHT);

  // Grid lines.
  ctx.strokeStyle = "rgba(60, 200, 200, 0.2)";
  ctx.lineWidth = 1;
  for (let x = 20; x < VIRTUAL_WIDTH; x += 20) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, VIRTUAL_HEIGHT);
    ctx.stroke();
  }
  for (let y = 20; y < VIRTUAL_HEIGHT; y += 20) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(VIRTUAL_WIDTH, y);
    ctx.stroke();
  }

  // Radar sweep.
  const sweep = (time * 0.002) % (Math.PI * 2);
  const cx = VIRTUAL_WIDTH / 2;
  const cy = VIRTUAL_HEIGHT / 2;
  const radius = 80;
  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
  gradient.addColorStop(0, "rgba(80, 220, 200, 0.18)");
  gradient.addColorStop(1, "rgba(10, 40, 40, 0)");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.arc(cx, cy, radius, sweep, sweep + Math.PI / 4);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "rgba(100, 240, 220, 0.35)";
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();

  // Blip points.
  ctx.fillStyle = "rgba(120, 250, 230, 0.8)";
  const blips = [
    { x: cx + 26, y: cy - 18 },
    { x: cx - 30, y: cy + 14 },
    { x: cx + 6, y: cy + 32 }
  ];
  for (const blip of blips) {
    ctx.fillRect(Math.round(blip.x), Math.round(blip.y), 2, 2);
  }
}

function easeInOut(t: number): number {
  return t * t * (3 - 2 * t);
}

export function getPixelBackgroundCanvas(): HTMLCanvasElement | null {
  return canvasRef;
}
