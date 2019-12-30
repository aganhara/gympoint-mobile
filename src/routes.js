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
            Checkins: createStackNavigator(
              {
                Checkins,
              },
              {
                navigationOptions: {
                  tabBarLabel: 'Check-ins',
                  tabBarIcon: ({ tintColor }) => (
                    <Icon name="add-location" size={20} color={tintColor} />
                  ),
                },
              }
            ),
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
            resetOnBlur: true,
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
