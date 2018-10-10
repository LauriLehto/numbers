import { createStackNavigator } from "react-navigation";

import RandomFact from "./src/RandomFact";
import HomeScreen from "./src/HomeScreen";
import FavNumber from "./src/FavNumber";
import Quiz from "./src/Quiz";

export default (App = createStackNavigator(
  {
    Home: HomeScreen,
    RandomFact: RandomFact,
    FavNumber: FavNumber,
    Quiz: Quiz
  },
  {
    initialRouteName: "Home"
  }
));
