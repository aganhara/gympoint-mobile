import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import {
  Container,
  QuestionContainer,
  QuestionHeader,
  Label,
  Time,
  Text,
  AnswerContainer,
} from './styles';

export default function HelpOrderView({ navigation }) {
  const helpOrder = navigation.getParam('helpOrder');

  return (
    <Container>
      <QuestionContainer>
        <QuestionHeader>
          <Label>Pergunta</Label>
          <Time>{helpOrder.formattedCreationDate}</Time>
        </QuestionHeader>
        <Text>{helpOrder.question}</Text>
        <AnswerContainer>
          <Label>Resposta</Label>
          <Text>{helpOrder.answer ? helpOrder.answer : 'Sem resposta'}</Text>
        </AnswerContainer>
      </QuestionContainer>
    </Container>
  );
}

HelpOrderView.navigationOptions = ({ navigation }) => ({
  headerTitle: <Header marginRight={44} />,
  // headerLayoutPreset: 'center',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={{ marginLeft: 20 }}
    >
      <Icon name="chevron-left" size={24} color="#000" />
    </TouchableOpacity>
  ),
});
