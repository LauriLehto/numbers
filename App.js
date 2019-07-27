import { createStackNavigator, createAppContainer } from "react-navigation";

import RandomFact from "./src/RandomFact";
import HomeScreen from "./src/HomeScreen";
import FavNumber from "./src/FavNumber";
import Quiz from "./src/Quiz";



const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    RandomFact: RandomFact,
    FavNumber: FavNumber,
    Quiz: Quiz
  },
  {
    initialRouteName: "Home"
  }
)
const App = createAppContainer(AppNavigator)

export default App