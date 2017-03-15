var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/javascripts')
  },
  module:{
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules)/,
        use:[
          {
            loader: "babel-loader",
            query: {
              presets: ["env", "react"]
            } 
          }
        ]
      }
    ]
  }
};