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
    ],
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      }
    ]
  },
  resolve: {
    extensions: [' ', '.js', '.jsx']
  },
  watch: true
}
