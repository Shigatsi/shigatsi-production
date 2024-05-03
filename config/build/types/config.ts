type BuildMode = "development" | "production";

interface IBuildPaths {
  entry: string;
  output: string;
  html: string;
}
export interface IBuildOptions {
  mode: BuildMode;
  paths: IBuildPaths;
  port: number;
  isDev: boolean;
}

export interface IEnvOptions {
  port: number;
  mode: BuildMode;
}
