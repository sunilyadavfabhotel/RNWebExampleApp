/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

AppRegistry.registerComponent('RNWebExampleApp', () => App);
AppRegistry.runApplication('RNWebExampleApp', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
