const { promises: fs } = require("fs");
const path = require("path");

const srcBase = path.resolve(__dirname, "..", "game", "content");
const destBase = path.resolve(__dirname, "..", "docs", "content");

async function copyDir(src, dest) {
  await fs.rm(dest, { recursive: true, force: true });
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function copyContent() {
  await copyDir(srcBase, destBase);
}

if (require.main === module) {
  copyContent()
    .then(() => {
      console.log(`Copied content from ${srcBase} to ${destBase}`);
    })
    .catch((error) => {
      console.error("Failed to copy content:", error);
      process.exitCode = 1;
    });
}

module.exports = { copyContent };
