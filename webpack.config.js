module.exports = {
  entry: './app/app.js',
  output: {
    filename: './public/bundle.js',
    path: __dirname 
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', { modules: false }], 'react', 'stage-1']
        }
      },
      ,{
        test: /\.css?$/,
        loader: 'style!css'}
    ]
  },
  resolve: {
    extensions: [' ', '.js', '.jsx']
  },
  watch: true
}
