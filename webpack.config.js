const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /@?(floating-ui).*\.(ts|js)x?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.m?js/,
        resolve: {
            fullySpecified: false,
        }
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.mjs$/,
        include: /node_modules\/superstruct/,
        type: "javascript/auto",
      }      
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx', 'mjs']
  }
};
