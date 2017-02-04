import webpack from 'webpack'
import path from 'path'
import S3Plugin from 'webpack-s3-plugin'

export default {
  entry: './source/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new S3Plugin({
      s3Options: {
        accesKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-west-1',
      },
      directory: path.resolve(__dirname, 'build'),
      basePath: '',
      s3UploadOptions: {
        Bucket: 'jayseeg.com',
      },
    }),
  ],
}
