const { copyContent } = require("./copy-content");
const { promises: fs } = require("fs");
const path = require("path");
const { exec } = require("child_process");

const gameDist = path.resolve(__dirname, "..", "game", "dist");
const docsDir = path.resolve(__dirname, "..", "docs");

async function cleanDocs() {
  await fs.mkdir(docsDir, { recursive: true });
  const entries = await fs.readdir(docsDir, { withFileTypes: true });
  await Promise.all(
    entries
      .filter((entry) => entry.name !== "content")
      .map((entry) => fs.rm(path.join(docsDir, entry.name), { recursive: true, force: true }))
  );
}

async function copyDistToDocs() {
  await fs.mkdir(docsDir, { recursive: true });
  const entries = await fs.readdir(gameDist, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(gameDist, entry.name);
    const destPath = path.join(docsDir, entry.name);
    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function copyDirectory(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

function runBuild() {
  return new Promise((resolve, reject) => {
    exec("npm run build", { maxBuffer: 1024 * 1024 * 5 }, (error, stdout, stderr) => {
      if (stdout) console.log(stdout);
      if (stderr) console.error(stderr);
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
}

async function main() {
  try {
    await runBuild();
    await cleanDocs();
    await copyDistToDocs();
    await copyContent();
    console.log("Docs export ready.");
  } catch (error) {
    console.error("Failed to export docs:", error);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main();
}
