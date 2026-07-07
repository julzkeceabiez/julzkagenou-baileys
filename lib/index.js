"use strict";

const chalk = require("chalk");
const path = require("path");
const fs = require("fs");

let terminalImage = null;
try {
  terminalImage = require("terminal-image");
} catch (e) {
  terminalImage = null;
}

const clearConsole = () => {
  process.stdout.write(
    process.platform === "win32"
      ? "\x1B[2J\x1B[0f"
      : "\x1B[2J\x1B[3J\x1B[H"
  );
};

const centerText = (text = "") => {
  const width = process.stdout.columns || 80;
  const clean = String(text);
  const pad = Math.max(0, Math.floor((width - clean.length) / 2));
  return " ".repeat(pad) + clean;
};

async function showConsoleBanner() {
  clearConsole();

  // karena file ini ada di lib/index.js,
  // ".." artinya naik ke root project
  const imagePath = path.join(__dirname, "..", "julz-console.jpg");

  const title = "JULZ KECE CUY";
  const subtitle = "Beli script bot bagus dan panel kenceng hanya di 6281547508744.";

  try {
    if (!terminalImage) {
      console.log(chalk.red(centerText("Module terminal-image belum terinstall.")));
      console.log(chalk.yellow(centerText("Install dulu: npm i terminal-image")));
      console.log("");
      console.log(chalk.hex("#ff69b4").bold(centerText(title)));
      console.log(chalk.whiteBright(centerText(subtitle)));
      console.log("");
      return;
    }

    if (!fs.existsSync(imagePath)) {
      console.log(chalk.red(centerText(`Foto console tidak ditemukan: ${imagePath}`)));
      console.log("");
      console.log(chalk.hex("#ff69b4").bold(centerText(title)));
      console.log(chalk.whiteBright(centerText(subtitle)));
      console.log("");
      return;
    }

    const columns = process.stdout.columns || 80;
    const width = Math.min(60, Math.max(28, columns - 12));

    const rendered = await terminalImage.file(imagePath, {
      width
    });

    console.log(rendered);
    console.log("");
    console.log(chalk.hex("#ff69b4").bold(centerText(title)));
    console.log(chalk.whiteBright(centerText(subtitle)));
    console.log("");
  } catch (err) {
    console.log(chalk.red(centerText(`Gagal render banner console: ${err.message}`)));
    console.log("");
    console.log(chalk.hex("#ff69b4").bold(centerText(title)));
    console.log(chalk.whiteBright(centerText(subtitle)));
    console.log("");
  }
}

showConsoleBanner();

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));

var __exportStar = (this && this.__exportStar) || function(m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) {
      __createBinding(exports, m, p);
    }
  }
};

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;

__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;