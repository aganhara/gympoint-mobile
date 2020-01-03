import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useSelector } from 'react-redux';

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
  const id = useSelector(state => state.student.id);
  const itemsPerPage = 15;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [checkins, setCheckins] = useState([]);

  async function loadCheckins() {
    setLoading(true);
    const response = await api.get(
      `/students/${id}/checkin?per_page=${itemsPerPage}&page=${page}`
    );

    const { count, rows } = response.data;

    setCheckins([
      ...checkins,
      ...rows.map((checkin, index) => {
        return {
          ...checkin,
          index: count - itemsPerPage * (page - 1) - (index + 1),
          formattedDate: formatRelative(
            parseISO(checkin.created_at),
            new Date(),
            {
              locale: pt,
            }
          ),
        };
      }),
    ]);

    setPage(page + 1);
    setLoading(false);
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
  }, []); // eslint-disable-line

  return (
    <>
      <Container>
        <SubmitButton onPress={handleNewCheckin}>Novo check-in</SubmitButton>
        <CheckinList
          data={checkins}
          keyExtractor={checkin => String(checkin.index)}
          onEndReached={loadCheckins}
          onEndReachedThreshold={0.01}
          renderItem={({ item }) => (
            <Checkin>
              <Label>Check-in #{item.index + 1}</Label>
              <Time>{item.formattedDate}</Time>
            </Checkin>
          )}
          ListFooterComponent={() =>
            loading && <ActivityIndicator color="#ee4d64" />
          }
        />
      </Container>
    </>
  );
}

Checkins.navigationOptions = {
  headerTitle: <Header />,
  headerLayoutPreset: 'center',
};
