const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  if (config.mode === 'development') {
    config.module.rules.push({
      // for TypeScript, change the following to "\.[jt]sx?"
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [
        // ... other loaders
        {
          loader: require.resolve('babel-loader'),
          options: {
            // ... other options
            // DO NOT apply the Babel plugin in production mode!
            plugins: [require.resolve('react-refresh/babel')].filter(Boolean)
          }
        }
      ]
    });
  }

  if (config.mode === 'development') {
    config.plugins.push(new ReactRefreshWebpackPlugin());
  }

  // config.plugins.push([
  //   'module-resolver', {
  //     alias: {
  //       'assets': './src/assets',
  //       'components': './src/components',
  //       'constants': './src/constants',
  //       'ui': './src/ui',
  //       'screens': './src/screens',
  //       'navigation': './src/navigation'
  //     }
  //   }
  // ]);


  // Finally return the new config for the CLI to use.
  return config;
};
