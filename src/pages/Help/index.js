import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

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

function Help({ navigation, isFocused }) {
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
              parseISO(helpOrder.updatedAt),
              new Date(),
              { locale: pt }
            ),
          };
        })
      );
    }
    loadHelpRequests();
  }, [isFocused]);
  return (
    <>
      <Container>
        <SubmitButton
          onPress={() => {
            navigation.navigate('NewHelp');
          }}
        >
          Novo pedido de auxílio
        </SubmitButton>
        <ListHelp
          data={helpOrders}
          keyExtractor={helpOrder => String(helpOrder.id)}
          renderItem={({ item: helpOrder }) => (
            <HelpContainer
              onPress={() => {
                navigation.navigate('HelpOrderView', { helpOrder });
              }}
            >
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
  headerTitle: <Header />,
  headerLayoutPreset: 'center',
};

export default withNavigationFocus(Help);

Help.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};
