import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import 'react-native-gesture-handler';
import createRouter from './routes';

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
