/* eslint-disable no-undef */
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = __DEV__
  ? Reactotron
  : { configure: () => {}, createEnhancer: () => {} };

if (__DEV__) {
  const configuration = {
    name: 'React Native Template',
  };

  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];

  configuration.host = scriptHostname;

  reactotron
    .configure(configuration)
    ?.useReactNative({
      asyncStorage: false,
      networking: {
        ignoreUrls: /symbolicate/,
      },
      editor: true,
      errors: true,
    })
    .use(reactotronRedux())
    .connect();
}

export default reactotron;
