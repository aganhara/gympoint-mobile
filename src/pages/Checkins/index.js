import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import api from '~/services/api';

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
  const id = 7;
  const [checkins, setCheckins] = useState([]);

  async function loadCheckins() {
    const response = await api.get(`/students/${id}/checkin`);

    setCheckins(
      response.data.map((checkin, index) => {
        return {
          ...checkin,
          index: response.data.length - (index + 1),
          formattedDate: formatRelative(
            parseISO(checkin.created_at),
            new Date(),
            {
              locale: pt,
            }
          ),
        };
      })
    );
  }
  async function handleNewCheckin() {
    try {
      await api.post(`/students/${id}/checkin`);
      Alert.alert('Sucesso', 'Novo check-in cadastrado com sucesso');
      loadCheckins();
    } catch (err) {
      Alert.alert('Erro', 'Não foi possivel cadastrar novo check-in');
    }
  }

  useEffect(() => {
    loadCheckins();
  }, []);

  return (
    <>
      <Container>
        <SubmitButton onPress={handleNewCheckin}>Novo check-in</SubmitButton>
        <CheckinList
          data={checkins}
          keyExtractor={checkin => String(checkin.index)}
          renderItem={({ item }) => (
            <Checkin>
              <Label>Check-in #{item.index + 1}</Label>
              <Time>{item.formattedDate}</Time>
            </Checkin>
          )}
        />
      </Container>
    </>
  );
}

Checkins.navigationOptions = {
  headerTitle: <Header />,
  headerLayoutPreset: 'center',
};
