import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import config from "sapper/config/rollup.js";
import pkg from "./package.json";
import { markdown } from "svelte-preprocess-markdown";
import { string } from "rollup-plugin-string";
import json from "rollup-plugin-json";
import alias from "@rollup/plugin-alias";
import path from "path";
import sveltePreprocess from "svelte-preprocess";

const preprocess = sveltePreprocess({
  postcss: {
    plugins: [require("autoprefixer")]
  },
  less: {
    javascriptEnabled: true
  }
});

const { generateFromPath } = require("./scripts/generateCodeText");

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

const dedupe = importee =>
  importee === "svelte" || importee.startsWith("svelte/");

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        extensions: [".svelte", ".md"],
        preprocess: {
          ...preprocess,
          ...markdown()
        }
      }),
      resolve({
        browser: true,
        dedupe
      }),
      string({
        include: "**/*.txt"
      }),
      alias({
        entries: {
          "@": path.join(__dirname, "../src"),
          svant: path.join(__dirname, "../src/components"),
          docs: path.join(__dirname, "../docs")
        }
      }),
      commonjs(),
      json(),

      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte", "md"],
          runtimeHelpers: true,
          exclude: ["node_modules/@babel/**"],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, not dead"
              }
            ]
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            [
              "@babel/plugin-transform-runtime",
              {
                useESModules: true
              }
            ]
          ]
        }),

      !dev &&
        terser({
          module: true
        })
    ],

    onwarn
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      svelte({
        generate: "ssr",
        dev,
        extensions: [".svelte", ".md"],
        preprocess: {
          ...preprocess,
          ...markdown()
        }
      }),
      resolve({
        dedupe
      }),
      alias({
        entries: {
          "@": path.join(__dirname, "../src"),
          svant: path.join(__dirname, "../src/components"),
          docs: path.join(__dirname, "../docs")
        }
      }),
      commonjs(),
      json(),

      string({
        include: "**/*.txt"
      }),
      {
        watchChange(id) {
          generateFromPath(id);
        }
      }
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives"))
    ),

    onwarn
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      commonjs(),
      !dev && terser()
    ],

    onwarn
  }
};
