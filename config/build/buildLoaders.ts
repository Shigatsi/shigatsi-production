import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
    /**
     * В отдельную переменную, т.к. важен порядок лоадеров,
     * и было явно видно в каком порядке идут лоадеры.
     * без ts нужен babel-loader
     */
    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module.s[ac]ss$/i,
                        localIdentName: isDev
                            ? "[path][name]__[local]"
                            : "[hash:base64:5]",
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    return [tsLoader, sassLoader, fileLoader, svgLoader];
}
