import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CocktailDetailsScreen from "./src/screen/CocktailDetailsScreen";

import SearchScreen from "./src/screen/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    CocktailDetailsScreen: CocktailDetailsScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
