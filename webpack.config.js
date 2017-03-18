var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      },
      {
        test: /\.scss$/,
        use:ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      },{ 
        test: /.woff(2)?$/, 
        loader: "url-loader?limit=10000&minetype=application/font-woff" 
      },
      { 
        test: /.(ttf|eot|svg)$/, 
        loader: "file-loader" 
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: (getPath)=>{
        return getPath('javascripts/styles.css').replace('javascripts/', '../stylesheets/');
      }
    })
  ]
};