import pluginCSS from "@cobalt-ui/plugin-css";
import pluginJS from "@cobalt-ui/plugin-js";
import pluginTailwind from "@cobalt-ui/plugin-tailwind";

// function makeColor(colorName) {
//   const output = {};
//   for (const step of [50, 100, 200]) {
//     output[step] = [colorName, step].join("."); // e.g. `color.blue.50`
//   }
//   return output;
// }

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
            blue: {
              100: "color.base.blue.50",
              200: "color.base.blue.100",
            },
          },
        },
      },
    }),
    // pluginTailwind({
    //   tailwind: {
    //     theme: {
    //       colors: {
    //         blue: makeColor("color.blue"), // { 50: 'color.blue.50', 100: 'color.blue.100', … }
    //         green: makeColor("color.green"), // { 50: 'color.green.50', 100: 'color.green.100', … }
    //         yellow: makeColor("color.yellow"),
    //         purple: makeColor("color.purple"),
    //         gray: makeColor("color.gray"),
    //         red: makeColor("color.red"),
    //       },
    //     },
    //   },
    // }),
  ],
};
