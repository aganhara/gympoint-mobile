import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import Checkins from './pages/Checkins';
import Help from './pages/Help';
import NewHelp from './pages/NewHelp';
import HelpOrderView from '~/pages/HelpOrderView';

export default (signedIn = true) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({ SignIn }),
        App: createBottomTabNavigator(
          {
            Checkins,
            Help: createStackNavigator(
              {
                Help,
                NewHelp,
                HelpOrderView,
              },
              {
                navigationOptions: {
                  tabBarLabel: 'Pedir ajuda',
                  tabBarIcon: ({ tintColor }) => (
                    <Icon name="live-help" size={20} color={tintColor} />
                  ),
                },
              }
            ),
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999',
              style: {
                backgroundColor: '#fff',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
