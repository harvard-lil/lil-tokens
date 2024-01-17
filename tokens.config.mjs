import pluginCSS from "@cobalt-ui/plugin-css";
import pluginJS from "@cobalt-ui/plugin-js";

/** @type {import('@cobalt-ui/core').Config} */
export default {
  tokens: "./tokens.json",
  outDir: "./tokens/",
  plugins: [pluginCSS(/* options */), pluginJS(/* options */)],
};
