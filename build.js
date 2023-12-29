const esbuild = require("esbuild");

async function build() { 
  await esbuild.build({
    entryPoints: ["./src/index.html", "./src/_app.css", "./src/_app.tsx"],
    bundle: true,
    outdir: "dist",
    platform: "browser",
    loader: {".html": "copy"},
    format: "iife",
    sourcemap: true,
  });
}

build()
