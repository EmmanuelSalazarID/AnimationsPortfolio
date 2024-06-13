module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          api: './src/api',
          assets: './src/assets',
          components: './src/components',
          config: './src/config',
          context: './src/context',
          hooks: './src/hooks',
          i18n: './src/i18n',
          reactRedux: './src/reactRedux',
          routes: './src/routes',
          screens: './src/screens',
          services: './src/services',
          theme: './src/theme',
          utils: './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
