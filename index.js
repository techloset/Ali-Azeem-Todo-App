/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// Root.js

// import React from 'react';
// import {Provider} from 'react-redux';
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import store from './src/redux/store/Store'; // Import your Redux store

// const Root = () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };

// AppRegistry.registerComponent(appName, () => Root);
