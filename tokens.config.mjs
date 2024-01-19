import pluginCSS from "@cobalt-ui/plugin-css";
import pluginJS from "@cobalt-ui/plugin-js";
import pluginTailwind from "@cobalt-ui/plugin-tailwind";

const colorTokens = Object.fromEntries(
  ["blue", "green", "red", "yellow", "purple"].map((color) => [
    color,
    {
      50: `color.base.${color}.50`,
      100: `color.base.${color}.100`,
      200: `color.base.${color}.200`,
    },
  ])
);

/** @type {import('@cobalt-ui/core').Config} */
export default {
  tokens: "./tokens.json",
  outDir: "./tokens/",
  plugins: [
    pluginCSS(/* options */),
    pluginJS(/* options */),
    pluginTailwind({
      /** (optional) the path to the Tailwind preset */
      output: "./tailwind-tokens.js",
      /** (optional) module format to use (to match your Tailwind config) */
      outputFormat: "esm" | "cjs",
      tailwind: {
        theme: {
          /** @see https://tailwindcss.com/docs/configuration#theme */
          colors: {
            ...colorTokens,
            white: {
              50: "color.base.white.50",
            },
            gray: {
              50: "color.base.gray.50",
            },
          },
          fontFamily: {
            sansSerifPrimary: "fontStack.sansSerifPrimary",
            sansSerifDisplay: "fontStack.sansSerifDisplay",
            mono: "fontStack.mono",
          },
          spacing: {
            1: "space.4",
            2: "space.8",
            3: "space.12",
            4: "space.16",
            5: "space.20",
            6: "space.24",
          },
        },
      },
    }),
  ],
};
