import * as React from 'react';
import { Image } from 'react-native';
import Ionicons from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import PlanScreen from './src/components/PlanScreen';
import ManageScreen from './src/components/ManageScreen';
import CommunicateScreen from './src/components/CommunicateScreen';
import AchieveScreen from './src/components/AchieveScreen';
import ShareScreen from './src/components/ShareScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Plan: PlanScreen,
    Manage: ManageScreen,
    Communicate: CommunicateScreen,
    Achieve: AchieveScreen,
    Share: ShareScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        switch (routeName) {
          case 'Plan':
            icon = require('./src/assets/TabBarIcons/Plan.png');
            break;
          case 'Manage':
            icon = require('./src/assets/TabBarIcons/Manage.png');
            break;
          case 'Achieve':
            icon = require('./src/assets/TabBarIcons/Achieve.png');
            break;
          case 'Communicate':
            icon = require('./src/assets/TabBarIcons/Communicate.png');
            break;
          case 'Share': {
            icon = require('./src/assets/TabBarIcons/Share.png');
            break;
          }
          default:
            icon = require('./src/assets/TabBarIcons/Share.png');
        }

        return <Image source={icon} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
