import React from 'react';
import { StatusBar } from 'react-native';

import createRouter from './routes';

import 'react-native-gesture-handler';

export default function App() {
  const signed = true;
  const Routes = createRouter(signed);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Routes />
    </>
  );
}
