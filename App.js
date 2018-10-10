/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createStackNavigator } from 'react-navigation'

import RandomFact from './src/RandomFact'
import HomeScreen from './src/HomeScreen'

export default App = createStackNavigator(
  {
    Home: HomeScreen,
    RandomFact: RandomFact,
  },
  {
    initialRouteName: 'Home'
  }
)