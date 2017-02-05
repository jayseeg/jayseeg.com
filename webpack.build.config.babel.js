import webpack from 'webpack'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import CleanWebPackPlugin from 'clean-webpack-plugin'

export default {
  entry: './source/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new CopyWebpackPlugin([
      // Copy glob results, relative to context
      {
        context: 'source',
        from: '**/*',
        to: '',
      },
    ],
    {
      ignore: [
        // Doesn't copy any files with a js extension
        '*.js',
      ],
    }),
    new CleanWebPackPlugin([
      'build'
    ],
    {
      root: path.resolve(__dirname),
      verbose: true,
    }),
  ]
}
