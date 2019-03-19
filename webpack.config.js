const libraryTargets = [
  'var', 'assign', 'this', 'window', 'global', 'commonjs', 'commonjs2', 'amd', 'umd', 'jsonp'
];

module.exports = libraryTargets.map(libraryTarget => ({
  mode: 'development',
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: `dist/bundle-${libraryTarget}.js`,
    libraryTarget: libraryTarget
  }
}))
