import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { IBuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({
  paths,
  isDev,
}: IBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name][contenthash].css",
      chunkFilename: "css/[name][contenthash].css",
    }),
    new webpack.DefinePlugin({
      _IS_DEV: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];
}
