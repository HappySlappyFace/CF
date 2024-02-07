const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/favicon", to: "" }, //to the dist root directory
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // You need this, if you are using `import file from "file.ext"`, for `new URL(...)` syntax you don't need it
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
      // We recommend using only for the "production" mode
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        enforce: "pre",
        use: [
          {
            loader: ImageMinimizerPlugin.loader,

            options: {
              minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                  plugins: [
                    "imagemin-pngquant",
                    "imagemin-gifsicle",
                    "imagemin-mozjpeg",
                    "imagemin-svgo",
                  ],
                },
              },
            },
          },
        ],
      },
    ],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(svg|webp)$/i,
  //       type: "asset/resource",
  //     },
  //     {
  //       test: /\.(jpe?g|png|gif)$/i,
  //       use: [
  //         {
  //           loader: ImageMinimizerPlugin.loader,
  //           type: "asset/resource",
  //           options: {
  //             quality: 85,
  //             minimizer: {
  //               implementation: ImageMinimizerPlugin.imageminMinify,
  //               options: {
  //                 plugins: [
  //                   "imagemin-mozjpeg",
  //                   "imagemin-pngquant",
  //                   "imagemin-svgo",
  //                 ],
  //               },
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
};
