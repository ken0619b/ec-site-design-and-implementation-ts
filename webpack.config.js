const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 開発用設定
  mode: "development",

  // エントリポイント
  entry: "./src/index.tsx",

  // bundle後の js ファイルの出力先
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  // import 時に読み込むファイルの拡張子
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
  },

  // dev server
  devServer: {
    host: 'localhost',
    port: 9000,
    contentBase: path.resolve('static'),
},

  // ソースマップファイルの出力設定
  devtool: "source-map",

  module: {
    rules: [
      // TypeScript ファイル (.ts/.tsx) を変換できるようにする
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    // HTML ファイルの出力設定
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
