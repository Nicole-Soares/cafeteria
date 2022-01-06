/**
 * @format
 */


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

process.env.TZ='America/Argentina/Buenos_Aires';
AppRegistry.registerComponent(appName, () => App);
