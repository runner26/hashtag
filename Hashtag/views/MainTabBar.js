import { TabNavigator } from 'react-navigation';
import Chats from './Chats';
import Calls from './Calls';
import Explore from './Explore';
import styles from '../styles/mainTabBar';

const MainTabBar = TabNavigator({
  Chats: {
    screen: Chats,
    tabBarLabel: 'CHATS'
  },
  Calls: {
    screen: Calls,
    tabBarLabel: 'CALLS'
  },
  Explore: {
    screen: Explore,
    tabBarLabel: 'EXPLORE'
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'rgb(0, 204, 255)',
    inactiveTintColor: 'grey',
    showIcon: false,
    style: styles.container,
    showLabel: true,
    labelStyle: styles.labelStyle
  },
  swipeEnabled: true
});

export default MainTabBar;
