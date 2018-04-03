module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            'stage-1',
            'stage-2',
            'es2015',
            'es2017',
            'env'
          ]
        }
      }
    ]
  }
};