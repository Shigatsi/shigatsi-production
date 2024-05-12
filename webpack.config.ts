import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";
import { IEnvOptions } from "./config/build/types/config";

export default (env: IEnvOptions) => {
  const MODE = env.mode || "development";
  const PATHS = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src"),
  };
  const PORT = env.port || 4000;
  const isDev = MODE === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode: MODE,
    paths: PATHS,
    port: PORT,
    isDev: isDev,
  });
  return config;
};
