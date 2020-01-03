import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
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
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const id = useSelector(state => state.student.id);

  async function loadHelpRequests() {
    setLoading(true);
    const response = await api.get(
      `students/${id}/help-orders?per_page=${itemsPerPage}&page=${page}`
    );

    setHelpOrders([
      ...helpOrders,
      ...response.data.map(helpOrder => {
        return {
          ...helpOrder,
          formattedCreationDate: formatRelative(
            parseISO(helpOrder.updatedAt),
            new Date(),
            { locale: pt }
          ),
        };
      }),
    ]);

    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadHelpRequests();
  }, [id, isFocused]); // eslint-disable-line

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
          onEndReached={loadHelpRequests}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => loading && <ActivityIndicator />}
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
