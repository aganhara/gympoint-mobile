import React, { useState, useEffect } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Header from '~/components/Header';

import {
  Container,
  SubmitButton,
  ListHelp,
  HelpContainer,
  HelpContainerWrap,
  HelpHeader,
  Ansewered,
  HelpCreationDate,
  Question,
} from './styles';

export default function Help() {
  const [helpOrders, setHelpOrders] = useState([]);
  const id = 2;

  useEffect(() => {
    async function loadHelpRequests() {
      const response = await api.get(`students/${id}/help-orders`);

      setHelpOrders(
        response.data.map(helpOrder => {
          return {
            ...helpOrder,
            formattedCreationDate: formatRelative(
              parseISO(helpOrder.createdAt),
              new Date(),
              { locale: pt }
            ),
          };
        })
      );
    }
    loadHelpRequests();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <SubmitButton onPress={() => {}}>Novo pedido de auxílio</SubmitButton>
        <ListHelp
          data={helpOrders}
          keyExtractor={helpOrder => String(helpOrder.id)}
          renderItem={({ item: helpOrder }) => (
            <HelpContainer onPress={() => {}}>
              <HelpContainerWrap>
                <HelpHeader>
                  <Ansewered answered={!!helpOrder.answer}>
                    {helpOrder.answer ? 'Respondido' : 'Sem resposta'}
                  </Ansewered>
                  <HelpCreationDate>
                    {helpOrder.formattedCreationDate}
                  </HelpCreationDate>
                </HelpHeader>
                <Question>{helpOrder.question}</Question>
              </HelpContainerWrap>
            </HelpContainer>
          )}
        />
      </Container>
    </>
  );
}

Help.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};
