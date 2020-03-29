module.exports = function(api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            'assets': './src/assets',
            'components': './src/components',
            'constants': './src/constants',
            'ui': './src/ui',
            'screens': './src/screens',
            'navigation': './src/navigation'
          }
        }
      ]
    ]
  };
};
