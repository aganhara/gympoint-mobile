import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import {
  Container,
  SubmitButton,
  CheckinList,
  Checkin,
  Label,
  Time,
} from './styles';

export default function Checkins() {
  const checkins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 45, 16];
  return (
    <>
      <Header />
      <Container>
        <SubmitButton onPress={() => {}}>Novo check-in</SubmitButton>
        <CheckinList
          data={checkins}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <Checkin>
              <Label>Check-in #{item}</Label>
              <Time>Hoje às 14 horas</Time>
            </Checkin>
          )}
        />
      </Container>
    </>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="add-location" size={20} color={tintColor} />
  ),
};
