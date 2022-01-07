module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { 'runtime': 'automatic' }],
    '@babel/preset-typescript'
  ],
  plugins: [['@babel/transform-runtime', { 'regenerator': true }]]
};
