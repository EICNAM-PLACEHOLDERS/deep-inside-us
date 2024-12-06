const webpack = require('webpack');
const dotenv = require('dotenv');

// Charge les variables .env
const env = dotenv.config().parsed;

module.exports = {
  // Autres configurations Webpack...
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    }),
  ],
};