const express = require('express');
const app = express();
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const DashboardPlugin = require('webpack-dashboard/plugin');

const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);
compiler.apply(new DashboardPlugin());

app.use(express.static('build'));

const middleware = webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: webpackConfig.output.publicPath,
  hot: true,
});

app.use(middleware)

app.use(require("webpack-hot-middleware")(compiler));

app.get('*', function response(req, res) {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
  res.end();
});

app.listen(4000, () => {
  console.log('Server listen at port 4000');
})
