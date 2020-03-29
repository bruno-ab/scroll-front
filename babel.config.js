module.exports = function(api) {
  api.cache(true);
  const isDevelopment = process.env.NODE_ENV !== 'production';

  return {
    presets: ['babel-preset-expo']
  }
};
