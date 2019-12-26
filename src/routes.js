import 'react-native-gesture-handler'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Cart from './screens/Cart'
import Dashboard from './screens/Dashboard'
import BottomTab from './components/BottomTab'

const Home = createBottomTabNavigator(
  {
    Cart,
    Dashboard,
  },
  {
    tabBarComponent: BottomTab,
  },
)

export default createAppContainer(
  createSwitchNavigator(
    {
      Home,
    },
    {initialRouteName: 'Home'},
  ),
)
