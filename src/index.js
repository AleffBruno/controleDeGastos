// src/index.js

import Home from './Home';
import CreateTask from './createTask';

import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Home: Home,
  CreateTask: CreateTask,
});

//export default { StackNavigator };
export default StackNavigator;

// import React, {Component} from 'react';
// import {Button } from 'react-native';

// import { createStackNavigator } from 'react-navigation';
// import HomeScreen from './Page1';

// const App = createStackNavigator({
//   Home: HomeScreen
// });

// export default App;

  