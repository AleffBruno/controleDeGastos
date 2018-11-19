// src/index.js

import Home from './Home';
import CreateTask from './createTask';
import Formes6 from './formes6';
import MyForm from './myForm';

import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Home: Home,
  CreateTask: MyForm,
});

export default StackNavigator;
