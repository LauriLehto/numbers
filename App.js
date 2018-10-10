/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createStackNavigator } from 'react-navigation'

import RandomFact from './src/RandomFact'
import HomeScreen from './src/HomeScreen'
import Question from './src/Question'

export default App = createStackNavigator(
  {
    Home: HomeScreen,
    RandomFact: RandomFact,
    Question: Question
  },
  {
    initialRouteName: 'Home'
  }
)