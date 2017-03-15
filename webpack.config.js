var path = require('path');

module.exports = {
  entry: './index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/javascripts')
  },
  module:{
    rules:[
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use:[
          {
            loader: "babel-loader",
            options: {
              presets: ['env', 'react']
            } 
          }
        ]
      }
    ]
  }
};